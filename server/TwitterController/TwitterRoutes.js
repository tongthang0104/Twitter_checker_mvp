var twitterController = require("./TwitterController.js");


module.exports = function(app) {
  // app.route('/').post(twitterController.getFollow);
  app.route('/').get(twitterController.getFollow);
};
