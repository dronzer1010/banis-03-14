angular.module('starter').controller('induccionCourseController', function($scope, $state, $window) {

  $scope.goBack = function() {
      // $state.go('tab.induccion');
    $window.history.back();
  };

  $scope.gomenuPage = function () {
    $state.go('tab.more');
  };

  $scope.goCourseContentVideoList = function () {
    $state.go('tab.induccionCourseVideoList');
  };

  $scope.goCourseContentPresentationList = function () {
    $state.go('tab.induccionCoursePresentationList');
  };

  $scope.goCourseDinamica = function () {
    $state.go('tab.induccionCourseDinamica');
  };


});
