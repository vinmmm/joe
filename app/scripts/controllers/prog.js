'use strict';

/**
 * @ngdoc function
 * @name joeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the joeApp
 */
angular.module('joeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });


// Progress Bar

angular.module('joeApp')
  .controller('Charlie', function Charlie($scope, $http) {
  $http.get('src/order_status.json')
  .success(function(data) { $scope.orderStatus = data.orderStatus; });
   
});