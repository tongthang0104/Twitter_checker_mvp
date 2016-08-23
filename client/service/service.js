angular.module('followChecker.service', [])
  .factory('twitterService', function($http) {
    var getData = function(params) {
      return $http({
        method: 'GET',
        url: '/api/query',
        params: params
      }).then(function(response) {
        return response;
      });
    };

    return {
      getData: getData
    };
  });
