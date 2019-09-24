const Twitter = require('twitter');
require('dotenv').config();

let twitter = new Twitter({
    consumer_key: process.env.CNTKEY,
   consumer_secret: process.env.CNT,
   access_token_key: process.env.ACKEY,
   access_token_secret: process.env.ACTS
})


function tweet(content) {
    twitter.post('statuses/update', {status: content}, function (error, twt, res){
        console.log(error ? error : 'Tweet is out there');
        console.log(twt, res)
    })
}

module.exports = {
    tweet
}