angular.module('followChecker.follow', [])

  .controller('FollowController' , function($scope, twitterService) {
    $scope.getData = function() {
      $scope.loading = true;
      var params = {screen_name: $scope.screenName};
      twitterService.getData(params).then(function(response) {
        console.log(response)
        $scope.loading = false;
        var amount = response.data.length;
        var result = 0;

        if (amount > 1) {
          result = (amount - 1) * 200 + response.data[amount - 1].users.length;
        } else {
          result = response.data[0].users.length;
        }


        // var userList = [];
        // // console.log("My List",list);
        //
        //
        // for (var i = 0; i < list.length; i++) {
        //   if (list[i].friends_count >= 100) {
        //     userList.push(list[i]);
        //   }
        // }
        $scope.followers = result;
      });
    };

    $scope.check = function() {
      if ($scope.screenName === "") {
        return false;
      } else {
        return true;
      }
    };
  });
