angular.module('starter').controller('ghContigoController', function($scope, $state, $window,IonicPopupService) {



  $scope.goBack = function() {
    $state.go('tab.more');
    // $window.history.back();
  };

$scope.gomenuPage = function () {
  $state.go('tab.more');
};

$scope.CallNumber = function(){
    var number = '8007744' ;
    window.plugins.CallNumber.callNumber(function(){
     //success logic goes here
     console.log('calling successfully');
    }, function(){
     //error logic goes here
     console.log('error at connect call');
    }, number)
};


/*
$scope.CallNumber = function(){
    var number = '8007744' ; 
    window.plugins.CallNumber.callNumber(function(){
     //success logic goes here
     console.log('calling successfully');
    }, function(){
     //error logic goes here
     console.log('error at connect call');
    }, number)
  };
*/
});
