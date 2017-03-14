angular.module('starter').controller('noticiasDetailController', function($scope, $state,$stateParams, $window,$sce, NoticiasService, IonicPopupService) {

  $scope.goBack = function() {
    // $window.history.back();
    $state.go('tab.noticas');
  };
  $scope.gomenuPage = function () {
    $state.go('tab.more');
  };

  $scope.goCommentPage = function () {
    $state.go('tab.noticasComment');
  };
  $scope.godetailPage = function () {
    $state.go('tab.noticasDetail');
  };
  $scope.noticisaId = $stateParams.noticisaId;
  console.log(' $scope.noticisaId: ' + $scope.noticisaId);

  $scope.like = function () {
    IonicPopupService.alert("Oops!!", "You cant like more than once the same news");
  };

if ($stateParams.noticisaId) {
  $scope.$on('$ionicView.enter', function(ev) {
    if (ev.targetScope !== $scope)
      return;

    NoticiasService.getAllDetail($stateParams.noticisaId).then(function(response) {
        if (response.success = "true") {
        $scope.detailData = response.data;
        // console.log('$scope.detailData : ' + angular.toJson(response , ' '));

      }
    }).catch(function(error) {
        var error = JSON.parse(error);
        IonicPopupService.alert("ERROR!!", error.msg);
        console.log('error : ' + angular.toJson(error, ' '));
    });

  });
}



});
