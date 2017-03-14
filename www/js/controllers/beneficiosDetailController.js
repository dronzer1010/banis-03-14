angular.module('starter').controller('beneficiosDetailController', function($scope, $state, $window,$stateParams, $timeout) {

  $scope.goBack = function() {
    // $state.go('tab.beneficiousCoupons');
    $window.history.back();
  };
  $scope.gomenuPage = function () {
    $state.go('tab.more');
  };
  $scope.coupenDetails= JSON.parse($stateParams.coupen_obj);

  // console.log('$stateParams.data : ' + angular.toJson($scope.coupenDetails , ' ') );
  $scope.test_email = 'mihir.test@gmail.com'
 $timeout(function(){
   $scope.show = true;
 }, 500)
});
