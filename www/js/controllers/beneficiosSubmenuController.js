angular.module('starter').controller('beneficiosSubmenuController', function($scope, $state, $window) {

  $scope.goBack = function() {
    $window.history.back();
  };

  $scope.goDetailPage = function() {
    $state.go('app.beneficiosDetailPage');
  };


});
