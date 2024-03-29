const express = require('express');
const mainRoutes = require('./routes')
const ps3Routes = require('./routes/ps3')
const gogoRoutes = require('./routes/gogo')
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 8080;

app.set('view engine', 'ejs')

app.use(cors())
app.use(express.static('public'));
app.use(express.json());

app.use('/api', mainRoutes)
app.use('/ps3', ps3Routes)
app.use('/gogo', gogoRoutes)

app.get('*', (req, res) => {
    res.json({message: 'EMPTY. THERE IS NOTHING.'})
})

// crawler.saveNewReleases()

// setInterval(() => {
// 	axios
// 		.get('https://anibaniba.herokuapp.com/api/home?type=new_releases&json=true')
// 		.catch((err) => helper.saveLog(err, 'Interval Wake Up'));
// }, 60000);

app.listen(PORT, () => console.log('Enjin Stato ' + PORT));
