angular.module('starter').controller('directoryController', function($scope, $state, $ionicModal, $window, Session) {



    // for my directoryModal modal
    $ionicModal.fromTemplateUrl('templates/directoryDetail.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(directoryModal) {
      console.log('before assign');
      $scope.directoryModal = directoryModal;
    });
    $scope.openDirectorytModal = function() {
      $scope.directoryModal.show();
    };
    $scope.closeDirectoryModal = function() {
      $scope.directoryModal.hide();
      // $scope.modal.hide();
    };
    // Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.directoryModal.remove();
    });

    $scope.logout = function () {
      $window.localStorage.clear();
      Session.setUser(null);
      $state.go('login');
      $scope.modal.hide();
      $scope.accountModal.hide();
    };

});
