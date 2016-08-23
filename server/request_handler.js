var utils = require('./utils');

var actions = {
  'GET': function() {
    utils.sendResponse(response, "done");
  },
};

exports.handleRequest = function(request, response) {
  var action = actions[request.method];

  if (action) {
    utils.sendResponse(request, response);
  } else {
    utils.send404(request, response);
  }
};
