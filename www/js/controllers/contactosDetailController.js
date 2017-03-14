angular.module('starter').controller('contactosDetailController', function($scope, $state, $window,ContactosService,$stateParams) {

  $scope.goBack = function() {
    $state.go('tab.contactos');
    // $window.history.back();
  };
  $scope.gomenuPage = function () {
    $state.go('tab.more');
  };

  $scope.contactosData= JSON.parse($stateParams.contactos_data);
  // console.log('$stateParams.data : ' + angular.toJson($scope.contactosData , ' ') );
});
