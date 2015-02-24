describe('the contractApp angular app', function() {
  var app, routes, controller, httpBackend;

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
  });

  describe('the TestimonialsController angular module', function() {
    beforeEach(inject(function($controller, $httpBackend) {
      controller = $controller('TestimonialsController');
      httpBackend = $httpBackend;
    }));

    it('controller should make HTTP call to get data', function() {
      // TODO coming soon
      //httpBackend.expectGET('/testimonials').respond(200);
    });
  });

});