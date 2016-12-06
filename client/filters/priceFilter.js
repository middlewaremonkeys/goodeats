angular.module('goodEats.priceFilter', [])

.controller('filterController', function($scope, Search) {
  $scope.data = {};
  $scope.prices = Search.options.price;

  $scope.priceFilter = Search.priceFilter;
  $scope.displayPrices = ['cheap', 'medium', 'expensive', 'high-end'];
  $scope.ratings = Search.options.rating;
  $scope.ratingFilter = Search.ratingFilter;
  $scope.displayRatings = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];
});
