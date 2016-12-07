angular.module('gMap', ['GoogleMapsNative'])
//THIS CONTROLLER IS RESPONSIBLE FOR A GOOGLE MAP AND ALL MARKERS!
//TAKE A LOOK ON SERVICES BEFORE YOU CONTINUE

.controller('mapController', function($scope, Search) { // We are using the Search factory again 
  //Center = Manhattan/ New York 
  $scope.data = Search.results; // storing all results in $scope.data;
  $scope.storage = [];
 //THIS PART IS FOR THE GEOLOCATION:
	$scope.coords = {
  	latitude: false,
  	longitude: false
  }
  //DEFAULT GEOLOCATION IS MANHATTAN/NYC
  $scope.geolocation = {
  	center: [40.7591704, -74.039271], 
  	zoom: 12, //zoom of the map
  	mapTypeId: google.maps.MapTypeId.ROADMAP //loading the map
  }
  //CURRENT LOCATION
  $scope.currentLocation = {
  	position: [40.7591704, -74.039271],
  	draggable: true
  }
	//console.log("SEARCH RESULTS", $scope.data)
  // $scope.latitute = $scope.coords.latitude=marker.getPosition().lat()
  // $scope.longitude = $scope.coords.longitude=marker.getPosition().lng()

});
