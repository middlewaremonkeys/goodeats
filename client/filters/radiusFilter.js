
angular.module('goodEats.radiusFilter', [])

.controller('geoController', function($scope, Search) {
  $scope.data = Search.options;
  $scope.search = function() {
    if ($scope.radius > 0) {
      $scope.data.radius = $scope.radius * 1000;
       } else {

  //radius_filter: between 1-40000

  $scope.radiusFilter = function() {

    return $http({
      method: 'POST',
      url: '/location',
      data:
      {
        'term': $scope.food, 
        'location': $scope.location,
        'radius_filter': $scope.radius //radius is from the input from in the index.html
      }
    })
    .then(function(data) {
      console.log('THE DATA', data);
      return data;
    })
    .catch(function(error) {
      console.log('ERROR:', error);
    });
  };

});