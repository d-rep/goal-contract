describe('angular services/factories', function() {
  it('should build a Service that uses ngResource to get data', function() {
    module('contractApp.services');

    inject(function($resource, $httpBackend, testimonialsService) {
      expect($resource).toBeDefined();

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