//1. User enter a number => input form
//2. The number will be the radius from the current position
//3. The number has to be converted into a log-lat
//4. Long and lat have to be send  with the search query to the server

angular.module('goodEats.geolocationFilter', [])

.controller('geoController', function($scope, $log) {

  $scope.data = {};
  $scope.prices = [];

  $scope.priceFilter = function() {
    $scope.prices.push($scope.price);

    return $http({
      method: 'POST',
      url: '/location',
      data:
      {
        'term': $scope.food,  //CREATE A SEARCH CONTROLLER AS A WRAPPER
        'location': $scope.location,
        'price': $scope.prices
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