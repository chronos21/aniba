const mongoose = require('mongoose');

const homeSchema = new mongoose.Schema({
	type:  {
	    type: String,
	    required: true
	},
	title:  {
	    type: String,
	    required: true
	},
	key: String,
	addition: String,
	order:  {
	    type: Number,
	    required: true
	},
	content: Array,
	createdAt: {
		type: Date,
		default: Date.now
	}
});

const Home = mongoose.model('Home', homeSchema);

module.exports = Home;
