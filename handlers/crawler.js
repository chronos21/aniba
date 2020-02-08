const cheerio = require('cheerio');
const axios = require('axios');
const Series = require('../models/series');
const Episode = require('../models/episode');
const User = require('../models/user');
const helper = require('./helper');
const notification = require('./notification');

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

async function getNewReleases() {
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
	let res = await axios.get('https://www.animegg.org/' + url + '#subbed').catch((err) => helper.saveLog(err));

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

async function getSeries(url, doCrawl = false) {
	let res = await axios.get('https://www.animegg.org/series/' + url).catch((err) => helper.saveLog(err));
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
		let series = await Series.find().catch((err) => helper.saveLog(err));
		let length = series.length;
		series = series.map((item) => item.title);
		// helper.saveLog(series);
		for (let el of arr) {
			if (!series.includes(el.title)) {
				let newSeries = await Series.create({ ...el });
				helper.saveLog(newSeries);
			}
		}
		let newLength = await Series.countDocuments();
		helper.saveLog(length, newLength);
		if (newLength - length > 0) {
			helper.saveLog(`Created ${newLength - length}} new series`, 'saveSeries');
		}
	}
}

async function saveNewReleases() {
	let arr = await getNewReleases();
	let userToNotify = await User.find({}, '_id');
	userToNotify = userToNotify.map((item) => item._id);
	let count = 0;
	for (let item of arr) {
		let parentId = item.Show.title;
		let title = item.Episode.title;
		let href = item.Episode.uri;
		let releasedAt = item.createdAt;
		let img = item.Show.thumbnailUrl;

		let ep = await Episode.findOne({ parentId, title });
		if (!ep) {
			let newEp = await Episode.create({
				parentId,
				title,
				href,
				img,
				releasedAt
			}).catch((err) => helper.saveLog(err));
			if (newEp) {
				if (userToNotify && userToNotify.length > 0) {
					console.log('Notifying Users');
					let url = 'https://anibaniba.herokuapp.com/' + href;
					notification.send({ content: title, headings: parentId }, url, userToNotify);
				}

				count += 1;
			}
		}
	}
	if (count > 0) {
		helper.saveLog(`Saved total ${count} new episodes`, 'saveNewReleases');
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
		helper.saveLog(`Modified ${series.title}: ${modified.toString()}`, 'saveEpisodes');
	} else {
		await Series.create({ ...obj });
		helper.saveLog('Created ' + title, 'saveEpisodes');
	}
}

async function getBrowse(query) {
	let arr = [];

	let { data } = await axios.get(`https://www.animegg.org/popular-series?${query}`);

	if (data) {
		let $ = cheerio.load(data);
		$('#popularAnime .fea').each(function(index) {
			let href = $(this).find('.rightpop > a').attr('href');
			let title = $(this).find('.rightpop > a').text();
			let episodes = '';
			let status = '';
			let img = $(this).find('img').attr('src');
			$(this).find('.btn-sm.disabled').each(function(index) {
				let text = $(this).text();
				if (text.includes('Episodes')) {
					episodes = text;
				} else if (text.includes('Ongoing') || text.includes('Completed')) {
					status = text;
				}
			});
			arr.push({ title, episodes, status, href, img });
		});
	}

	return arr;
}

exports.getNewReleases = getNewReleases;
exports.getDetail = getDetail;
exports.getSearch = getSearch;
exports.getSeries = getSeries;
exports.saveSeries = saveSeries;
exports.saveEpisodes = saveEpisodes;
exports.saveNewReleases = saveNewReleases;
exports.getBrowse = getBrowse;
