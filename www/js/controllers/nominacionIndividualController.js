angular.module('starter').controller('nominacionIndividualController', function($scope, $state, $window) {

  $scope.goBack = function() {
      $state.go('tab.reconocimientoSubmenu');
    // $window.history.back();
  };

  $scope.gomenuPage = function () {
    $state.go('tab.more');
  };
  $scope.goNominacionSelect = function () {
    $state.go('tab.nominacionIndividualSelect');
  };


  // $scope.goNominacionSelectPage = function () {
  //   $state.go('tab.nominacionSelectPage');
  // };
  //
  // $scope.goNominacionVotarPage = function () {
  //   $state.go('tab.nominacionVotarPage');
  // };


});
