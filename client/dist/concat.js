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

angular.module('followChecker.follow', [])

  .controller('FollowController' , function($scope, twitterService) {
    $scope.getData = function() {
      // $scope.loading = true;
      var params = {screen_name: $scope.screenName};
      twitterService.getData(params).then(function(response) {
        console.log(response)
        // $scope.loading = false;
        var friendsList = response.data;
        var amount = friendsList.length;
        var countUser = 0;
        var result = 0;
        //
        if (amount > 1) {
          result = (amount - 1) * 200 + friendsList[amount - 1].length;
        } else {
          result = friendsList[0].length;
        }


        for (var i = 0; i < friendsList.length; i++) {
          for (var y = 0; y < friendsList[i].length; y++) {
            if (friendsList[i][y].friends_count >= 100) {
              countUser++;
            }
          }
        }
        $scope.followers = result;
        $scope.filter = countUser;
      });
    };
  });

angular.module("followChecker", [
  'followChecker.follow',
  'followChecker.service',
  'ngRoute'
])

.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/query', {
      templateUrl: 'query/query.html',
      controller: 'FollowController'
    });

    $routeProvider.otherwise('query/query.html');
});
