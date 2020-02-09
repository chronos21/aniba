const Comment = require('../models/comment');
const Log = require('../models/log');
const Home = require('../models/home');
const Episode = require('../models/episode');
const Series = require('../models/series');

function saveLog(obj, source) {
	Log.create({ text: JSON.stringify(obj), source })
		.then(() => {
			console.log('Log Saved');
		})
		.catch(() => console.log('Log not saved'));
}

function findSchema(type) {
	let schema;
	switch (type) {
		case 'log':
			schema = Log;
			break;
		case 'comment':
			schema = Comment;
			break;
		case 'home':
			schema = Home;
			break;
		case 'series':
			schema = Series;
			break;
		case 'episode':
			schema = Episode;
			break;
		default:
			break;
	}

	return schema;
}

exports.saveLog = saveLog;
exports.findSchema = findSchema;
