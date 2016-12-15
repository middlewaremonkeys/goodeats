angular.module('twitter', [])
/*
  This controller is responsible for all 3 Twitter widgets. 
  - #pizza
  - #burger
  - default widget for #food
*/
.controller('TwitterController', ['$scope', 'Search', ($scope, Search) => { 
  //$scope.things is connected with ng-show in index.html
  $scope.things = {  
    burger: false,
    default: true,
    pizza: false
  };

  $scope.search = Search.search; 
  Search.search = () => {
    $scope.search(); 
    //this function toggles different widgets
    $scope.bool(); 
  };
  //$scope.bool is responsible for switching the widgets
  $scope.bool = () => { 
    for (var wid in $scope.things) { 
  //setting up default value to false
      $scope.things[wid] = false; 
    }
    //If-else statement is for toogleling different widgets
    if ($scope.things.hasOwnProperty(Search.options.term)) { 
      $scope.things[Search.options.term] = true;
    } else {
      $scope.things.default = true;
    }
  };
}]);
