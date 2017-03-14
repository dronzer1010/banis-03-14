angular.module('starter').controller('noticasController', function($scope, $state, $window,$sce, NoticiasService, IonicPopupService) {

  $scope.goBack = function() {
    $window.history.back();
  };
  $scope.gomenuPage = function () {
    $state.go('tab.more');
  };

  $scope.goDetail = function (noticisaId) {
    $state.go('tab.noticasDetail', { 'noticisaId': noticisaId });
  };


  // $scope.$on('$ionicView.enter', function(ev) {
  //   if (ev.targetScope !== $scope)
  //     return;
  //
  //   NoticiasService.getAllCirculars().then(function(response) {
  //     // console.log('noticias response : ' + angular.toJson(response , ' '));
  //
  //     if (response.success = "true") {
  //       $scope.circulars = response.data;
  //
  //     }
  //   }).catch(function(error) {
  //       var error = JSON.parse(error);
  //       IonicPopupService.alert("ERROR!!", error.msg);
  //       console.log('error : ' + angular.toJson(error, ' '));
  //   });
  //
  // });

  $scope.$on('$ionicView.enter', function(ev) {
    if (ev.targetScope !== $scope)
      return;

    NoticiasService.getAllNotices().then(function(response) {
      if (response.success = "true") {
        $scope.noticiasData = response.data;
        // console.log('noticias data..: ' + angular.toJson(  $scope.noticiasData , ' '));

      }
    }).catch(function(error) {
        var error = JSON.parse(error);
        IonicPopupService.alert("ERROR!!", error.msg);
        console.log('error : ' + angular.toJson(error, ' '));
    });

  });



  $scope.view_pdf = function (url) {
    var ref = window.open(url, '_blank', 'location=no');
}
});
