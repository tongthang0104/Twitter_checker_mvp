angular.module("followChecker", [
  'followChecker.follow',
  'followChecker.user',
  'followChecker.service',
  'ngRoute'
])

.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/signin' , {
      templateUrl: 'user/user.html',
      controller: 'UserController'
    })

    .when('/query', {
      templateUrl: 'query/query.html',
      controller: 'FollowController'
    });

    $routeProvider.otherwise('query/query.html');
});
