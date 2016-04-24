angular.module('trApp').controller('loginCtrl', function($scope, $http, userService) {

  // $scope.input = {}
  // console.log("Scope.Input" + $scope.input);
  $scope.registerForm = function() {
        userService.addNewUser($scope.input).then(function(result) {
          console.log(result);
        })
  }

  $scope.loginForm = function(input) {
    userService.getLoginUser(input);
  }
})
