(function(angular) {

  var ContractController = function() {
    this.yourName = 'Underwood';
  };

  angular.module('contractApp.controllers', [])
    .controller('ContractController', ContractController);
    
})(angular);