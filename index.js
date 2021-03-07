const express = require('express');
const mainRoutes = require('./routes')
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 8080;
const crawler = require('./handlers/crawler')

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

app.set('view engine', 'ejs')

app.use(cors())
app.use(express.static('public'));
app.use(express.json());

app.locals.helper = {
    MAIN_URL: 'http://localhost:8080',
    getImageUrl(url){
        if(url.includes('//')){
            return this.MAIN_URL + '/api/images?url=' + url + '&from=vidcache'
        } else {
            return this.MAIN_URL + '/api/images?url=' + url.replace('.png', '.jpg')
        }
    }
}

app.use('/api', mainRoutes)
app.get('/', async (req, res) => {
    let { q } = req.query;
    let data = []
    if(q){
        data = await crawler.getSearch(q);
    } else [
        data = await crawler.getNewReleases()
    ]
    res.render('list', {data})
})

app.get('/:id', async (req, res) => {
    let data = await crawler.getDetails(req.params.id, req.query.hd);
    res.render('episode', {data})
})


app.get('/series/:id', async (req, res) => {
    let data = await crawler.getSeries(req.params.id);
    res.render('series', {data})
})

app.get('*', (req, res) => {
    res.json({message: 'EMPTY. THERE IS NOTHING.'})
})

app.listen(PORT, () => console.log('Enjin Stato ' + PORT));
