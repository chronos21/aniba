const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
	parentId: String,
	text: String,
	authorId: String,
	createdAt: {
		type: Date,
		default: Date.now
	}
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
