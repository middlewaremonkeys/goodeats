angular.module('goodEats.inputController', [])

.controller('inputController', function($scope, Search) {
  $scope.data = [];
  $scope.query = Search.options;

  $scope.search = function() {
    Search.search();
  };
});
