angular.module('gMap', ['GoogleMapsNative'])
/*
  This Controller is responsible for a Google Map and all markers.
*/
.controller('mapController', ['$scope', 'Search', ($scope, Search) => { // We are using the Search factory again 
  //Google map center = Manhattan/ New York 
  $scope.data = Search.results; 
  $scope.storage = [];

  $scope.coords = {
    latitude: false,
    longitude: false
  };
  //Default geolocation is Manhattan/NYC
  $scope.geolocation = {
    center: [40.7591704, -74.039271], 
    zoom: 12, //zoom of the map
    mapTypeId: google.maps.MapTypeId.ROADMAP //loading the map
  };
  //Current location
  $scope.currentLocation = {
    position: [40.7591704, -74.039271],
    draggable: true
  };
  /* 
    $scope.latitute = $scope.coords.latitude=marker.getPosition().lat();
    $scope.longitude = $scope.coords.longitude=marker.getPosition().lng();
  */
}]);
