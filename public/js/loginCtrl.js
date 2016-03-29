angular.module('trApp').controller('loginCtrl', function($scope, $state, $location, $root ) {
   $scope.login = $state.is('login');
})