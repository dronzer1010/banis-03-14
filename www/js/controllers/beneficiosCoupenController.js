angular.module('starter').controller('beneficiosCoupenController', function($scope, $state, $window, CouponService, $stateParams, IonicPopupService) {

  $scope.catId = $stateParams.catId;
  $scope.catName = $stateParams.catName;
  console.log('catgegory name'+ JSON.stringify($stateParams));
  // console.log('$scope.subCatId.. : ' + $scope.subCatId);
  $scope.goBack = function() {
    $state.go('tab.beneficious');
    // $state.go('tab.beneficious');

    // $window.history.back();
  };
  // $scope.subCatId = '58747bd014c45700115912ab';

  $scope.$on('$ionicView.enter', function(ev) {
    if (ev.targetScope !== $scope)
      return;

    CouponService.getAllCoupens().then(function(response) {
      // console.log('coupens response : ' + angular.toJson(response.data, ' '));
      $scope.coupensList = [];
      // if (response.success = "true") {
      //   for (var i = 0;  i < response.data.length; i++) {
      //     if (response.data[i].subcategory === $stateParams.subCatId+'') {
      //       $scope.coupensList.push(response.data[i]);
      //     }
      //   }
      //
      //
      // }
      if (response.success = "true") {
        for (var i = 0;  i < response.data.length; i++) {
          if (response.data[i].category === $scope.catId+'') {
            $scope.coupensList.push(response.data[i]);
          }
        }


      }
    }).catch(function(error) {
        var error = JSON.parse(error);
        IonicPopupService.alert("ERROR!!", error.msg);
        console.log('error : ' + angular.toJson(error, ' '));
    });

  });

  $scope.goDetailPage = function(data) {
    $state.go('tab.beneficiosDetailPage', {
      'coupen_obj': JSON.stringify(data)
    });
  };


  $scope.gomenuPage = function () {
    $state.go('tab.more');
  };



});
