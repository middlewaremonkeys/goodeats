angular.module('goodEats.filters', [])

.controller('filterController', function($scope, Search) {
  $scope.data = {};
  $scope.prices = Search.options.price;
  $scope.priceFilter = Search.priceFilter;
  $scope.displayPrices = ['cheap', 'medium', 'expensive', 'high-end']

  $scope.ratings = Search.options.rating;
  $scope.ratingFilter = Search.ratingFilter;
  $scope.displayRatings = [1, 2, 3, 4, 5];

  $scope.filterExpression = function(thana) {
    return (thana.dId === $scope.selectedDist.id );
  };


})

