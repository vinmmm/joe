'use strict';

/**
 * @ngdoc function
 * @name joeApp.controller:WelcomeCtrl
 * @description
 * # WelcomeCtrl
 * Controller of the joeApp
 */
angular.module('joeApp')
  .controller('WelcomeCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

// Interacting with the scope in Expressions  
angular.module('joeApp')
  .controller('Mine', function ($scope) {
  	    $scope.speed = 'Slow';
  	    $scope.vehicle = 'Train';
  	    $scope.newSpeed = 'Hypersonic';
  	    $scope.newVehicle = 'Plane';
  	$scope.upper = function(aString){
  		return angular.uppercase(aString);
  	};  

  		$scope.lower = function(aString){
  		return angular.lowercase(aString);
  	};      
    
    $scope.setValues = function(speed, vehicle){
    	$scope.speed = speed;
    	$scope.vehicle = vehicle;
    };
  });

  
// Javascript Expressions  
angular.module('joeApp').controller('Moss', function ($scope) {
        $scope.Math = window.Math;
        $scope.myArr = [1];
        $scope.removeArr = [];
        
    
  });

// Currency Filter
angular.module('joeApp').controller('Mickey', ['$scope', 'currencyFilter',
                          function ($scope, myCurrencyFilter){
  $scope.getCurrencyValue = function(value){
    return myCurrencyFilter(value, '$USD');
                           
 };

}]);
  




  
  