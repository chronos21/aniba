const express = require('express');
const cheerio = require('cheerio');
const axios = require('axios');
const moment = require('moment');

const app = express();
const PORT = process.env.PORT || 8080;

app.locals.moment = moment;
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', async (req, res) => {
	let data = await getHome();
	res.render('home', { data, tab: 'home', title: 'aniba' });
});

app.get('/search', async (req, res) => {
	let { q } = req.query;
	let data = await getSearch(q);
	res.render('search', { data, q, tab: 'home', title: `results for: "${q}"` });
});

app.get('/:id', async (req, res) => {
	let url = req.params.id;
	let data = await getDetail(url);
	res.render('detail', { data, tab: 'home', title: `Watch ${data.title} for free` });
});

app.get('/series/:id', async (req, res) => {
	let id = req.params.id;
	let data = await getSeries(id);
	res.render('series', {
		data,
		tab: 'home',
		title: `aniba - ${data.title} | Watch all episodes of ${data.title} for`
	});
});

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
		all: ''
	};
	if (!url.includes('-')) return obj;
	let res = await axios.get('https://www.animegg.org/' + url + '#subbed').catch((err) => console.log('err'));

	if (res) {
		let $ = cheerio.load(res.data);
		obj['video'] = 'https://www.animegg.org' + $('#subbed-Animegg iframe').attr('src');
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

// getSearch('days');

app.listen(PORT, () => console.log('Enjin Stato ' + PORT));
