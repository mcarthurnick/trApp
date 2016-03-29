angular.module('trApp')
  .controller('ModalInstanceCtrl', ['$scope', 'BackgroundService', function($scope, backgroundService) {
    $scope.bgService = backgroundService;
  }]);

