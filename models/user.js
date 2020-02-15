const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	username: String,
	password: {
		type: String,
		required: true
	},
	followed: Array,
	followedLength: Number,
	createdAt: {
		type: Date,
		default: Date.now
	}
});

const User = mongoose.model('User', userSchema);

module.exports = User;
