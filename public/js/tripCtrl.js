angular.module('trApp')
  .controller('tripCtrl', function($scope, tripService) {
    $scope.getTrip = function() {
      tripService.goGetTrips().then(function(result) {
        $scope.myTrips = result[0];
      })
    }
  });
