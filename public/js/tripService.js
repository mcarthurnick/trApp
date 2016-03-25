angular.module('trApp')
    .service('tripService', function($http) {
      this.goGetTrips = function() {
        return $http.get('/trip').then(function(result) {
          return result.data;
        },
      function(err) {
        console.log(err);
      });
    };
  });
