(function(angular) {

  var ContractController = function() {
    this.contract = {
      name: 'Enter your name',
      goals: [
        ''
        ],
      deadline: '',
      reward: '',
      penalty: ''

    };
  };

  var TestimonialsController = function(testimonialsService) {
    this.testimonials = testimonialsService.query();
  };

  angular.module('contractApp.controllers', [])
    .controller('ContractController', ContractController)
    .controller('TestimonialsController', ['testimonialsService', TestimonialsController]);
    
})(angular);