angular.module('goodEats.priceFilter', [])

.controller('filterController', ($scope, Search) => {
  $scope.data = {};

  /*
  Retrieves data from Search factory
  Assign price object to priceFilter.
  Create array of terms for prices to compare with input data
  */
  $scope.prices = Search.options.price;
  $scope.priceFilter = Search.priceFilter;
  $scope.displayPrices = ['cheap', 'medium', 'expensive', 'high-end'];

  /*
  Retrieves data from Search factory
  Assign rating object to ratingFilter.
  Create array of terms for ratings to compare with input data

  Would like to turn numbers into a 5 number system
  But using phrases instead of two numbers per integer; 
  ie; "SUCKS" = 1 & 1.5, "OKAY" = 2 & 2.5 etc.
  */
  

  $scope.ratings = Search.options.rating;
  $scope.ratingFilter = Search.ratingFilter;
  $scope.displayRatings = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];
});
