const cheerio = require('cheerio');
const axios = require('axios');

const GogoAnime = {
    MAIN_URL: 'https://gogoanime.ai',

    getBrowse: async function (q) {
        let url = this.MAIN_URL + '/search.html?keyword=' + q
        if(!q || q === '') url = this.MAIN_URL
        
        let pages = [1]
        let currentPage = 1
        let arr = []
        try {
            while(pages.length > 0){
                if(Number(currentPage) > 1){
                    if(url.includes('?')){
                        url = url + '&page=' + currentPage
                    } else {
                        url = url + '?page=' + currentPage
                    }
                }
                let res = await axios.get(url);
                let $ = cheerio.load(res.data);
                $('.pagination-list li a').each(function(el){
                    let pg = Number($(this).text())
                    if((!q || q === '') && currentPage >= 2){
                        pages = []
                    } else if (pg > currentPage && !pages.includes(pg)){
                        pages.push(pg)
                    }
                })
                $('.last_episodes li').each(function (el) {
                    let href = $(this).find('a').attr('href').replace('category/', 'series/');
                    let title = $(this).find('a').attr('title');
                    let img = $(this).find('img').attr('src');
                    let subtitle = $(this).find('.episode').text()
                    if(subtitle) title = `${title} - ${subtitle}`
                    arr.push({ title, img, href, subtitle })
                })
                
                pages = pages.filter(item => item  !== currentPage)
                currentPage = pages[0]
            }
            
            return arr
        } catch (err) {
            console.log(err.message)
        }
    },

    getSeries: async function (seriesUrl) {
        const url = this.MAIN_URL + '/category/' + seriesUrl
        let obj = {}
        try {
            let res = await axios.get(url)
            let $ = cheerio.load(res.data);
            
            let seriesId = $('.movie_id').val()
            let seriesAlias = seriesUrl.split('/').pop()
            let episodes = await axios.get(`https://ajax.gogo-load.com/ajax/load-list-episode?ep_start=0&ep_end=999&id=${seriesId}&default_ep=0&alias=${seriesAlias}`)
            let ep = cheerio.load(episodes.data)
            let epArr = []
            obj.title = $('.anime_info_body_bg h1').text();
            obj.img = $('.anime_info_body_bg img').attr('src');
            ep('li').each(function (index) {
                let title = obj.title + ' - ' + $(this).find('.name').text().replace('EP', 'Episode');
                let href = $(this).find('a').attr('href').trim()
                epArr.push({ title, href });
            });
            
            obj.episodes = epArr;
        } catch (err) {
            console.log(err.message)
        }

        return obj;
    },

    
    getEpisode: async function (episodeUrl) {
        const url = this.MAIN_URL + ('/' + episodeUrl).replace('//', '/')
        let obj = {}
        try {
            let res = await axios.get(url)
            let $ = cheerio.load(res.data);

            obj.title = ($('.anime-info').text() || '').replace('Anime info:', '').trim();
            obj.iframe = 'https:' + $('.play-video iframe').attr('src')
            obj.ajax = obj.iframe.replace('streaming.php', 'ajax.php') + '&refer=https://gogoanime.ai/'
            try {
                let video = await axios.get(obj.ajax)
                obj.videoMeta = video.data.source[0]
                obj.videoMetaBk = video.data.source_bk[0]
                obj.videoUrl = obj.videoMeta.file
                obj.videoUrlBk = obj.videoMetaBk.file
            } catch (err) {
                console.log(err.message)
            }
        } catch (err) {
            console.log(err)
        }

        return obj;
    },
}

module.exports = GogoAnime