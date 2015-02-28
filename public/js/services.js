(function(angular) {

  var contractService = function($resource) {
    return $resource('/contracts/:contractId');
  };

  var testimonialsService = function($resource) {
    return $resource('/testimonials');
  };

  angular.module('contractApp.services', ['ngResource'])
    .factory('contractService', ['$resource', contractService])
    .factory('testimonialsService', ['$resource', testimonialsService]);

})(angular);