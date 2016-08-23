angular.module('followChecker.follow', [])

  .controller('FollowController' , function($scope, twitterService) {
    $scope.followings = "This is following";
    $scope.getData = function() {
      twitterService.getData().then(function(response) {
        console.log(response);
      });
    };

    $scope.clear = function() {
      $scope.userID = "Clear";
    };


  });
