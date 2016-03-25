angular.module('trApp')
    .service('userService', function($http) {
      this.goGetUser = function() {
        return $http.get('/user').then(function(result) {
          return result.data;
        },
      function(err) {
        console.log(err);
      });
    };
  });
