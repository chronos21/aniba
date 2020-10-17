const cheerio = require('cheerio');
const axios = require('axios');
const Series = require('../models/series');

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
			img: $(this).find('img').attr('src').replace('//www.animerush.tv/', ''),
        }
        arr.push(obj)
    })
    return arr
}

async function getAnimerushVideo(embedUrl) {
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
            url = `${http}://${www}.mp4upload.com:${port}/d/${src}/${filename}.${ext}`
            return false
        }
    })
    return url
}

async function getAnimerushDetail(url) {
	let {data} = await axios.get('https://www.animerush.tv/' + url)
    let $ = cheerio.load(data)
    let obj = {
        embed: 'https://www.mp4upload.com',
        videoUrl: $('.player-area iframe').attr('src'),
        title: $('.bannertit').text()
    }
    obj.video = await getAnimerushVideo(obj.videoUrl)
 
    return obj
}

async function getDetail(url) {
	let obj = {
		video: '',
		title: '',
		prev: '',
		next: '',
		all: '',
		embed: ''
	};
	if (!url.includes('-')) return obj;
	let res = await axios.get('https://www.animegg.org/' + url + '#subbed').catch((err) => console.log(err));

	if (res) {
		let $ = cheerio.load(res.data);
		let vidSource = $('#subbed-Animegg iframe').attr('src');
		if(!vidSource) vidSource = $('#dubbed-Animegg iframe').attr('src');
		obj['embed'] = 'https://www.animegg.org' + vidSource
		obj['video'] = await getVideo(obj['embed']);
		obj['title'] = $('.titleep a').text() + ' ' + $('.e4tit').text();
		if(!obj['title'].includes('sode')){
			obj['title'] = $('.info strong').text();
		}
		$('.nap a').each(function(index) {
			if ($(this).attr('href') !== undefined && $(this).attr('href').includes('series')) {
				obj['all'] = $(this).attr('href').replace('#episodes', '');
				return false;
			}
		});
		obj['prev'] = $('#previewEpisode').attr('href');
		obj['next'] = $('#nextEpisode').attr('href');
		if (obj['prev'] === undefined) obj['prev'] = '#';
		if (obj['next'] === undefined) obj['next'] = '#';
	}
	return obj;
}

async function getVideo(url) {
	let { data } = await axios.get(url);
	let videoLink = '';
	if (data) {
		let $ = cheerio.load(data);
		videoLink = 'https://www.animegg.org' + $('[property="og:video"]').attr('content');
	}
	return videoLink;
}

async function getSeries(url, doCrawl = false) {
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

async function saveSeries(arr) {
	if (typeof arr === 'string') arr = await getSearch(arr);
	if (arr.length > 0) {
		let series = await Series.find().catch((err) => console.log(err));
		let length = series.length;
		series = series.map((item) => item.title);
		// console.log(series);
		for (let el of arr) {
			if (!series.includes(el.title)) {
				let newSeries = await Series.create({ ...el });
				console.log(newSeries);
			}
		}
		let newLength = await Series.find().catch((err) => console.log(err));
		newLength = newLength.length;
		console.log(length, newLength);
	}
}

async function saveEpisodes(obj) {
	let { title, episodes, desc } = obj;
	let series = await Series.findOne({ title: title });
	if (series !== null) {
		let modified = false;
		if (series.episodes[0].subtitle !== episodes[0].subtitle) {
			series.episodes = episodes;
			series.markModified('episodes');
			await series.save();
			modified = true;
		}
		if (series.desc !== desc) {
			series.desc = desc;
			await series.save();
			modified = true;
		}
		console.log('Modified: ' + modified.toString());
	} else {
		await Series.create({ ...obj });
		console.log('Created ' + title);
	}
}

exports.getHome = getHome;
exports.getDetail = getDetail;
exports.getAnimerushDetail = getAnimerushDetail;
exports.getAnimerushVideo = getAnimerushVideo;
exports.getSearch = getSearch;
exports.getSeries = getSeries;
exports.saveSeries = saveSeries;
exports.saveEpisodes = saveEpisodes;
