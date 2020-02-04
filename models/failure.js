const mongoose = require('mongoose');

const failureSchema = new mongoose.Schema({
	text: String,
	source: String,
	createdAt: {
		type: Date,
		default: Date.now
	}
});

const Failure = mongoose.model('Failure', failureSchema);

module.exports = Failure;
