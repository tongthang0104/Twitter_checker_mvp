var Twitter = require('twitter');
// var config = require('./env/config.js');

var client = new Twitter({
      consumer_key: process.env.TWITTER_CONSUMER_KEY ,
      consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
      access_token_key: process.env.TWITTER_ACCESS_TOKEN,
      access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

exports.getFollow = function(path, params, callback) {


      client.get(path, params, function(error, data, response) {
            if (error) {
                  console.log("ERROR", error);
            } else {
                  callback(data);
            }
      });
};
