const express = require('express')
const router = express.Router()
const GogoAnime = require('../handlers/gogoanime')

router.get('/', async (req, res) => {
    let { q, page } = req.query;
    let data = await GogoAnime.getBrowse(q, page)
    
    res.send(JSON.stringify(data))
})

router.get('/:id', async (req, res) => {
    let data = await GogoAnime.getEpisode(req.params.id);
    res.send(JSON.stringify(data))
})


router.get('/series/:id', async (req, res) => {
    let data = await GogoAnime.getSeries(req.params.id);
    res.send(JSON.stringify(data))
})

module.exports = router
