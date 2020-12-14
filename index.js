const express = require('express');
const mainRoutes = require('./routes')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express();
const PORT = process.env.PORT || 8080;
const MONGO_URI = 'mongodb://chsz77:123xx456@cluster0-shard-00-00.wjyy9.mongodb.net:27017,cluster0-shard-00-01.wjyy9.mongodb.net:27017,cluster0-shard-00-02.wjyy9.mongodb.net:27017/aniba?ssl=true&replicaSet=atlas-o07sy0-shard-0&authSource=admin&retryWrites=true&w=majority'

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
	})
	.then(() => {
		console.log('Mongo status green');
	}).catch(err => console.log(err));

app.use(cors())
app.use(express.static('public'));
app.use(express.json());

app.use('/api', mainRoutes)
app.get('*', (req, res) => {
    res.json({message: 'EMPTY. THERE IS NOTHING.'})
})

app.listen(PORT, () => console.log('Enjin Stato ' + PORT));
