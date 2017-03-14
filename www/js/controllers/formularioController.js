angular.module('starter').controller('formularioController', function($scope, $state, $window) {

  $scope.goBack = function() {
    $window.history.back();
  };
  $scope.gomenuPage = function () {
    $state.go('tab.more');
  };

  $scope.goVacacionesPage = function () {
    $state.go('tab.vacaciones');
  };

});
