//a user should be able to enter their search location
//by typing in an input box

angular.module('goodEats.locator', [])

.controller('locationController', function($scope, $http) {

	$scope.locator = function(location) {
		$http({
		  method: 'POST',
		  url: '/location',
		  data: { loctation: location }
		  })
		.then(function(data) {
			// var prsed = JSON.parse(data.data);
			console.log(data);
		})
		.catch(function(error) {
			console.log(error);
		})
	};
});


