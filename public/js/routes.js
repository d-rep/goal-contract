(function(angular) {
  angular.module('contractApp.routes', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {

      $routeProvider.
        when('/create', {
          templateUrl: 'views/contract.html',
          controller: 'ContractController as cc'
        })
        .otherwise({
          redirectTo: '/create'
        });

    }]);
})(angular);