angular.module('goodEats', [
  'goodEats.services',
  'goodEats.filters',
  'goodEats.inputController',
  'goodEats.foodSearch',
  'goodEats.openEstab'
])
.controller('displayController', ($scope, Search) => {
  $scope.data = Search.results;
});
