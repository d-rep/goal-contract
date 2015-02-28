describe('our custom angular routing', function() {

  // not exactly asserting behavior; just checking raw string values
  it('routing is configured properly', function() {
    module('contractApp.routes');

    inject(function($route) {
      expect($route.routes['/create'].controller).toBe('CreateContractController as cc');
      expect($route.routes['/create'].templateUrl).toBe('views/contract.html');
      expect($route.routes[null].redirectTo).toBe('/create');
    });

  });

  // this is a better way
  it('browser location should drive routes properly', function() {
    module('contractApp.routes');

    inject(function($route, $location, $rootScope, $httpBackend) {

        expect($route.current).toBeUndefined();

        // the /create route
        $httpBackend.expectGET('views/contract.html').respond(200);
        $location.path('/create');
        $rootScope.$digest();
        expect($route.current.templateUrl).toBe('views/contract.html');
        expect($route.current.controller).toBe('CreateContractController as cc');

        // the /view route
        $httpBackend.expectGET('views/view.html').respond(200);
        $location.path('/view/darth');
        $rootScope.$digest();
        expect($route.current.templateUrl).toBe('views/view.html');
        expect($route.current.controller).toBe('ViewContractController as ctrl');

        // the /testimonials route
        $httpBackend.expectGET('views/testimonials.html').respond(200);
        $location.path('/testimonials');
        $rootScope.$digest();
        expect($route.current.templateUrl).toBe('views/testimonials.html');
        expect($route.current.controller).toBe('TestimonialsController as tc');

        // the "otherwise" case forwards to /create
        $httpBackend.expectGET('views/contract.html').respond(200);
        $location.path('/somethingRandom');
        $rootScope.$digest();
        expect($route.current.templateUrl).toBe('views/contract.html');
        expect($route.current.controller).toBe('CreateContractController as cc');

    });

  });
});