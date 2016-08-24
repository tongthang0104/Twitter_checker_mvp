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
