angular.module('starter').controller('induccionCourseContentController', function($scope, $state, $window) {

  $scope.goBack = function() {
    // $window.history.back();
    $state.go('tab.induccionCourse');
  };

  $scope.gomenuPage = function () {
    $state.go('tab.more');
  };

  $scope.goCoursePage = function () {
    $state.go('tab.induccionCourseDetailPage');
  };

});
