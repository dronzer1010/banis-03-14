angular.module('starter').controller('formacionSubmenuController', function($scope, $state, $window) {

  $scope.goBack = function() {
    // $state.go('tab.more');
    $window.history.back();
  };

  $scope.goDetailPage = function() {
    $state.go('app.beneficiosDetailPage');
  };

  $scope.gomenuPage = function () {
    $state.go('tab.more');
  };
  $scope.goInduccionPage = function () {
    $state.go('tab.induccion');
  };

  $scope.goVideoPage = function () {
    $state.go('tab.formacionVideo');
  };

  $scope.goEntertanmentoPage = function () {
    $state.go('tab.entertanmento');
  };


});
