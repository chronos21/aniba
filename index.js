const express = require('express');
const moment = require('moment');
const mongoose = require('mongoose');
const crawler = require('./controllers/crawler');
const Comment = require('./models/comment');
const Failure = require('./models/failure');
const Home = require('./models/home');
const Episode = require('./models/episode');
const Series = require('./models/series');
const axios = require('axios');
const cors = require('cors');
const path = require('path');

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
	})
	.catch((err) => saveFailure(err, 'Mongo'));

app.locals.moment = moment;
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.static('views'));
app.use(cors());

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

app.get('/api/test/all', async (req, res) => {
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
	try {
		let { text, authorId } = req.body;
		let { parentId } = req.params;
		if (!text || !parentId || !authorId) return res.status(400);
		let newComment = await Comment.create({ text, parentId, authorId }).catch((err) => console.log(err));
		return res.json({ comment: newComment });
	} catch (err) {
		res.status(404).json({err});;
		saveFailure(err, req.url);
	}
});

app.get('/api/comments/:parentId', async (req, res) => {
	try {
		let { parentId } = req.params;
		let comments = await Comment.find({ parentId });
		return res.json({ comments });
	} catch (err) {
		res.status(404).json({err});;
		saveFailure(err, req.url);
	}
});

app.post('/api/home', async(req, res) => {
	try{
		let {type, key} = req.body;
		console.log(req.body)
		if(type === 'browse' && !key) res.status(404).json({err});
		let data = await Home.create({...req.body})
		res.json({data})
	} catch(err){
		res.status(404).json({err})
		saveFailure(err, req.url)
	}


})

app.delete('/api/home/:title', async(req, res) => {
	try {
		let { title } = req.params;
		let data = await Home.deleteOne({ title })
		res.json(data)
	} catch(err){
		res.status(404).json({ err });
		saveFailure(err, req.url);
	}
})

app.get('/api/home', async (req, res) => {
	let { json, skip, limit, newReleases} = req.query;
	let sort = { order: 1 };
	let search = {type: 'browse'}
	if(newReleases) search.type = 'new_releases'
	try {
		if (!limit || isNaN(Number(limit))) limit = 99;
		if (!skip || isNaN(Number(skip))) skip = 0;
		// console.log(req.query)
		let data = await Home.find(search).limit(Number(limit)).skip(Number(skip)).sort(sort);
		console.log(data)
		for(let item of data){
			let content = [];
			if(item.type === 'new_releases'){
				content = await crawler.getHome()
				crawler.saveNewReleases(content);
			} else {
				content = await crawler.getBrowse(item.key)
			}
			item.content = content
		}
		if (json) {
			res.json({ data });
		} else {
			res.status(404).json({err});
		}
	} catch (err) {
		res.status(404).json({err});
		saveFailure(err, req.url);
	}
});

// app.post('/api/browse', async (req, res) => {
// 	try {
// 		let { key } = req.body;
// 		let data = await crawler.getBrowse(key);
// 		res.json({ data });
// 	} catch (err) {
// 		res.status(404).json({err});;
// 		saveFailure(err, req.url);
// 	}
// });

app.get('/api/search', async (req, res) => {
	try {
		let { q, json } = req.query;
		let data = await crawler.getSearch(q);
		if (json) {
			res.json({ data, q });
		} else {
			res.render('search', { data, q, tab: 'home', title: `results for: "${q}"` });
		}
		crawler.saveSeries(data);
	} catch (err) {
		res.status(404).json({err});;
		saveFailure(err, req.url);
	}
});

app.get('/api/video', async (req, res) => {
	let { url, embed } = req.query;
	let range = req.headers['range'];
	let reqHeaders = {
		Referer: embed
	};
	if (range && !range.includes('bytes=0')) {
		reqHeaders = {
			Referer: embed,
			Range: range
		};
	}

	let { data } = await axios({
		url: url,
		headers: reqHeaders,
		responseType: 'stream'
	}).catch((err) => {
		saveFailure(err, req.url);
		return res.status(404).json({err});;
	});

	data.pipe(res);
});

app.get('/api/episodes/:id', async (req, res) => {
	let { json } = req.query;
	try {
		let url = req.params.id;
		let data = await crawler.getDetail(url);
		if (json) {
			res.json({ data });
		} else {
			res.render('detail', { data, tab: 'home', title: `Watch ${data.title} for free`, url });
		}
	} catch (err) {
		res.status(404).json({err});;
		saveFailure(err, req.url);
	}
});

app.get('/api/series/:id', async (req, res) => {
	let { json } = req.query;
	try {
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
		if (json) {
			res.json({ data });
		} else {
			res.render('series', {
				data,
				tab: 'home',
				title: `aniba - ${data.title} | Watch all episodes of ${data.title} for`
			});
		}
	} catch (err) {
		res.status(404).json({err});;
		saveFailure(err, req.url);
	}
});

app.get('/api/failures', async (req, res) => {
	let sort = { createdAt: -1 };
	let { skip, limit, q } = req.query;
	if (!limit || isNaN(Number(limit))) limit = 99;
	if (!skip || isNaN(Number(skip))) skip = 0;
	let data = await Failure.find().limit(Number(limit)).skip(Number(skip)).sort(sort);
	return res.status(200).json({ data });
});

app.get('/api/new-releases', async (req, res) => {
	let sort = { createdAt: -1 };
	let { skip, limit, q } = req.query;
	if (!limit || isNaN(Number(limit))) limit = 99;
	if (!skip || isNaN(Number(skip))) skip = 0;
	let data = await Episode.find().limit(Number(limit)).skip(Number(skip)).sort(sort);
	return res.status(200).json({ data });
});

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

function saveFailure(obj, source) {
	Failure.create({ text: JSON.stringify(obj), source })
		.then(() => {
			console.log('Failure Saved');
		})
		.catch(() => console.log('Failure not saved'));
}

app.listen(PORT, () => console.log('Enjin Stato ' + PORT));
