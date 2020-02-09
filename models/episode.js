const mongoose = require('mongoose');

const episodeSchema = new mongoose.Schema({
	parentId: String,
	title: String,
	href: String,
	img: String,
	releasedAt: String,
	createdAt: {
		type: Date,
		default: Date.now
	}
});

const Episode = mongoose.model('Episode', episodeSchema);

module.exports = Episode;
