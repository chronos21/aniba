const express = require('express');
const moment = require('moment');
const mongoose = require('mongoose');
const crawler = require('./handlers/crawler');
const Comment = require('./models/comment');
const Series = require('./models/series');
const axios = require('axios');
const fs = require('fs')
// let key = 'abcdefghijklmnopqrstuvwxyz';
// let pointer1 = 0;
// let pointer2 = 0;

const app = express();
const PORT = process.env.PORT || 8080;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

mongoose
	.connect('mongodb://cahya:isra12@ds213529.mlab.com:13529/aniba', {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => {
		console.log('Mongo status green');
	}).catch(err => console.log(err));

app.locals.moment = moment;
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.static('views'));

app.use(express.json());

app.get('/test/all', async (req, res) => {
	let sort = { createdAt: -1 };
	let { skip, limit, q } = req.query;
	let search = null;
	if (q) {
		search = { title: new RegExp(q.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'), 'gi') };
	}
	// console.log(search);
	if (!limit || isNaN(Number(limit))) limit = 99;
	if (!skip || isNaN(Number(skip))) skip = 0;
	let series = await Series.find(search).limit(Number(limit)).skip(Number(skip)).sort(sort);
	return res.status(200).json({ series });
});

app.post('/api/comments/:parentId', async (req, res) => {
	let { text, authorId } = req.body;
	let { parentId } = req.params;
	if (!text || !parentId || !authorId) return res.status(400);
	let newComment = await Comment.create({ text, parentId, authorId }).catch((err) => console.log(err));
	return res.json({ comment: newComment });
});

app.get('/api/comments/:parentId', async (req, res) => {
	let { parentId } = req.params;
	let comments = await Comment.find({ parentId });
	return res.json({ comments });
});

app.get('/', async (req, res) => {
	try{
		let data = await crawler.getHome();
		res.render('home', { data, tab: 'home', title: 'aniba' });
	} catch(err){
        console.log(err)
        res.end()
	}
});

app.get('/search', async (req, res) => {
	try{
		let { q } = req.query;
		let data = await crawler.getSearch(q);
		res.render('search', { data, q, tab: 'home', title: `results for: "${q}"` });
		crawler.saveSeries(data);
	} catch(err){
        console.log(err)
        res.end()
	}

});

app.get('/video', async (req, res) => {
    try{

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
            'Content-Type': 'video/mp4'
        };
    
        if (range && headers['content-range']) {
            status = 206;
            head = {
                'Content-Range': headers['content-range'],
                'Accept-Ranges': 'bytes',
                'Content-Length': headers['content-length'],
                'Content-Type': 'video/mp4'
            };
        }
    
        res.status(status)
        res.set(head)
    
        if(download){
            res.attachment(title)
        }
        data.pipe(res);
    } catch(err){
        console.log(err.message)
		res.end()
    }
});

app.get('/:id', async (req, res) => {
	try{
        let url = req.params.id;
        let data = await crawler.getDetail(url);
        if(!data.video || data.video.includes('undefined')){
            data = await crawler.getAnimerushDetail(url)   
        }
		let download = req.query.download
		if(download){
			res.redirect(`/video?url=${data.video}&embed=${data.embed}&download=true&title=${data.title}.mp4`)
		} else {
			res.render('detail', { data, tab: 'detail', title: `Watch ${data.title} for free`, url });
		}
	} catch(err){
		console.log(err)
		res.end()
	}

});

app.get('/series/:id', async (req, res) => {
	try{

		let id = req.params.id;
		let data = await crawler.getSeries(id);
		// // console.log(data);
		// if (data == null || !Array.isArray(data.episodes)) {
		// 	data = await crawler.getSeries(id);
		// 	crawler.saveEpisodes(data);
		// } else {
		// 	setTimeout(async () => {
		// 		let newData = await crawler.getSeries(id);
		// 		crawler.saveEpisodes(newData);
		// 	}, 4000);
		// 	// console.log(data);
		// }
		if(req.query.batch){
			let ep = [...data.episodes]
			ep.reverse()
			let string = ''
			for(let item of ep){
				string += ('https://anibaniba.herokuapp.com' + item.href + '?download=true' + '\r\n')
			}
			let dir = './public/' + id + '.txt'
			fs.writeFileSync(dir, string)
			res.download(dir)
		} else {
			res.render('series', {
				data,
				tab: 'home',
				title: `aniba - ${data.title} | Watch all episodes of ${data.title} for`
			});
		}

	} catch(err){
		console.log(err)
		res.end()
	}


});

app.listen(PORT, () => console.log('Enjin Stato ' + PORT));
