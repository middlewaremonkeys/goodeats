angular.module('goodEats.foodSearch', [])

.controller('foodSearchController', function($scope, $http) {
  // var dataSend = {foodRequest: foodRequest}
  $scope.data = {};
  $scope.sendFoodSearch = function() {
    $http({
      method: 'POST',
      url: '/api/yelp',
      data: JSON.stringify($scope.data)
    })
    .then(function(response) {
      console.log(response.data);

    })
    .catch(function(error) {
      console.log(error);
    });
  };
});
