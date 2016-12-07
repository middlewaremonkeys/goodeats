angular.module('twitter', [])

.controller('TwitterController', function($scope, $timeout) {
  // $scope.pizza = false;
  // $scope.burger = false;
  // $scope.food = false;
  // $scope.counter = 0;
  $scope.term = 'burger'
  $scope.things = {
  	burger: false,
  	default: true,
  	pizza: false
  }

  $scope.bool = function() {
  	console.log('click');
  	// console.log($scope.things[$scope.term])
  	for (var wid in $scope.things) {
		$scope.things[wid] = false;
	}
  	if ($scope.things.hasOwnProperty($scope.term)) {
  		$scope.things[$scope.term] = true;
  	} else {
  		$scope.things.default = true;
  	}
  	// $scope.counter++;
  	// console.log("Counter", $scope.counter)

  	// $timeout(function() {
   // 		if ($scope.counter % 3 === 0) {
   // 			$scope.food = true;
  	// 		$scope.pizza = false;
  	// 		$scope.burger = false;
  	// 	} else if (!$scope.pizza) {
  	// 		$scope.pizza = !$scope.pizza;
  	// 		$scope.burger = false;
  	// 		$scope.food = false;
  	// 	} else if (!$scope.burger) {
  	// 		$scope.burger = !$scope.burger;
  	// 		$scope.pizza = false;
  	// 		$scope.food = false;
  	// 	}
  		// if ($scope.counter % 3 === 0) {
  		// 	$scope.pizza = false;
  		// 	$scope.burger = false;
  		// } else {
		  // 	$scope.pizza = !$scope.pizza;
		  // 	$scope.burger = !$scope.burger;
  		// }
  	// }, 1000);
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



           
           
          

