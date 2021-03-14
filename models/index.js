const mongoose = require('mongoose')
const MONGO_URI = 'mongodb://chsz77:123xx456@cluster0-shard-00-00.wjyy9.mongodb.net:27017,cluster0-shard-00-01.wjyy9.mongodb.net:27017,cluster0-shard-00-02.wjyy9.mongodb.net:27017/aniba?ssl=true&replicaSet=atlas-o07sy0-shard-0&authSource=admin&retryWrites=true&w=majority'

mongoose.set("debug", false);
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .then(() => console.log('Database connected'))
    .catch(err => console.log(err));

module.exports.Episode = require('./episode')