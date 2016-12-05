angular.module('goodEats.priceFilter', [])

.controller('PriceFilterController', function($scope, $http) {
  $scope.data = {};
  $scope.prices = [];

 $scope.priceFilter = function() {
   $scope.prices.push($scope.price);

    if($scope.prices.length > 1) {
      $scope.prices = $scope.prices.filter(function(el, index, array) {
        return index == array.indexOf(el);
      });
    }
    
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
