(function(angular) {
  angular.module('contractApp.routes', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {

      $routeProvider.
        when('/create', {
          templateUrl: 'views/contract.html',
          controller: 'CreateContractController as cc'
        })
        .when('/view/:contractId', {
          templateUrl: 'views/view.html',
          controller: 'ViewContractController as ctrl'
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