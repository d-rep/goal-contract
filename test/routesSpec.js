describe('our custom angular routing', function() {
  it('should route properly as a single-page app', function() {
    module('contractApp.routes');

    inject(function($route) {
      expect($route.routes['/create'].controller).toBe('ContractController as cc');
      expect($route.routes['/create'].templateUrl).toBe('views/contract.html');
      expect($route.routes[null].redirectTo).toBe('/create');
    });

  });
});