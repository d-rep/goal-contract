(function(angular) {

  var CreateContractController = function() {
    this.contract = {
      name: '',
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

    this.submitted = false;

    this.save = function() {
      this.submitted = true;
    };

    this.sign = function() {
      this.submitted = true;
    };

  };

  var ViewContractController = function($routeParams, contractService) {
    var contractId = $routeParams.contractId;
    this.contract = contractService.get({'contractId': contractId});
  };

  var TestimonialsController = function($location, $interval, testimonialsService) {

    this.testimonials = testimonialsService.query();
    this.active = 0;

    this.nextTestimonial = function() {
      this.active = this.active + 1;
      if(this.active >= this.testimonials.length) {
        this.active = 0;
      }
    };

    var vm = this;
    $interval(function() {
      vm.nextTestimonial();
    }, 5000);

    this.viewContract = function(contractId) {
      $location.path('view/' + contractId);
    };
  };

  angular.module('contractApp.controllers', ['ngRoute'])
    .controller('CreateContractController', ['contractService', CreateContractController])
    .controller('ViewContractController', ['$routeParams', 'contractService', ViewContractController])
    .controller('TestimonialsController', ['$location', '$interval', 'testimonialsService', TestimonialsController]);
    
})(angular);