
angular.module('goodEats.radiusFilter', [])
//THIS CONTROLLER HAS TO BE IMPLEMENTED AS A NEW FEATURE
.controller('geoController', function($scope, $http) {

  //radius_filter: between 1-40000

  $scope.radiusFilter = function() { //make a post request to a /location endpoint

    return $http({
      method: 'POST',
      url: '/location',
      data:
      {
        'term': $scope.food, 
        'location': $scope.location,
        'radius_filter': $scope.radius //radius is from the input from in the index.html
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

});