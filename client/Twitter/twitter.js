angular.module('twitter', [])

.controller('TwitterController', function($scope, $timeout) {
  $scope.pizza = false;
  $scope.burger = false;
  $scope.counter = 0;

  $scope.bool = function() {
  	$scope.counter++;
  	console.log("Counter", $scope.counter)

  	$timeout(function() {
   		if ($scope.counter % 3 === 0) {
  			$scope.pizza = false;
  			$scope.burger = false;
  		} else if (!$scope.pizza) {
  			$scope.pizza = !$scope.pizza;
  			$scope.burger = false;
  		} else if (!$scope.burger) {
  			$scope.burger = !$scope.burger;
  			$scope.pizza = false;
  		}
  		// if ($scope.counter % 3 === 0) {
  		// 	$scope.pizza = false;
  		// 	$scope.burger = false;
  		// } else {
		  // 	$scope.pizza = !$scope.pizza;
		  // 	$scope.burger = !$scope.burger;
  		// }
  	}, 1000);
   //  if(!$scope.pizza) {	
   //  return 	$timeout(function(){ $scope.pizza = !$scope.pizza}, 1000);
   // }
   // else if (!$scope.burger){
   // 	return $timeout(function(){ $scope.burger = !$scope.burger}, 1000);
   // } 
   // else {
   // 	console.log("Click again")
   // }
 }
  console.log("Counter", $scope.counter)
  console.log("test function", $scope.bool)
  });





