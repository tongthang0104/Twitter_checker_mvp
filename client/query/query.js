angular.module('followChecker.follow', [])

  .controller('FollowController' , function($scope, twitterService) {
    $scope.getData = function() {
      var params = {screen_name: $scope.screenName};
      twitterService.getData(params).then(function(response) {
        // console.log()
        $scope.followers = response.data.users.length;
      });
    };

    $scope.clear = function() {
      $scope.userID = "Clear";
    };
  });
