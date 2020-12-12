const express = require('express');
const mainRoutes = require('./routes')
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 8080;

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

app.use(cors())
app.use(express.static('public'));
app.use(express.json());

app.use('/api', mainRoutes)
app.get('*', (req, res) => {
    res.json({message: 'EMPTY. THERE IS NOTHING.'})
})

app.listen(PORT, () => console.log('Enjin Stato ' + PORT));
