angular.module('goodEats', [
  'goodEats.radiusFilter',	
  'goodEats.priceFilter',
  'goodEats.inputController',
  'goodEats.foodSearch',
  'goodEats.openEstab'

])


.controller('MyController', function($scope, NgMap) {
  NgMap.getMap().then(function(map) {
    console.log(map.getCenter());
    console.log('markers', map.markers);
    console.log('shapes', map.shapes);
  });
});