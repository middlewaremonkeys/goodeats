angular.module('goodEats.inputController', [])

.controller('inputController', ['$scope', 'Search', ($scope, Search) => {
  $scope.data = [];
  $scope.query = Search.options;

  $scope.search = function() {
    Search.search();
  };
}]);
