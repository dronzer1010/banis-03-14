angular.module('starter').controller('calendarioCreateEventController', function($scope, $state, $window,$sce,$filter, EventService, $stateParams,IonicPopupService) {



  $scope.goBack = function() {
    // $window.history.back();
    $state.go('tab.calendario');
  };
  $scope.gomenuPage = function () {
    $state.go('tab.more');
  };

  $scope.eventDetails= JSON.parse($stateParams.event_obj);
  console.log(' $scope.eventDetails : ' + angular.toJson($scope.eventDetails , ' '));

  // $scope.$on('$ionicView.enter', function(ev) {
  //   if (ev.targetScope !== $scope)
  //     return;
  //
  //   EventService.getEvents().then(function(response) {
  //     if (response.success = "true") {
  //       $scope.eventData = response.data;
  //     console.log('event data  : ' + angular.toJson(response.data , ' '));
  //
  //     }
  //   }).catch(function(error) {
  //       var error = JSON.parse(error);
  //       IonicPopupService.alert("ERROR!!", error.msg);
  //       console.log('error : ' + angular.toJson(error, ' '));
  //   });
  //
  // });



});
