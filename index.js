const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;
const data = require("./data/data");

const app = express();

app.get('/v1', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    let randomQuote = data[Math.floor(Math.random() * data.length)];
    res.json(randomQuote);
});

app.get('/v1/:id', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    let quote = data[parseInt(req.params.id) - 1];
    res.json(quote);
});

app.post('/v1', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    let randomQuote = data[Math.floor(Math.random() * data.length)];
    res.json(randomQuote);
});

app.post('/v1/:id', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    let quote = data[parseInt(req.params.id) - 1];
    res.json(quote);
});

app.listen(3000, () => {
    console.log('server listening to port 3000')
})