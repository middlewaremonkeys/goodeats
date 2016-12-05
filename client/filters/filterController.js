angular.module('goodEats.filters', [])

.controller('filterController', function($scope, $http) {
  $scope.data = {};
  $scope.prices = ['1', '2'];
  $scope.ratings = [];

  $scope.priceFilter = function() {
    $scope.prices.push($scope.price);

    return $http({
      method: 'POST',
      url: '/yelp/api',
      data:
      {
        'term': $scope.food,  //CREATE A SEARCH CONTROLLER AS A WRAPPER
        'location': $scope.location,
        'price': $scope.prices
      }
    })
    .then(function(data) {
      console.log('THE DATA', data);
      return data;
    })
    .catch(function(error) {
      console.log('ERROR:', error);
    });
  };

  $scope.ratingFilter = function() {
    $scope.ratings.push($scope.rating);

    return $http({
      method: 'POST',
      url: '/yelp/api',
      data:
      {
        'term': $scope.food,  //CREATE A SEARCH CONTROLLER AS A WRAPPER
        'location': $scope.location,
        'rating': $scope.ratings
      }
    })
    .then(function(data) {
      console.log('THE DATA', data);
      return data;
    })
    .catch(function(error) {
      console.log('ERROR:', error);
    });
  }
})

