(function(angular) {

  var ContractController = function() {
    this.contract = {
      yourName: 'Frank Underwood',
      goals: [
        'Get the Watershed Act passed into law',
        'Stop shoving people in front of the subway',
        'Stop all the infidelity', 
        'Become president'
        ],
      deadline: '02/27/2015',
      reward: 'Play some Call of Duty',
      penalty: 'Impeachment'

    };
  };

  angular.module('contractApp.controllers', [])
    .controller('ContractController', ContractController);
    
})(angular);