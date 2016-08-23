var Twitter = require('../../server/twitterAPI');

module.exports = {
  getFollow: function(req, res, next) {
    Twitter.getFollow('followers/list', req.query, function(data) {
      res.send(data);
      next();
    });
  }
};
