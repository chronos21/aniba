const express = require('express')
const router = express.Router()
const crawler = require('../handlers/crawler')

router.get('/', async (req, res) => {
    let { q } = req.query;
    let data = []
    if(q){
        data = await crawler.getSearch(q);
    } else [
        data = await crawler.getNewReleases()
    ]
    
    res.send(JSON.stringify(data))
})

router.get('/:id', async (req, res) => {
    let data = await crawler.getDetails(req.params.id, req.query.hd);
    res.send(JSON.stringify(data))
})


router.get('/series/:id', async (req, res) => {
    let data = await crawler.getSeries(req.params.id);
    res.send(JSON.stringify(data))
})

module.exports = router
