angular.module('trApp')
    .service('userService', function($http, $state) {
      this.goGetUser = function() {
        return $http.get('/dashboard').then(function(result) {
          return result.data;
        },
      function(err) {
        console.log(err);
      });
    };

    this.getLoginUser = function(data) {
      console.log(data);
      return $http.post('/login', data).then(function(result) {
        if(result.data === "success") {
            $state.go('dashMain');
        }
      },
      function(err) {
        console.log(err);
      }
    )};

    this.addNewUser = function(data) {
      return $http.post('/register', data).then(function(result) {
        console.log(result);
        return
      },
      function(err) {
        console.log(err);
      }
    )};

    this.addNewTrip = function(data) {
      return $http.post('/trip', data).then(function(result) {
        console.log(result);
        return
      },
      function(err) {
        console.log(err);
      })
    }

  });
