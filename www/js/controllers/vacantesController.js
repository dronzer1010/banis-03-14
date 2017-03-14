angular.module('starter').controller('vacantesController', function($scope, $state, $window) {

  $scope.goBack = function() {
    $state.go('tab.vacantes');
    // $window.history.back();
  };

  $scope.gomenuPage = function () {
    $state.go('tab.more');
  };

  $scope.goVacantesLineamientosPage = function () {
    $state.go('tab.vacantesLineamientos');
  };

  $scope.goVacantesReclutarPage = function () {
    $state.go('tab.vacantesReclutar');
  };

  $scope.goVacantesPage = function () {
	  console.log('called');
    $state.go('tab.vacantesSubMenu');
  };



});
