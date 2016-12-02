//a user should be able to enter their search location
//by typing in an input box

angular.module('goodEats.inputController', [])

.controller('inputController', function($scope, FoodSearch) {
	$scope.data = {};
	$scope.query;
	$scope.search = function() {
		FoodSearch.search($scope.query)
			.then(function(data) {
				console.log(data);
				$scope.data = data;
			})
	}

})
.factory('FoodSearch', function($http) {
	var search = function(options) {
		return $http({
			method: 'POST',
		  url: '/api/yelp',
		  data: options
		})
		.then(function(response) {
			return response.data;
		})
		.catch(function(err) {
			console.log(err);
		})
	}

	return {
		search: search
	}
});


	// $scope.foodInArea = function() {
	// 	FoodSearch.locating({location: location})
	// 	.then(function(resp) {
	// 		$scope.data.location = response.data.location
	// 	})
	// 	FoodSearch.food({business: business})
	// 	.then(function(resp){
	// 		$scope.data.business = response.data.name
	// 	})
	// };

	// $scope.foodSearcher = function(food){
 //    $http({
 //      method: "POST",
 //      url: '/api/yelp', 
 //      data: {term: term}
 //    })
 //    .then(function(response){
 //      console.log("i'm from the foodsearch:: ", response.data);
 //      $scope.data = response.data;

 //    })
 //    .catch(function(error) {
 //      console.log(error);
 //    })
 //  };


	// var locating = function(location) {
	// 	$http({
	// 		method: 'POST',
	// 	  url: '/api/yelp',
	// 	  data: { location: location }
	// 	}).then(function(response) {
	// 		return response.data;
	// 	})
	// }

	// var food = function(food) {
	// 	$http({
 //      method: "POST",
 //      url: '/api/yelp', 
 //      data: {term: term}
 //    })
 //    .then(function(response){
 //      console.log("i'm from the foodsearch:: ", response.data);
 //      $scope.data = response.data;
 //    })
	// }