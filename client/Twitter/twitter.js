angular.module('twitter', [])
// TODO: FIX THIS WHOLE THING TO ACTUALLY WORK AND NOT 'FAKE WORK'
.controller('TwitterController', function($scope, Search) {
  $scope.things = {
    burger: false,
    default: true,
    pizza: false
  };

  $scope.search = Search.search;
  Search.search = function() {
    $scope.search();
    $scope.bool();
  };

  $scope.bool = function() {
    for (var wid in $scope.things) {
      $scope.things[wid] = false;
    }
    if ($scope.things.hasOwnProperty(Search.options.term)) {
      $scope.things[Search.options.term] = true;
    } else {
      $scope.things.default = true;
    }
  };
});
