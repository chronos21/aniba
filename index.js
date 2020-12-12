const express = require('express');
const moment = require('moment');
const mainRoutes = require('./routes')

const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 8080;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

app.locals.moment = moment;
app.set('view engine', 'ejs');
app.use(cors())
app.use(express.static('public'));
app.use(express.static('views'));

app.use(express.json());

app.use('/api', mainRoutes)
app.get('*', (req, res) => {
    res.json({message: 'EMPTY. THERE IS NOTHING.'})
})

app.listen(PORT, () => console.log('Enjin Stato ' + PORT));
