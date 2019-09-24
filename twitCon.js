const Twitter = require('twitter');
const Filter = require('bad-words');
const filter = new Filter();
require('dotenv').config();

const twitter = new Twitter({
    consumer_key: process.env.CNTKEY,
   consumer_secret: process.env.CNT,
   access_token_key: process.env.ACKEY,
   access_token_secret: process.env.ACTS
});

function check(content, res) {
    let canPost = filter.isProfane(content);
    if (!canPost){
        tweetText(content, res)
    } else {
        errorResponse(res)
    }
}


function errorResponse(res) {
    res.redirect('/error')
}


function tweetText(content, res) {
    twitter.post('statuses/update', {status: content}, function (error, twt, res) {
        console.log(error ? error : twt);
    });
    res.redirect('/thanks')
}

module.exports = {
    tweetText,
    errorResponse,
    check
};