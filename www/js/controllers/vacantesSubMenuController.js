angular.module('starter').controller('vacantesSubMenuController', function($scope, $state, $window, VacancyService, IonicPopupService) {
 

  $scope.$on('$ionicView.enter', function(ev) {
    if (ev.targetScope !== $scope)
      return;

    VacancyService.getAllVacancies().then(function(response) {
      $scope.vacancies = [];
      if (response.success = "true") {
        // console.log('yes true');
          $scope.vacancies = response.data;
          //console.log(response.data);
      }
    }).catch(function(error) {
        var error = JSON.parse(error);
        IonicPopupService.alert("ERROR!!", error);
        console.log('error : ' + angular.toJson(error, ' '));
    });

  });  
  
  
  $scope.goBack = function() {
    $state.go('tab.vacantes');
    // $window.history.back();
  };

  $scope.gomenuPage = function () {
    $state.go('tab.more');
  };

  $scope.goDetailPage = function (vacancyId) {
    $state.go('tab.vacantesDetail',{'vacancyId':vacancyId});
  };




});
