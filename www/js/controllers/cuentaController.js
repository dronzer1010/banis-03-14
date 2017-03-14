angular.module('starter').controller('cuentaController', function($scope, $state, $window,$stateParams) {

  
    $scope.userData = Session.getUser();
    console.log('$scope.userData..... : ' + $scope.userData);
  
  $scope.goBack = function() {
    // $state.go('tab.beneficiousCoupons');
    $window.history.back();
  };
  $scope.gomenuPage = function () {
    $state.go('tab.more');
  };


});
