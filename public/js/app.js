(function(angular) {
  angular.module('contractApp', [
    'ngRoute', 'ngResource', 
    'contractApp.services', 
    'contractApp.controllers', 
    'contractApp.routes',
    'ngAnimate'
  ]);

})(angular);