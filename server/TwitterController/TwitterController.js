var Twitter = require('../../server/twitterAPI');

module.exports = {

  getFollow: function(req, res, next) {
    var params = {};
    var result = [];

    var check = function(cursor) {
      params = {
        cursor: cursor,
        screen_name: req.query.screen_name,
        count: 200
      };
      console.log('is checking');
      var promise = new Promise(function(resolve, reject) {
          Twitter.getFollow('friends/list', params, function(data) {
            result.push(data.users);
            resolve(data.next_cursor);
          });
      }).then(function(next_cursor) {
        cursor = next_cursor;
        if (cursor === undefined) {
          console.log("It is undefined", cursor);
          return;
        } else if (cursor !== 0) {
          console.log("It is not == 0", cursor);
          return check(cursor);
        } else if (cursor === 0){
          console.log("It is == 0", cursor);
          res.send(result);
          return;
        }
      });
    };
    check(-1);
  }

};
