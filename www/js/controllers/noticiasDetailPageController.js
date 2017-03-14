angular.module('starter').controller('noticiasDetailPageController', function($scope, $state, $window, $stateParams) {

  $scope.goBack = function() {
    $state.go('tab.noticiasPage');
    // $window.history.back();
  };
  $scope.gomenuPage = function () {
    $state.go('tab.more');
  };
  // $scope.myData= $stateParams.data_obj;

  $scope.myData= JSON.parse($stateParams.data_obj);
  // console.log('$stateParams.data : ' + angular.toJson($scope.myData  , ' '));

  $scope.view_pdf = function (url) {
    var ref = window.open(url, '_blank', 'location=no');
}
});
