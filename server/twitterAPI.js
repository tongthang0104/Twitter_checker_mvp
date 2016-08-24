var Twitter = require('twitter');
var config = require('./env/config.js');

var client = new Twitter({
      consumer_key: config.TWITTER_CONSUMER_KEY,
      consumer_secret: config.TWITTER_CONSUMER_SECRET,
      access_token_key: config.TWITTER_ACCESS_TOKEN,
      access_token_secret: config.TWITTER_ACCESS_TOKEN_SECRET
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
