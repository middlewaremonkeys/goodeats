angular.module('MyApp', ['GoogleMapsNative'])

.controller('mapController', function($scope, $log) {
  $scope.coords = {
  	latitude: false, 
  	longitude: false
  }

  // $log.error($scope.coords)

  $scope.geolocation = {
  	center: [37.772323, -122.214897], 
  	zoom: 8, 
  	mapTypeId: google.maps.MapTypeId.ROADMAP
  }

  $scope.currentLocation = {
  	position:  [37.772323, -122.214897],
  	draggable: true
  }

  $scope.locArr = [
		{
			pos: {
		  	position:  [37.772323, -122.214897],
		  	draggable: true
			},
	  	text: 'loc 1'
	  },
		{
			pos: {
				position:  [36.772323, -122.214897],
		  	draggable: true
			},
	  	text: 'loc 2'
	  }
  ];

	console.log($scope.geolocation)
  // $scope.latitute = $scope.coords.latitude=marker.getPosition().lat()
  // $scope.longitude = $scope.coords.longitude=marker.getPosition().lng()

});
