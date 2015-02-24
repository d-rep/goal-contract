(function(angular) {

  var testimonialsService = function($resource) {
    return $resource('/testimonials');
  };

  angular.module('contractApp.services', ['ngResource'])
    .factory('testimonialsService', ['$resource', testimonialsService]);

})(angular);