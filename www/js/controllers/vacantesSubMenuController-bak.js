angular.module('starter').controller('vacantesSubMenuController', function($scope, $state, $window) {

  $scope.goBack = function() {
    $state.go('tab.vacantes');
    // $window.history.back();
  };

  $scope.gomenuPage = function () {
    $state.go('tab.more');
  };

  $scope.goDetailPage = function () {
    $state.go('tab.vacantesDetail');
  };




});
