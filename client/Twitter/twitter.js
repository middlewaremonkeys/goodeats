angular.module('twitter', [])
// TODO: FIX THIS WHOLE THING TO ACTUALLY WORK AND NOT 'FAKE WORK' => Twitter API
//This controller is responsible for all Twitter widgets. They are only 3
//- #pizza
//- #burger
//- default widget for #food
//IMPORTANT => read 'angular ng-show' documentation before you continue! Check also services 

.controller('TwitterController', function($scope, Search) { //Search is the Search factory => take a look in 'services'
  $scope.things = {  //this object is connected with the ng-show in index.html
    burger: false,
    default: true,
    pizza: false
  };

  $scope.search = Search.search; //Using the Search factory
  Search.search = function() {
    $scope.search(); //Search function from Search factory
    $scope.bool(); //this function toggles different widgets
  };

  $scope.bool = function() { //This function is responsible for changing the widgets
    for (var wid in $scope.things) { //for in loop
      $scope.things[wid] = false; //setting up default value of false
    }
    if ($scope.things.hasOwnProperty(Search.options.term)) { //If-else statement is for toogleling the different widgets
      $scope.things[Search.options.term] = true;
    } else {
      $scope.things.default = true;
    }
  };
});
