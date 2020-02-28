const express = require('express');
const moment = require('moment');
const mongoose = require('mongoose');
const crawler = require('./handlers/crawler');
const notification = require('./handlers/notification');
const helper = require('./handlers/helper');
const Comment = require('./models/comment');
const User = require('./models/user');
const Home = require('./models/home');
const Episode = require('./models/episode');
const Series = require('./models/series');
const axios = require('axios');
const cors = require('cors');
const path = require('path');

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
	.catch((err) => helper.saveLog(err, 'Mongo'));

app.locals.moment = moment;
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.static('views'));
app.use(cors());

app.use(express.json());

app.get('/api/notification/send', (req, res) => {
	notification.send();
	res.json({ msg: 'Hit' });
});

app.post('/api/comments/:parentId', async (req, res) => {
	try {
		let { text, authorId } = req.body;
		let { parentId } = req.params;
		if (!text || !parentId || !authorId) return res.status(404).json({ err });
		let newComment = await Comment.create({ text, parentId, authorId });
		res.json({ comment: newComment });
	} catch (err) {
		res.status(404).json({ err });
		helper.saveLog(err, req.url);
	}
});

app.get('/api/comments/:parentId', async (req, res) => {
	try {
		let { parentId } = req.params;
		let comments = await Comment.find({ parentId });
		return res.json({ comments });
	} catch (err) {
		res.status(404).json({ err });
		helper.saveLog(err, req.url);
	}
});

app.get('/api/stats/home/new', async (req, res) => {
	try {
		let unFields = ['__v', 'id', 'createdAt', '_id'];
		let data = Object.keys(Home.schema.tree);
		data = data.filter((item) => !unFields.includes(item));
		res.json({ data });
	} catch (err) {
		res.status(404).json({ err });
		helper.saveLog(err, req.url);
	}
});

app.post('/api/stats/home/new', async (req, res) => {
	try {
		let { type, key } = req.body;
		console.log(req.body);
		if (type === 'browse' && !key) res.status(404).json({ err });
		let data = await Home.create({ ...req.body });
		res.json({ data });
	} catch (err) {
		res.status(404).json({ err });
		helper.saveLog(err, req.url);
	}
});

app.get('/api/home', async (req, res) => {
	let { json, skip, limit, type } = req.query;
	let sort = { order: 1 };
	let search = { type };
	try {
		if (!limit || isNaN(Number(limit))) limit = 99;
		if (!skip || isNaN(Number(skip))) skip = 0;
		let data = await Home.find(search).limit(Number(limit)).skip(Number(skip)).sort(sort);
		let total = 0;
		if (type === 'new_releases') {
			total = await Home.find({ type: 'browse' }).countDocuments();
		}

		for (let item of data) {
			let content = [];
			if (item.type === 'new_releases') {
				item.content = await Episode.find().limit(20).sort({ releasedAt: -1 });
				crawler.saveNewReleases(content);
			} else if (item.content.length < 1) {
				item.content = await crawler.getBrowse(item.key);
				item.save(() => helper.saveLog(`${item.title}'s content saved!`));
			}
		}
		if (json) {
			res.json({ data, total });
		} else {
			res.status(404).json({ err });
		}
	} catch (err) {
		res.status(404).json({ err });
		helper.saveLog(err, req.url);
	}
});

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
		res.status(404).json({ err });
		helper.saveLog(err, req.url);
	}
});

app.get('/api/video', async (req, res) => {
	let { url, embed } = req.query;
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

	let { data, headers } = await axios({
		url: url,
		headers: reqHeaders,
		responseType: 'stream'
	}).catch((err) => {
		helper.saveLog(err, req.url);
		return res.status(404).end();
	});

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

	res.writeHead(status, head);
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
		res.status(404).json({ err });
		helper.saveLog(err, req.url);
	}
});

