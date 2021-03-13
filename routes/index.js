const express = require('express')
const router = express.Router()
const crawler = require('../handlers/crawler');
const Comment = require('../models/comment');
const axios = require('axios');
const fs = require('fs')

router.route('/comments/:parentId')
    .post(postComment)
    .get(getComments)

router.get('/home', getHome)
router.get('/images', streamImage)
router.get('/search', getSearch)
router.get('/video', streamVideo)
router.get('/episodes/:id', getEpisode)
router.get('/series/:id', getSeries)

async function postComment(req, res) {
    try {
        let { text, authorId } = req.body;
        let { parentId } = req.params;
        if (!text || !parentId || !authorId) return res.status(400);
        let newComment = await Comment.create({ text, parentId, authorId }).catch((err) => console.log(err.message));
        return res.json({ comment: newComment });
    } catch (err) {
        res.end()
    }
}

async function getComments(req, res) {
    try {
        let { parentId } = req.params;
        let comments = await Comment.find({ parentId });
        return res.json({ comments });
    } catch (err) {
        res.end()
    }
}

async function getHome(req, res) {
    try {
        let db = req.query.from === 'db'
        let data = []
        let from = 'crawler'
        if(db){
            data = await crawler.getSavedReleases()
            from = 'db'
        } else {
            data = await crawler.getNewReleases();
        } 
        res.json({ data, from });
    } catch (err) {
        console.log(err.message)
        res.end()
    }
}

async function streamImage(req, res) {
    try {
        let url = req.query.url
        if(req.query['amp;from'] && !req.query.from){
            req.query.from = req.query['amp;from']
        }
        if (req.query.from !== 'vidcache') {
            url = 'https://www.animerush.tv/anime-images-big/' + req.query.url
        }
        let stream = await axios({
            url: url,
            responseType: 'stream'
        }).catch((err) => {
            console.log(err.message)
        });

        let data = stream.data
        let headers = stream.headers
        let status = 200;
        head = {
            'Content-Length': headers['content-length'],
            'Content-Type': headers['content-type'],
            'Cache-Control': 'public, max-age=604800, immutable'
        };
        res.status(status)
        res.set(head)
        data.pipe(res);
    } catch (err) {
        console.log(err.message)
        res.end()
    }
}

async function getSearch(req, res) {
    try {
        let { q } = req.query;
        let data = await crawler.getSearch(q);
        res.json({ data });
    } catch (err) {
        console.log(err.message)
        res.end()
    }
}

async function streamVideo(req, res) {
    try {
        let { url, embed, download, title } = req.query;
        let range = req.headers['range'];

        let reqHeaders = {
            Referer: embed
        };
        if (range) {
            reqHeaders = {
                Referer: embed,
                Range: range
            };
        }

        let stream = await axios({
            url: url,
            headers: reqHeaders,
            responseType: 'stream'
        }).catch((err) => {
            console.log(err.message)
        });

        let data = stream.data
        let headers = stream.headers

        let fileSize = headers['content-length'];
        let status = 200;
        let head = {
            'Content-Length': fileSize,
            'Content-Type': 'video/mp4',
            'Cache-Control': 'public, max-age=604800, immutable'
        };

        if (range && headers['content-range']) {
            status = 206;
            head = {
                'Content-Range': headers['content-range'],
                'Accept-Ranges': 'bytes',
                'Content-Length': headers['content-length'],
                'Content-Type': 'video/mp4',
                'Cache-Control': 'public, max-age=604800, immutable'
            };
        }

        res.status(status)
        res.set(head)

        if (download) {
            res.attachment(title)
        }
        data.pipe(res);
    } catch (err) {
        console.log(err.message)
        res.end()
    }
}

async function getEpisode(req, res) {
    try {
        let url = req.params.id;
        let hd = req.query.hd
        let src = req.query.src;
        let data = await crawler.getDetails(url, hd);
        if (src === 'ar' || !data.video || data.video.includes('undefined')) {
            data = await crawler.getAnimerushDetails(url, hd)
            if (hd && (!data.video || data.video.includes('undefined'))) {
                data = await crawler.getAnimerushDetails(url)
                data.quality = 'FALLBACK_SD'
            }
        }
        let download = req.query.download
        if (download) {
            res.redirect(`/api/video?url=${data.video}&embed=${data.embed}&download=true&title=${data.title}.mp4`)
        } else {
            res.json({ data });
        }
    } catch (err) {
        console.log(err.message)
        res.end()
    }
}

async function getSeries(req, res) {
    try {

        let id = req.params.id;
        let data = await crawler.getSeries(id);
        let hd = req.query.hd
        if (req.query.batch) {
            let ep = [...data.episodes]
            ep.reverse()
            let string = ''
            for (let item of ep) {
                string += ('https://anibaniba.herokuapp.com' + item.href + '?download=true' + (hd ? '&hd=true' : '') + '\r\n')
            }
            let dir = './public/' + id + '.txt'
            fs.writeFileSync(dir, string)
            res.download(dir)
        } else {
            res.json({ data });
        }

    } catch (err) {
        console.log(err.message)
        res.end()
    }
}

module.exports = router