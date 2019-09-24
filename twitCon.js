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


function tweet(content) {
    if (filter.isProfane(content)){
        twitter.post('statuses/update', {status: content}, function (error, twt, res){
            console.log(error ? error : 'Tweet is out there');
            console.log(twt, res)
        })
    }
}

module.exports = {
    tweet
}