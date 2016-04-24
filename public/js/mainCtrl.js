angular.module('trApp')
  .controller('ModalInstanceCtrl', function($scope, tripService, userService) {

    $scope.isActive = false;
    $scope.hideShowTrips = true;
    $scope.hideShowCreate = false;
    $scope.selected = false;



    $scope.getUser = function() {
      userService.goGetUser().then(function(result) {
        $scope.currentUser = result[0];
        $scope.firstName = $scope.currentUser.firstName;
        $scope.lastName = $scope.currentUser.lastName;
        $scope.email = $scope.currentUser.email;
        $scope.phone = $scope.currentUser.phone;
        $scope.location = $scope.currentUser.location;
        $scope.baseAirport = $scope.currentUser.baseAirport;

      })
    }
    $scope.getUser();

    $scope.toggleTrips = function (tripIdx) {
      $scope.makeDeposit = false;
      $scope.tripIndex = tripIdx;
      $scope.selected = true;
      $scope.trip = $scope.currentUser.trips[$scope.tripIndex];
      $scope.deposits = $scope.trip.deposits;
      $scope.getProgressbarValue = function() {
          $scope.amountSaved = parseInt($scope.trip.amountSavedTotal);
          $scope.amountToSave = parseInt($scope.trip.amountToSave);
          $scope.percentOfGoal = Math.round($scope.amountSaved / $scope.amountToSave * 100);

          return $scope.percentOfGoal;
      }

      if ($scope.hideShowTrips) {
        $scope.hideShowTrips = false;
      } else {
        $scope.hideShowCreate = false;
        $scope.hideShowTrips = true;
      }
};


$scope.createTrip = function(input) {
      userService.addNewTrip(input).then(function(result) {
        console.log(result);
      })
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
