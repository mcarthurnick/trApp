angular.module('trApp')
  .controller('toDoCtrl', function($scope) {
    $scope.tasks = [];

    $scope.add = function() {
      var oriTask = angular.copy($scope.title);
      $scope.tasks.push($scope.title);
      $scope.title = angular.copy(oriTask);
      $scope.toDoList.$setPristine();
    }
    $scope.delete = function() {
      $scope.tasks.splice(this.$index, 1);
}
  })
