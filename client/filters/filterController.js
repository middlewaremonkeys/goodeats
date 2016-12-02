angular.module('goodEats.filters', [])

.controller('filterController', function($scope, $http){
  $scope.data = {};
  $scope.prices = []; 

  $scope.priceFilter = function(price) {
    // $scope.prices.push(price);

  	return $http({
      method: 'POST',
      url: '/location',
      data: { prices : price}
      // {
      // 	"term": $TERM,
      // 	"location": $LOCATION,
      // 	"price": $scope.prices
      // }
    })
    .then(function(data) {
      console.log('THE DATA', data);
      // return data

    })
    .catch(function(error) {
      console.log("ERROR:", error);
    })
  };
}); 

