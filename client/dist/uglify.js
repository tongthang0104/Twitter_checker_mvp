angular.module("followChecker.service",[]).factory("twitterService",function(a){var b=function(b){return a({method:"GET",url:"/api/query",params:b}).then(function(a){return a})};return{getData:b}}),angular.module("followChecker.follow",[]).controller("FollowController",function(a,b){a.getData=function(){var c={screen_name:a.screenName};b.getData(c).then(function(b){console.log(b);var c=b.data,d=c.length,e=0,f=0;f=d>1?200*(d-1)+c[d-1].length:c[0].length;for(var g=0;g<c.length;g++)for(var h=0;h<c[g].length;h++)c[g][h].friends_count>=100&&e++;a.followers=f,a.filter=e})}}),angular.module("followChecker",["followChecker.service","followChecker.follow","ngRoute"]).config(function(a,b){a.when("/query",{templateUrl:"query/query.html",controller:"FollowController"}),a.otherwise("query/query.html")});