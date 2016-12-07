angular.module('gMap', ['GoogleMapsNative'])

.controller('mapController', function($scope, $http, Search) {
  //Center = Manhattan/ New York
  $scope.data = Search.results;
  $scope.storage = [];

	$scope.coords = {
  	latitude: false,
  	longitude: false
  }
  $scope.geolocation = {
  	center: [40.7591704, -74.039271],
  	zoom: 12, 
  	mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  $scope.currentLocation = {
  	position: [40.7591704, -74.039271],
  	draggable: true
  }
	//console.log("SEARCH RESULTS", $scope.data)
  // $scope.latitute = $scope.coords.latitude=marker.getPosition().lat()
  // $scope.longitude = $scope.coords.longitude=marker.getPosition().lng()

});
