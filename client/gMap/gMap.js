angular.module('gMap', ['GoogleMapsNative'])

.controller('mapController', function($scope, $http, Search) {
  //Have to finish this one!
  $scope.data = Search.results;
  console.log("DATAAAAA", $scope.data)
  $scope.storage = [];

  // $scope.storage.push($scope.data.coordinates.positions);

  console.log($scope.storage);

	$scope.coords = {
  	latitude: false, 
  	longitude: false
  }

  $scope.geolocation = {
  	center: [37.772323, -122.214897], //center: $scope.storage 
  	zoom: 15, 
  	mapTypeId: google.maps.MapTypeId.ROADMAP
  }

  $scope.currentLocation = {
  	position:  [37.772323, -122.214897],
  	draggable: true
  }

 //  $scope.locArr = [
	// 	{
	// 		pos: {
	// 	  	position:  [37.772323, -122.214897],
	// 	  	draggable: true
	// 		},
	//   	text: 'loc 1'
	//   },
	// 	{
	// 		pos: {
	// 			position:  [36.772323, -122.214897],
	// 	  	draggable: true
	// 		},
	//   	text: 'loc 2'
	//   }
 //  ];

	console.log("GEOLOCATION:", $scope.geolocation)
  // $scope.latitute = $scope.coords.latitude=marker.getPosition().lat()
  // $scope.longitude = $scope.coords.longitude=marker.getPosition().lng()

});
