'use strict';

/**
 * @ngdoc function
 * @name testYoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testYoApp
 */
angular.module('testYoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
