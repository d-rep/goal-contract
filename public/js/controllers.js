(function(angular) {

  var ContractController = function() {
    this.contract = {
      name: 'Enter your name',
      goals: [],
      deadline: '',
      reward: '',
      penalty: ''

    };

    this.deleteGoal = function(index) {
      this.contract.goals.splice(index,1);
    };

    this.newGoal = '';
    this.addGoal = function() {
      this.contract.goals.push(this.newGoal);
      this.newGoal = '';
    };

  };

  var TestimonialsController = function(testimonialsService) {
    this.testimonials = testimonialsService.query();
  };

  angular.module('contractApp.controllers', [])
    .controller('ContractController', ContractController)
    .controller('TestimonialsController', ['testimonialsService', TestimonialsController]);
    
})(angular);