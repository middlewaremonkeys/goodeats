angular.module('goodEats'.'filters', [])

.controller('FilterController', function($scope, $http){
  $scope.data = {};
  $scope.data.prices = []; 

  $scope.priceFilter = function(price) {
    $scope.data.prices.push(price);

    return $http({
      method:'POST',
      url: '/prices',
      data: JSON.stringify({ $scope.data})
    })
    .then(function(data) {
      console.log('THE DATA', data);
      return data
    })
    .catch(function(error) {
      console.log("ERROR:", error);
    })
  }
   
}); 

