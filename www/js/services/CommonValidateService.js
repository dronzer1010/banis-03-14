angular.module('starter')

.service('CommonValidateService', ['$http', 'Session', 'IonicPopupService', function($http, Session, IonicPopupService) {


  this.validateEmpty = function(value, failTitle, failMessage) {
    if (!!value && value !== '') {
      return true;
    } else {
      IonicPopupService.alert(failTitle, failMessage);
      return false;
    }
  };

  this.validateEmail = function(email, failTitle, failMessage) {
    console.log('email: ' + email);
    var re = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if (re.test(email) !== true) {
      console.log('its false');
      IonicPopupService.alert(failTitle, failMessage);
      return false;
    } else {
      console.log('its true');
      return true;
    }

  };

  this.validateYoutubeLink = function(embedlink, failTitle, failMessage) {
    console.log('embedlink: ' + embedlink);
    var re = new RegExp(
      /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?(?=.*v=((\w|-){11}))(?:\S+)?$/
    );
    if (re.test(embedlink) !== true) {
      console.log('its false');
      IonicPopupService.alert(failTitle, failMessage);
      return false;
    } else {
      console.log('its true');
      return true;
    }

  };

  this.validateLink = function(linkURL, failTitle, failMessage) {
    console.log('linkURL: ' + linkURL);
    var re = new RegExp(
      /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/
    );
    if (re.test(linkURL) !== true) {
      console.log('its false');
      IonicPopupService.alert(failTitle, failMessage);
      return false;
    } else {
      console.log('its true');
      return true;
    }

  };

  this.compairePassword = function(password, confirmPassword, failTitle, failMessage) {
    if (password != confirmPassword) {
      console.log('its false');
      IonicPopupService.alert(failTitle, failMessage);
      return false;
    } else if (!!password && !!confirmPassword) {
      console.log('yes true');
      return true;
    }
  };

}]);
