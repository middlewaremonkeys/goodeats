angular.module('goodEats.openEstab', [])

.controller('openEstabController', ['$scope', '$http', '$log', ($scope, $http, $log) => {
  $scope.open = false;

  $scope.toggleOpenEstablishments = () => {
    $scope.open = !$scope.open;
    $http({
      method: 'POST',
      url: '/api/yelp',
      data: {
        openNow: $scope.open
      }
    })
    .then((response) => {
      $log.log(response.data);
    })
    .catch((error) => {
      $log.error(error);
    });
  };
}]);
