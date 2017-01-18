var express = require('express');
var Twitter = require('twitter');

var router = express.Router(); 
var client = new Twitter({
  consumer_key: 'XXX',
  consumer_secret: 'XXX',
  access_token_key: 'XXX',
  access_token_secret: 'XXX'
});

router.get('/', function(req, res, next) {
  // https://dev.twitter.com/rest/reference/get/statuses/user_timeline
  client.get('statuses/user_timeline', { screen_name: 'nodejs', count: 20 }, function(error, tweets, response) {
    if (!error) {
      res.status(200).render('index', { title: 'Express', tweets: tweets });
    }
    else {
      res.status(500).json({ error: error });
    }
  });
});

module.exports = router;