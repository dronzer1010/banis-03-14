/**
 * @ngInject
 */
function SessionFunction($rootScope, $ionicHistory) {

  var Session = {
    user: null,

    getUser: function() {
      Session.user = localStorage.getItem("user");
      return JSON.parse(Session.user);
    },
    setUser: function(data) {
		console.log(JSON.stringify(data));
      Session.user = JSON.stringify(data);
      localStorage.setItem("user", Session.user);
    },



    isLoggedIn: function() {
      if (!!Session.getUser()) {
        return true;
      } else {
        return false;
      }
    },
    cache: {},

  };
  return Session;
}

angular.module('starter').service('Session', SessionFunction);
