angular.module('goodEats'.'filters', [])

.controller('FilterController', function($scope, $http){
  $scope.storage = {};
   
  $scope.priceFilter = function(price) {
    return $http({
      method:'POST',
      url: '/price',
      data: JSON.stringify({ $scope.storage})
    })
    .then(function(data) {
      console.log('THE DATA', data);
      return data;  //have to finish this one
    })
    .catch(function(error) {
      console.log("ERROR:", error);
    })
  }
}]) 












// .controller('locationController', function($scope, $http) {

// 	$scope.locator = function(location) {
// 		$http({
// 			method: 'POST',
// 		  url: '/location',
// 		  data: { loctation: location }
// 		  })
// 		.then(function(data) {
// 			// var prsed = JSON.parse(data.data);
// 			console.log(data);
// 		})
// 		.catch(function(error) {
// 			console.log(error);
// 		})
// 	};
// });