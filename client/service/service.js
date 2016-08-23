angular.module('followChecker.service', [])
  .factory('twitterService', function($http) {

    var getData = function() {
      return $http({
        method: 'GET',
        url: "https://api.twitter.com/1/friends/ids.json?cursor=-1&callback=?&screen_name=thang"
      }).then(function(response) {
        return response;
      });
    };

    return {
      getData: getData
    };
  });
