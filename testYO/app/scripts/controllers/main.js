'use strict';

/**
 * @ngdoc function
 * @name testYoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testYoApp
 */
angular.module('testYoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
