angular.module('trApp')
    .service('tripService', function($http) {
      this.goGetTrips = function() {
        return $http.get('/dashboard').then(function(result) {
          return result.data;
        },
      function(err) {
        console.log(err);
      });
    };
  });
