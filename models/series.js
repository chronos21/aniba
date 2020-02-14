const mongoose = require('mongoose');

const seriesSchema = new mongoose.Schema({
	title: String,
	altTitles: String,
	img: String,
	desc: String,
	episodes: mongoose.Schema.Types.Mixed,
	status: String,
	href: String,
	followedBy: Array
});

const Series = mongoose.model('Series', seriesSchema);

module.exports = Series;