app.get('/api/series/:id', async (req, res) => {
	let { json } = req.query;
	try {
		let id = req.params.id;
		let data = await Series.findOne({ href: '/series/' + id });
		if (data == null || !Array.isArray(data.episodes)) {
			data = await crawler.getSeries(id);
			crawler.saveEpisodes(data);
		} else {
			setTimeout(async () => {
				let newData = await crawler.getSeries(id);
				crawler.saveEpisodes(newData);
			}, 4000);
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
		res.status(404).json({ err });
		helper.saveLog(err, req.url);
	}
});

app.delete('/api/stats/:type', async (req, res) => {
	try {
		let { type } = req.params;
		let schema = helper.findSchema(type);
		if (!schema) return res.status(404).end();
		let data = await schema.deleteOne({ ...req.query });
		res.status(200).json({ data, type });
	} catch (err) {
		res.status(404).json({ err });
		helper.saveLog(err, req.url);
	}
});

app.post('/api/auth/:type', async (req, res) => {
	try {
		let { type } = req.params;
		let data, err;
		if (type === 'register') {
			data = await User.findOne({ username: req.body.username });
			if (!data) {
				data = await User.create({ ...req.body });
			} else {
				err = 'Username is taken';
				return res.status(404).json({ err });
			}
		} else if (type === 'login') {
			err = 'Username/password not right!';
			data = await User.findOne({ ...req.body });
		} else {
			return res.status(404).json({ err });
		}

		if (data) {
			data.password = null;
			res.status(200).json({ data, type });
		} else {
			res.status(404).json({ err });
		}
	} catch (err) {
		res.status(404).json({ err });
		helper.saveLog(err, req.url);
	}
});

app.get('/api/stats/:type', async (req, res) => {
	try {
		let { type } = req.params;
		let schema = helper.findSchema(type);
		if (!schema) return res.status(404).end();
		let sort = { createdAt: -1 };
		let { skip, limit, q } = req.query;
		if (!limit || isNaN(Number(limit))) limit = 99;
		if (!skip || isNaN(Number(skip))) skip = 0;
		let data = await schema.find().limit(Number(limit)).skip(Number(skip)).sort(sort);
		res.status(200).json({ data, type });
	} catch (err) {
		res.status(404).json({ err });
		helper.saveLog(err, req.url);
	}
});

app.get('/api/user/:userId/followed', async (req, res) => {
	try {
		let { userId } = req.params
		userId = helper.sanitizeUserId(userId)
		let data = []
		let user = await User.findById(userId)
		if (user) {
			let followed = user.followed
			if (followed.length > 0) {
				followed = followed.map(item => '/series/' + item)
				data = await Series.find({ "href": { $in: [...followed] } }, { title: 1, status: 1, href: 1, img: 1 })
			}
		}
		res.json({ data })
	} catch (err) {
		res.status(404).json({ err });
		helper.saveLog(err, req.url);
	}
})

app.post('/api/user/:userId/followed/:seriesId', async (req, res) => {
	try {
		let { userId, seriesId } = req.params
		userId = helper.sanitizeUserId(userId)
		let data = await User.findById(userId, { followed: 1, followedLength: 1 })
		let note = '';
		if (data) {
			let followed = data.followed
			if (followed.includes(seriesId)) {
				followed = followed.filter(item => item !== seriesId)
				note = 'UNFOLLOWED'
			} else {
				followed.push(seriesId)
				note = 'FOLLOWED'
			}
			data.followed = [...followed]
			data.followedLength = data.followed.length
			await data.save()
		}
		res.json({ data, note })
		let series = await Series.findOne({ href: '/series/' + seriesId })
		let followedBy = series.followedBy
		if (note === 'UNFOLLOWED') {
			followedBy = followedBy.filter(item => item != userId)
		} else {
			followedBy.push(userId)
		}
		series.followedBy = followedBy
		series.save()

	} catch (err) {
		res.status(404).json({ err });
		helper.saveLog(err, req.url);
	}
})

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// crawler.saveNewReleases()

// setInterval(() => {
// 	axios
// 		.get('https://anibaniba.herokuapp.com/api/home?type=new_releases&json=true')
// 		.catch((err) => helper.saveLog(err, 'Interval Wake Up'));
// }, 60000);

app.listen(PORT, () => console.log('Enjin Stato ' + PORT));
