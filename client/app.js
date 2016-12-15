angular.module('goodEats', [
  'goodEats.services',
  'goodEats.inputController',
  'goodEats.foodSearch',
  'goodEats.openEstab',
  'goodEats.priceFilter',
  'goodEats.radiusFilter',
  'gMap',
  'twitter'
  // 'goodEats.radius',
])
.controller('displayController', ['$scope', 'Search', ($scope, Search) => {
  $scope.data = Search.results;
  $scope.priceFilter = Search.priceFilter;
  $scope.ratingFilter = Search.ratingFilter;
}]);
