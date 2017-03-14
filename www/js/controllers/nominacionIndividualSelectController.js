angular.module('starter').controller('nominacionIndividualSelectController', function($scope, $state, $window) {

  $scope.goBack = function() {
      $state.go('tab.reconocimientoSubmenu');
    // $window.history.back();
  };

  $scope.gomenuPage = function () {
    $state.go('tab.more');
  };

  $scope.goNominacionSelectPage = function () {
    $state.go('tab.nominacionSelectPage');
  };

  $scope.goNominacionVotarPage = function () {
    $state.go('tab.nominacionVotarPage');
  };


});
