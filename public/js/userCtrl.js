angular.module('trApp')
  .controller('userCtrl', function($scope, userService) {
    $scope.users = function() {
      userService.goGetUser().then(function(result) {
        $scope.myUser = result[0];
      });
    }
  });
