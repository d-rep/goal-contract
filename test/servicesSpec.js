describe('angular services/factories', function() {

  it('should build a service which uses REST endpoint to get Contract data', function() {
    module('contractApp.services');

    inject(function($resource, $httpBackend, contractService) {
      expect(contractService).toBeDefined();

      var json = {'name': 'Drew'};
      $httpBackend.expectGET('/contracts/drew').respond(json);

      var contractResource = contractService.get({'contractId': 'drew'});

      var name;
      contractResource.$promise.then(function(data) {
        name = data.name;
      });

      $httpBackend.flush();
      expect(name).toEqual('Drew');
    });
  });

  it('should build a TestimonialsService that uses ngResource to get data', function() {
    module('contractApp.services');

    inject(function($resource, $httpBackend, testimonialsService) {
      expect($resource).toBeDefined();
      expect(testimonialsService).toBeDefined();

      var json = [{'name':'Frank'}];
      $httpBackend.expectGET('/testimonials').respond(json);

      var testimonialsResource = testimonialsService.query();

      var name;
      testimonialsResource.$promise.then(function(data) {
        name = data[0].name;
      });

      $httpBackend.flush();
      expect(name).toEqual('Frank');
    });
  });
});