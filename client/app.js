angular.module('goodEats', [
  'goodEats.services',
  'goodEats.inputController',
  'goodEats.foodSearch',
  'goodEats.openEstab',
  'goodEats.priceFilter',
  'goodEats.radiusFilter',
  // 'goodEats.radius',
  'gMap',
  'twitter' //or goodEats.twitter
])
.controller('displayController', ($scope, Search) => {
  $scope.data = Search.results;
});
