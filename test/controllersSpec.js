describe('the contractApp angular app', function() {
  var app, routes, controller, httpBackend, testimonialsService;

  beforeEach(function() {
    module('contractApp');
  });

  it('truthy', function() {
    expect(true).toEqual(true);
  });

  describe('the CreateContractController angular module', function() {

    beforeEach(inject(function($controller) {
      controller = $controller('CreateContractController');
    }));

    it('controller has name property', function() {
      expect(controller.contract.name).toEqual('');
    });

    it('ensure goals are added to contract', function() {
      expect(controller.contract.goals).toEqual([]);
      controller.newGoal = 'stop smoking';
      controller.addGoal();
      controller.newGoal = 'be nice';
      controller.addGoal();
      expect(controller.contract.goals).toEqual(['stop smoking', 'be nice']);
    });

    it('ensure we delete element properly', function() {
      expect(controller.contract.goals).toEqual([]);
      controller.contract.goals = ['a','b','c','d','e'];
      controller.deleteGoal(3);
      expect(controller.contract.goals).toEqual(['a','b','c','e']);
      controller.deleteGoal(0);
      expect(controller.contract.goals).toEqual(['b','c','e']);
      controller.deleteGoal(2);
      expect(controller.contract.goals).toEqual(['b','c']);
    });

  });

  describe('the ViewContractController behavior', function() {

    it('Controller is defined', function() {
      inject(function($controller) {

          var viewContractController = $controller('ViewContractController', {
            $routeParams: {'contractId': 'walter'}
          });

          expect(viewContractController).toBeDefined();

      });
    });

  });

  describe('the TestimonialsController angular module', function() {
    it('Controller is defined and behaves as expected', function() {
      inject(function($controller) {

          var testimonialsController = $controller('TestimonialsController');

          expect(testimonialsController).toBeDefined();

          testimonialsController.testimonials = ['a','b','c'];
          expect(testimonialsController.active).toEqual(0);
          
          testimonialsController.nextTestimonial();
          expect(testimonialsController.active).toEqual(1);

          testimonialsController.nextTestimonial();
          expect(testimonialsController.active).toEqual(2);

          testimonialsController.nextTestimonial();
          expect(testimonialsController.active).toEqual(0);
      });
    });
  });

});