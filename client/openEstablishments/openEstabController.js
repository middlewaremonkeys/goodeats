angular.module('goodEats.openEstab', [])

.controller('openEstabController', function($scope, $http){
   $scope.open = false;
  $scope.toggleOpenEstablishments = function(){
    $scope.open = !$scope.open;
    $http({
      method: "POST",
      url: '/api/yelp',
      data: $scope.open
    })
    .then(function(response){
      console.log(response.data);

    })
    .catch(function(error) {
      console.log(error);
    })
  };
});
