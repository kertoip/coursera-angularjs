(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunch = "";
  $scope.message = "";

  $scope.check = function () {
    if ($scope.lunch == "") {
      $scope.message = "Please enter data first";
    } else {
      if ($scope.lunch.split(",").length < 4) {
        $scope.message = "Enjoy!";
      } else {
        $scope.message = "Too much!";
      }
    }
  };
}

})();
