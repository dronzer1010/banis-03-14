angular.module('starter')

.service('IonicPopupService', ['$ionicPopup', function($ionicPopup) {

  this.alert = function(title, message) {
    return $ionicPopup.alert({
      title: title,
      template: message
    });
  };

  this.confirm = function(title, message) {
    return $ionicPopup.confirm({
      title: title,
      template: message
    });
  };

}]);
