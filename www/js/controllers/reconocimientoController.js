angular.module('starter').controller('reconocimientoController', function($scope, $state, $window) {

  $scope.goBack = function() {
    $state.go('tab.more');
    // $window.history.back();
  };
  $scope.gomenuPage = function () {
    $state.go('tab.more');
  };

  $scope.goDetailPage = function() {
    $state.go('tab.reconocimientoSubmenu');
  };

});
