const cheerio = require('cheerio');
const axios = require('axios');

async function getSearch(q) {
	let res = await axios.get('https://www.animegg.org/search/?q=' + q);
	let arr = [];
	if (res) {
		let $ = cheerio.load(res.data);
		$('.moose > .mse').each(function(index) {
			let href = $(this).attr('href');
			let title = $(this).find('h2').text();
			let episodes = '';
			let altTitles = '';
			let status = '';
			let img = $(this).find('img').attr('src');
			$(this).find('.media-body .first div').each(function(index) {
				let text = $(this).text();
				if (text.includes('Episodes')) {
					episodes = text;
				} else if (text.includes('Status')) {
					status = text;
				} else if (text.includes('Alt')) {
					altTitles = text;
				}
			});
			arr.push({ title, episodes, status, href, img, altTitles });
		});
	}
	return arr;
}

async function getHome() {
    let {data} = await axios.get('https://www.animerush.tv')
    let $ = cheerio.load(data)
    let arr = []
    $('#episodes .episode').each(function(index){
        let obj = {
            href: $(this).find('h3 a').attr('href').replace('//www.animerush.tv/', ''),
			title: $(this).find('h3').text(),
			time: $(this).find('.episode-meta').text(),
			img: $(this).find('img').attr('src').replace('//www.animerush.tv/', '').replace('anime-images/', '').replace('anime-images-big', ''),
        }
        arr.push(obj)
    })
    return arr
}

async function getAnimerushVideo(embedUrl, hd = false) {
    let { data } = await axios.get(embedUrl)
    let $ = cheerio.load(data)
    let url = ''
    $('script').each(function (index) {
        let s = $(this).html()
        if (s.includes('eval')) {
            s = s.split('|player')[1].split('|')
            let http = s[4]
            let www = s[19]
            let filename = s[70]
            let src = s[71]
            let port = s[72]
            let ext = s[69]

            if(hd){
                src = s[74]
                port = s[75]
                filename = s[73]
                ext = s[72]
            }
            url = `${http}://${www}.mp4upload.com:${port}/d/${src}/${filename}.${ext}`
            return false
        }
    })
    return url
}

async function getAnimerushDetails(url, hd) {
	let { data } = await axios.get('https://www.animerush.tv/' + url)
    let $ = cheerio.load(data)
    if(hd){
        let a = $('.hdlogo').parent().find('h3 a').attr('href')
        let d = await axios.get('https:' + a)
        $ = cheerio.load(d.data)
    }
    let obj = {
        embed: 'https://www.mp4upload.com',
        videoUrl: $('.player-area iframe').attr('src'),
        hd,
        title: $('.bannertit h1').text(),
        prev: $('.ep-prev a').attr('href').replace('//www.animerush.tv', ''),
		all: $('.ep-more a').attr('href').replace('//www.animerush.tv/anime/', '/series/'),
		next: $('.ep-next a').attr('href').replace('//www.animerush.tv', ''),
    }
    obj.video = await getAnimerushVideo(obj.videoUrl, hd)
    return obj
}

async function getDetails(url, hd = false) {
	let obj = {
		video: '',
		title: '',
        prev: '',
        hd,
		next: '',
		all: '',
		embed: ''
	};
	if (!url.includes('-')) return obj;
	let res = await axios.get('https://www.animegg.org/' + url + '#subbed').catch((err) => console.log(err.message));

	if (res) {
		let $ = cheerio.load(res.data);
		let vidSource = $('#subbed-Animegg iframe').attr('src');
		if(!vidSource) vidSource = $('#dubbed-Animegg iframe').attr('src');
        obj.embed = 'https://www.animegg.org' + vidSource

        try{
            obj.video = await getVideoUrl(obj['embed'], hd);
        } catch(err){
            console.log(err.message)
            obj.video = await getVideoUrl(obj['embed']);
            obj.hd = false
        }

		obj.title = $('.titleep a').text() + ' ' + $('.e4tit').text();
		if(!obj.title.includes('sode')){
			obj.title = $('.info strong').text();
		}
		$('.nap a').each(function(index) {
			if ($(this).attr('href') !== undefined && $(this).attr('href').includes('series')) {
				obj.all = $(this).attr('href').replace('#episodes', '');
				return false;
			}
		});
		obj.prev = $('#previewEpisode').attr('href');
		obj.next = $('#nextEpisode').attr('href');
		if (obj.prev === undefined) obj.prev = '#';
		if (obj.next === undefined) obj.next = '#';
	}
	return obj;
}

async function getVideoUrl(url, hd = false) {
    let videoLink = undefined;
    try{
        let { data } = await axios.get(url);
        if (data) {
            let $ = cheerio.load(data);
            let playUrl = $('[property="og:video"]').attr('content')
            if(hd){
                $('script').each(function(){
                    let html = $(this).html()
                    if(html.includes('videoSources')){
                        let a = html.replace('var videoSources = ', '').split('}];')[0] + '}]'
                        let b = a.split(',{file: ')[1].split(', label:')[0].replace(/"/g, '')
                        playUrl = b               
                        return false
                    }
                })
            }
            videoLink = 'https://www.animegg.org' + playUrl;
        } else {
            throw new Error('NO HTML DATA FOUND')
        }
    } catch(err){
        console.log(err.message)
    }
	
	return videoLink;
}

async function getSeries(url) {
	let res = await axios.get('https://www.animegg.org/series/' + url).catch((err) => console.log(err));
	let obj = {
		title: '',
		status: '',
		desc: '',
		href: '',
		img: '',
		altTitles: '',
		episodes: []
	};
	if (res) {
		let $ = cheerio.load(res.data);
		let episodes = [];
		$('.newmanga li div').each(function(index) {
			let title = $(this).find('strong').text();
			let subtitle = $(this).find('.anititle').text();
			let href = $(this).find('a').attr('href');
			episodes.push({ title, href, subtitle });
		});
		obj['title'] = $('.media-body h1').text();
		obj['altTitles'] = 'Alt' + $('.media-body .infoami').text().split('Alternate')[1];
		obj['img'] = $('.media img').attr('src');
		obj['status'] = $('.media-body .infoami').text().split('Alternate')[0].replace('Status:', ' | Status:');
		obj['desc'] = $('.ptext').text();
		obj['episodes'] = episodes;
		obj['href'] = '/series/' + url;
	}
	return obj;
}

exports.getHome = getHome;
exports.getDetails = getDetails;
exports.getAnimerushDetails = getAnimerushDetails;
exports.getAnimerushVideo = getAnimerushVideo;
exports.getSearch = getSearch;
exports.getSeries = getSeries;
