describe('our custom angular routing', function() {

  // not exactly asserting behavior; just checking raw string values
  it('routing is configured properly', function() {
    module('contractApp.routes');

    inject(function($route) {
      expect($route.routes['/create'].controller).toBe('ContractController as cc');
      expect($route.routes['/create'].templateUrl).toBe('views/contract.html');
      expect($route.routes[null].redirectTo).toBe('/create');
    });

  });

  // this is a better way
  it('browser location should drive routes properly', function() {
    module('contractApp.routes');

    inject(function($route, $location, $rootScope, $httpBackend) {

        expect($route.current).toBeUndefined();

        $httpBackend.expectGET('views/contract.html').respond(200);
        $location.path('/create');
        $rootScope.$digest(); // not sure what this does
        expect($route.current.templateUrl).toBe('views/contract.html');
        expect($route.current.controller).toBe('ContractController as cc');

        // the "otherwise" case forwards to /create
        $httpBackend.expectGET('views/contract.html').respond(200);
        $location.path('/somethingRandom');
        $rootScope.$digest(); // not sure what this does
        expect($route.current.templateUrl).toBe('views/contract.html');
        expect($route.current.controller).toBe('ContractController as cc');

    });

  });
});