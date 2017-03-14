angular.module('starter').controller('induccionCourseDinamicaController', function($scope, $state, $window) {

  $scope.goBack = function() {
    // $window.history.back();
    $state.go('tab.induccionCourse');
  };

  $scope.gomenuPage = function () {
    $state.go('tab.more');
  };

  $scope.devList = [
   { text: "First Option", checked: true },
   { text: "Second Option", checked: false },
   { text: "Third Option", checked: false }
 ];

 $scope.serverSideList = [
    { text: "Azul", value: "Azul" },
    { text: "Rojo", value: "Rojo" },
    { text: "Amarillo", value: "Amarillo" }
  ];
});
