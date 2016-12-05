angular.module('goodEats.inputController', [])

.controller('inputController', function($scope, FoodSearch) {
  $scope.data = [];
  $scope.query = {};

  $scope.search = function() {
    FoodSearch.search($scope.query)
      .then(function(data) {
        console.log(data);
        $scope.data = data;
      });
  };
})
.factory('FoodSearch', function($http) {
  var search = function(options) {
    return $http({
      method: 'POST',
      url: '/api/yelp',
      data: options
    })
    .then(function(response) {
      return response.data;
    })
    .catch(function(err) {
      console.log(err);
    });
  };

  return {
    search: search
  };
});
