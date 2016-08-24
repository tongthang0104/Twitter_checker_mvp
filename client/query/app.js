angular.module("followChecker", [
  'followChecker.service',
  'followChecker.follow',

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
