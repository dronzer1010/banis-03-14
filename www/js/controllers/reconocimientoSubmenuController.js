angular.module('starter').controller('reconocimientoSubmenuController', function($scope, $state, $window) {

  $scope.goBack = function() {
    $state.go('tab.reconocimiento');
    $window.history.back();
  };

  $scope.gomenuPage = function () {
    $state.go('tab.more');
  };
  $scope.goInduccionPage = function () {
    $state.go('tab.nominacionIndividual');
  };

  $scope.goVideoPage = function () {
    $state.go('tab.formacionVideo');
  };


});
