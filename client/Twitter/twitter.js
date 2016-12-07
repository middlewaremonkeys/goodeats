// angular.module("Twitter", ["ngSanitize"])

// .controller("TwitterController", function($scope) {
// $scope.myHTML = {
// 	pizza: '<a class="twitter-timeline"  href="https://twitter.com/hashtag/pizza" data-widget-id="806294283846295552">#pizza Tweets</a>' //ng model to replace pizza
//     burger: 
//  }
// })

// angular.module('twitter', [])

// .controller('TwitterController', function($scope) {

// $scope.widgets = {
//   "pizza": <a class="twitter-timeline" data-dnt="true" href="https://twitter.com/hashtag/pizza" data-widget-id="806363529657913344">#pizza Tweets</a>

// }

// })

// angular.module('twitter', ['ngResource'])

// .controller('TwitterController', function($scope, $resource) {
// 	console.log($scope)
// 	console.log($resource)
//     $scope.twitter = $resource('http://search.twitter.com/:action',
//         {action:'search.json', q:'angularjs', callback:'JSON_CALLBACK'},
//         {get:{method:'JSONP'}});

//     $scope.doSearch = function () {
//         $scope.twitterResult = $scope.twitter.get({q:$scope.searchTerm});
//     };
// })