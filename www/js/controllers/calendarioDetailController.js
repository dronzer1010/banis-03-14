angular.module('starter').controller('calendarioDetailController', function($scope, $state,$stateParams, $window,$sce, EventService, IonicPopupService) {

  $scope.goBack = function() {
    // $window.history.back();
    $state.go('tab.calendario');
  };
  $scope.gomenuPage = function () {
    $state.go('tab.more');
  };


  $scope.eventId = $stateParams.eventId;
  console.log(' $scope.eventId: ' + $scope.eventId);



  $scope.$on('$ionicView.enter', function(ev) {
    if (ev.targetScope !== $scope)
      return;

    EventService.getEventDetail($stateParams.eventId).then(function(response) {
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


});
