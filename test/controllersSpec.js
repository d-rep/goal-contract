describe('the contractApp angular app', function() {
  var app, routes, controller;

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
      expect(controller.contract.yourName).toEqual('Frank Underwood');
    });
  });

});