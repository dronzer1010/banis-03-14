angular.module('starter').controller('loginController', function($scope, $state, $ionicModal, $timeout, UserService, IonicPopupService, Session, $cordovaDevice) {

    // Form data for the login modal
    $scope.loginData = {};

    $scope.userData = Session.getUser();
    console.log('$scope.userData..... : ' + $scope.userData);
    // Perform the login action when the user submits the login form
    $scope.Login = function() {

        var loginObj = {
            userName: $scope.loginData.employId,
            password: $scope.loginData.password,
            platformName:AppSettings.platform,
            deviceToken:AppSettings.deviceToken
        }
        console.log('loginObj : ' + angular.toJson(loginObj , ' '));

        UserService.login(loginObj).then(function(response) {
            if (response.success = "true") {
                var respData = JSON.parse(response);
                if (!!respData.data.topic) {
                  for (var i = 0; i < respData.data.topic.length; i++) {
                    console.log('respData.data.topic[i] : ' + respData.data.topic[i]);
                    FCMPlugin.subscribeToTopic(respData.data.topic[i]);
                  }
                }

              Session.setUser(response);
              $scope.userData = Session.getUser();
              // console.log('$scope.userData..... : ' + $scope.userData);
                $state.go('tab.more');
            } else {
                IonicPopupService.alert("Success", "User Login successfully.");
            }
        }).catch(function(error) {
            var error = JSON.parse(error);
            IonicPopupService.alert("ERROR!!", error.msg);
            console.log('error : ' + angular.toJson(error, ' '));
        });

    };

    // Create the forgot password  modal that we will use later
    $ionicModal.fromTemplateUrl('templates/forgotPassword.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });
    $scope.hideBackButton = true;
    // Triggered in the forgot password modal to close it
    $scope.closeForgotPassword = function() {
        $scope.modal.hide();
    };

    // Open the login modal
    $scope.forgotPassword = function() {
        $scope.modal.show();
        $scope.$apply();
    };

    /////this code is for forgot password page:
    $scope.resetPassword = function() {
        console.log('yes this page is calling...');
        // $scope.closeForgotPassword();
    };

});
