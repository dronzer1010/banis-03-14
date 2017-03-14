angular.module('starter').controller('mainMenuController', function($scope, $state) {

  $scope.goBeneficiosSubMenu = function () {
    $state.go('app.beneficiosSubmenu');
  };

  $scope.goFormacionSubmenu = function () {
    $state.go('app.formacionSubmenu');
  };

});
