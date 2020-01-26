const express = require('express');
const moment = require('moment');
const mongoose = require('mongoose');
const crawler = require('./controllers/crawler');
const Comment = require('./models/comment');
const Series = require('./models/series');
const axios = require('axios');
// let key = 'abcdefghijklmnopqrstuvwxyz';
// let pointer1 = 0;
// let pointer2 = 0;

const app = express();
const PORT = process.env.PORT || 8080;

mongoose
	.connect('mongodb://cahya:isra12@ds213529.mlab.com:13529/aniba', {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => {
		console.log('Mongo status green');
		// doCrawl();
	});

app.locals.moment = moment;
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());

// async function doCrawl() {
// 	let q = key[pointer1] + key[pointer2];
// 	await crawler.saveSeries(q);
// 	if (q == 'zz') {
// 		return;
// 	} else {
// 		if (pointer2 === key.length - 1) {
// 			pointer1 += 1;
// 			pointer2 = 0;
// 		} else {
// 			pointer2 += 1;
// 		}
// 		return doCrawl();
// 	}
// }

app.get('/test/all', async (req, res) => {
	let sort = { createdAt: -1 };
	let { skip, limit, q } = req.query;
	let search = null;
	if (q) {
		search = { title: new RegExp(q.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'), 'gi') };
	}
	// console.log(search);
	if (!limit || Number(limit) === NaN) limit = 99;
	if (!skip || Number(skip) === NaN) skip = 0;
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
	let data = await crawler.getHome();
	res.render('home', { data, tab: 'home', title: 'aniba' });
});

app.get('/search', async (req, res) => {
	let { q } = req.query;
	let data = await crawler.getSearch(q);
	res.render('search', { data, q, tab: 'home', title: `results for: "${q}"` });
	crawler.saveSeries(data);
});

app.get('/video', async (req, res) => {
	let { url, embed } = req.query;
	let { data, headers } = await axios({
		url: url,
		headers: {
			Referer: embed
		},
		responseType: 'stream'
	}).catch((err) => {
		console.log(err);
		return res.status(404);
	});
	const head = {
		'Content-Length': headers['content-length'],
		'Content-Type': 'video/mp4'
	};
	res.writeHead(200, head);
	data.pipe(res);
	// res.data.on('data', (chunk) => console.log(res.headers['content-length']));
});

app.get('/:id', async (req, res) => {
	let url = req.params.id;
	let data = await crawler.getDetail(url);
	res.render('detail', { data, tab: 'home', title: `Watch ${data.title} for free`, url });
});

app.get('/series/:id', async (req, res) => {
	let id = req.params.id;
	let data = await Series.findOne({ href: '/series/' + id });
	// console.log(data);
	if (data == null || !Array.isArray(data.episodes)) {
		data = await crawler.getSeries(id);
		crawler.saveEpisodes(data);
	} else {
		setTimeout(async () => {
			let newData = await crawler.getSeries(id);
			crawler.saveEpisodes(newData);
		}, 4000);
		// console.log(data);
	}
	res.render('series', {
		data,
		tab: 'home',
		title: `aniba - ${data.title} | Watch all episodes of ${data.title} for`
	});
});

app.listen(PORT, () => console.log('Enjin Stato ' + PORT));
