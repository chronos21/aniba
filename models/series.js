const mongoose = require('mongoose');

const seriesSchema = new mongoose.Schema({
	title: String,
	altTitles: String,
	img: String,
	desc: String,
	episodes: String,
	status: String,
	href: String
});

const Series = mongoose.model('Series', seriesSchema);

module.exports = Series;
