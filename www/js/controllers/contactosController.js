angular.module('starter').controller('contactosController', function($scope, $state, $window,$sce, ContactosService,IonicPopupService) {

  $scope.goBack = function() {
    // $window.history.back();
    $state.go('tab.more');
  };
  $scope.gomenuPage = function () {
    $state.go('tab.more');
  };
  $scope.goContactosDetailPage = function (data) {
    $state.go('tab.contactosDetailPage', {
      'contactos_data': JSON.stringify(data)
    });
  };




  // $scope.contactosData = [{
  //   title: 'contactos Title.',
  //   content: 'This is description.',
  //   image: 'img/formulario_1.png'
  // },
  // {
  //   title: 'contactos1 Title1.',
  //   content: 'This is description1.',
  //   image: 'img/formulario_1.png'
  // }
  // ];
  // console.log('$scope.contactosData : ' + angular.toJson($scope.contactosData , ' '));

  $scope.$on('$ionicView.enter', function(ev) {
    if (ev.targetScope !== $scope)
      return;

    ContactosService.getAllContactos().then(function(response) {
      // console.log('Contactos data..: ' + angular.toJson(response , ' '));
      if (response.success = "true") {
        $scope.contactosData = response.data;
        // console.log('Contactos data..: ' + angular.toJson($scope.contactosData , ' '));


      }
    }).catch(function(error) {
        var error = JSON.parse(error);
        IonicPopupService.alert("ERROR!!", error.msg);
        console.log('error : ' + angular.toJson(error, ' '));
    });

  });

});
