describe('the contractApp angular app', function() {
  var app, routes, controller, httpBackend, testimonialsService;

  beforeEach(function() {
    module('contractApp');
  });

  it('truthy', function() {
    expect(true).toEqual(true);
  });

  describe('the ContractController angular module', function() {

    beforeEach(inject(function($controller) {
      controller = $controller('ContractController');
    }));

    it('controller has name property', function() {
      expect(controller.contract.name).toEqual('Enter your name');
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

  describe('the TestimonialsController angular module', function() {
    beforeEach(inject(function($controller, $httpBackend, testimonialsService) {
      $controller('TestimonialsController');

      expect(testimonialsService).toBeDefined();

      // TODO coming soon
      //httpBackend.expectGET('/testimonials').respond(200);
    }));
  });

});