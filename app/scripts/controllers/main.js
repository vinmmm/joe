'use strict';

/**
 * @ngdoc function
 * @name joeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the joeApp
 */
angular.module('joeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });


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