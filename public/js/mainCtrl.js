angular.module('trApp')
  .controller('ModalInstanceCtrl', function($scope, tripService) {

    $scope.isActive = false;
    $scope.hideShowTrips = false;
    $scope.hideShowCreate = false;

    $scope.toggleTrips = function () {
      if ($scope.hideShowTrips) {
        $scope.hideShowTrips = false;
      } else {
        $scope.hideShowCreate = false;
        $scope.hideShowTrips = true;

      }
    }

    $scope.toggleCreateTrip = function () {
      if ($scope.hideShowCreate) {
        $scope.hideShowCreate = false;
      } else {
        $scope.hideShowTrips = false;
        $scope.hideShowCreate = true;

      }
  }
});
