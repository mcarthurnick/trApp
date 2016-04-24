angular.module('trApp')
    .controller('newTripCtrl', function ($scope, $http, userService) {
      $scope.createTrip = function() {
        // var newTrip = {
        //   destination : $scope.destination,
        //   arrivalDate : $scope.arrivalDate,
        //   departDate : $scope.departDate,
        //   amountToSave : $scope.amountToSave,
        //   amountDeposited : $scope.amountDeposited
        // }
            userService.addNewTrip(data).then(function(result) {
              console.log(result);
            })
      }




  })
