angular.module('starter').controller('nominacionCompletePageController', function($scope, $state, $window) {

  $scope.goBack = function() {
      // $state.go('tab.nominacionSelectPage');
      $state.go('tab.more');
    // $window.history.back();
  };

  $scope.gomenuPage = function () {
    $state.go('tab.more');
  };




});
