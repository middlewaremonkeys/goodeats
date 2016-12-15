angular.module('goodEats.foodSearch', [])

.controller('foodSearchController', ['$scope', '$http', '$log', ($scope, $http, $log) => {
  $scope.data = {};
  $scope.sendFoodSearch = () => {
    $http({
      method: 'POST',
      url: '/api/yelp',
      data: JSON.stringify($scope.data)
    })
    .then((response) => {
      $log.log(response.data);
    })
    .catch((error) => {
      $log.error(error);
    });
  };
}]);
