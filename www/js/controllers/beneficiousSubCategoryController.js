angular.module('starter').controller('beneficiousSubCategoryController', function($scope, $state, $window,$stateParams, CouponService, IonicPopupService) {

  $scope.catId = $stateParams.catId;
  // console.log('$scope.catId : ' + $scope.catId);
  $scope.goBack = function() {
    $state.go('tab.beneficious');
    // $window.history.back();
  };

  $scope.$on('$ionicView.enter', function(ev) {
    if (ev.targetScope !== $scope)
      return;

    CouponService.getSubCategories($stateParams.catId).then(function(response) {
      $scope.subCategories = [];
      if (response.success = "true") {
          $scope.subCategories = response.data;
          // console.log('$scope.subCategories : ' +  angular.toJson(response.data, ' ') );
      }
    }).catch(function(error) {
        var error = JSON.parse(error);
        IonicPopupService.alert("ERROR!!", error.msg);
        console.log('error : ' + angular.toJson(error, ' '));
    });

  });
  //$scope.goBeneficiousCouponsPage= function(subCatId) {
    // $state.go('tab.beneficiousCoupons');
     // $state.go('tab.beneficiousCoupons', { 'subCatId': subCatId });
  //};
  $scope.gomenuPage = function () {
    $state.go('tab.more');
  };


});
