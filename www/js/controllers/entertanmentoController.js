angular.module('starter').controller('entertanmentoController', function($scope, $state, $window) {

  $scope.goBack = function() {
    $window.history.back();
  };

  $scope.gomenuPage = function () {
    $state.go('tab.more');
  };

  $scope.goCoursePage = function () {
    $state.go('tab.induccionCourse');
  };


});
