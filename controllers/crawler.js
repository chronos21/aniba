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
			let status = '';
			let img = $(this).find('img').attr('src');
			$(this).find('.media-body .first div').each(function(index) {
				let text = $(this).text();
				if (text.includes('Episodes')) {
					episodes = text;
				} else if (text.includes('Status')) {
					status = text;
				}
			});
			arr.push({ title, episodes, status, href, img });
		});
	}
	return arr;
}

async function getHome() {
	let res = await axios.post('https://www.animegg.org/index/recentReleases');
	let arr = [];
	if (res.data.recentReleases.length > 0) {
		arr = res.data.recentReleases;
	}
	return arr;
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
		obj['embed'] = 'https://www.animegg.org' + $('#subbed-Animegg iframe').attr('src');
		obj['video'] = await getVideo(obj['embed']);
		obj['title'] = $('.titleep a').text() + ' ' + $('.e4tit').text();
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

async function getSeries(url) {
	let res = await axios.get('https://www.animegg.org/series/' + url).catch((err) => console.log(err));
	let obj = {
		title: '',
		status: '',
		desc: '',
		img: '',
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
		obj['img'] = $('.media img').attr('src');
		obj['status'] = $('.media-body .infoami').text().split('Alternate')[0].replace('Status:', ' | Status:');
		obj['desc'] = $('.ptext').text();
		obj['episodes'] = episodes;
	}
	return obj;
}

exports.getHome = getHome;
exports.getDetail = getDetail;
exports.getSearch = getSearch;
exports.getSeries = getSeries;
