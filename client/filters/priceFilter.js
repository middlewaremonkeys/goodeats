angular.module('goodEats.priceFilter', [])

.controller('filterController', function($scope, Search) {
  $scope.data = {};
  $scope.prices = Search.options.price;

  $scope.priceFilter = Search.priceFilter;
  $scope.displayPrices = ['cheap', 'medium', 'expensive', 'high-end'];
  $scope.ratings = Search.options.rating;
  $scope.ratingFilter = Search.ratingFilter;
  $scope.displayRatings = ['you may die', 'eat at your own risk', 'edible', 'delicious', 'experience foodgasms'];
});
