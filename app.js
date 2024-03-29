const {tweetText, errorResponse, check} = require('./twitCon');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

app.set('views', './views') ;
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res)  => {
    res.render('index')
});

app.get('/help', (req, res) => {
    res.render('help')
});

// This should be a Post request 
app.get('/pleh', (req, res) => {
    let content = req.query.content;
    check(content, res);
});

app.get('/thanks', (req, res) => {
    res.render('thanks')
});

app.get('/error', (req, res) => {
    res.render('errors', {error: "There was a error"})
});

app.listen(port,() => {
    console.log('Server Live')
});

