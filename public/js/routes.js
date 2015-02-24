(function(angular) {
  angular.module('contractApp.routes', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {

      $routeProvider.
        when('/create', {
          templateUrl: 'views/contract.html',
          controller: 'ContractController as cc'
        })
        .when('/testimonials', {
          templateUrl: 'views/testimonials.html',
          controller: 'TestimonialsController as tc'
        })
        .otherwise({
          redirectTo: '/create'
        });

    }]);
})(angular);