describe('The contractApp angular module', function() {
  var app, routes, controller, httpBackend, testimonialsService;

  beforeEach(function() {
    module('contractApp');
  });

  it('Ensure we know what truthy means', function() {
    expect(true).toEqual(true);
  });

  describe('The CreateContractController angular module', function() {

    beforeEach(inject(function($controller) {
      controller = $controller('CreateContractController');
    }));

    it('Controller has a contract and it has a name property that is blank by default', function() {
      expect(controller.contract.name).toEqual('');
    });

    it('Ensure goals are added to contract', function() {
      expect(controller.contract.goals).toEqual([]);
      controller.newGoal = 'stop smoking';
      controller.addGoal();
      controller.newGoal = 'be nice';
      controller.addGoal();
      expect(controller.contract.goals).toEqual(['stop smoking', 'be nice']);
    });

    it('Ensure we remove a goal properly', function() {
      expect(controller.contract.goals).toEqual([]);
      controller.contract.goals = ['a','b','c','d','e'];
      controller.deleteGoal(3);
      expect(controller.contract.goals).toEqual(['a','b','c','e']);
      controller.deleteGoal(0);
      expect(controller.contract.goals).toEqual(['b','c','e']);
      controller.deleteGoal(2);
      expect(controller.contract.goals).toEqual(['b','c']);
    });

    it('Ensure we save properly', function() {
      expect(controller.submitted).toEqual(false);
      controller.save();
      expect(controller.submitted).toEqual(true);
    });

    it('Ensure we sign it properly', function() {
      expect(controller.submitted).toEqual(false);
      controller.sign();
      expect(controller.submitted).toEqual(true);
    }); 

  });

  describe('The ViewContractController behavior', function() {

    it('Controller is defined', function() {
      inject(function($controller) {

          var viewContractController = $controller('ViewContractController', {
            $routeParams: {'contractId': 'walter'}
          });

          expect(viewContractController).toBeDefined();

      });
    });

  });

  describe('The TestimonialsController angular module', function() {
    beforeEach(inject(function($controller) {
      controller = $controller('TestimonialsController');
      expect(controller).toBeDefined();
    }));

    it('Clicking through all testimonials will wrap around to the beginning', function() {

        controller.testimonials = ['a','b','c'];
        expect(controller.active).toEqual(0);
        
        controller.nextTestimonial();
        expect(controller.active).toEqual(1);

        controller.nextTestimonial();
        expect(controller.active).toEqual(2);

        controller.nextTestimonial();
        expect(controller.active).toEqual(0);


    });

    it('Can view a contract from testimonials', function() {
        controller.viewContract('blah');
        // TODO assert something
    });
  });

});