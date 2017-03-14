angular.module('starter').controller('noticiasPageController', function($scope, $state, $window,$sce, NoticiasPageService, IonicPopupService) {

  $scope.goBack = function() {
    $window.history.back();
  };
  $scope.gomenuPage = function () {
    $state.go('tab.more');
  };
  $scope.goNoticiasDetailPage = function (data) {
    // $state.go('tab.noticiasDetailPage');
    $state.go('tab.noticiasDetailPage', {
      'data_obj': JSON.stringify(data)
    });
  };

//   $scope.noticiasData = [{
//     title: 'Noticias Title.',
//     content: 'This is description.',
//     image: 'img/formulario_1.png'
//   },
//   {
//     title: 'Noticias Title1.',
//     content: 'This is description1.',
//     image: 'img/formulario_1.png'
//   }
// ];
  // console.log('$scope.noticiasData : ' + angular.toJson($scope.noticiasData , ' '));

  $scope.$on('$ionicView.enter', function(ev) {
    if (ev.targetScope !== $scope)
      return;

    NoticiasPageService.getAllNotices().then(function(response) {
      // console.log('noticias data..: ' + angular.toJson(response , ' '));
      if (response.success = "true") {
        $scope.noticiasData = response.data;
        // console.log('$scope.noticiasData..: ' + angular.toJson($scope.noticiasData , ' '));


      }
    }).catch(function(error) {
        var error = JSON.parse(error);
        IonicPopupService.alert("ERROR!!", error.msg);
        console.log('error : ' + angular.toJson(error, ' '));
    });

  });



});
