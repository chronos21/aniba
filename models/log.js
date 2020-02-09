const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
	text: String,
	source: String,
	createdAt: {
		type: Date,
		default: Date.now
	}
});

const Log = mongoose.model('Log', logSchema);

module.exports = Log;
