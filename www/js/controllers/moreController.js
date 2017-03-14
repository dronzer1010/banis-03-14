angular.module('starter').controller('moreController', function($scope, $state, $window, $ionicModal, Session, UserService) {

  $scope.userData = Session.getUser();
   console.log('$scope.userData : ' + $scope.userData);

  $scope.goBack = function() {
    $window.history.back();
  };
$scope.goFormacionSubMenu = function () {
  $state.go('tab.formacionSubmenu');
  $scope.modal.hide();
};
$scope.goBeneficiousSubmenu = function () {
  $state.go('tab.beneficious');
  $scope.modal.hide();
};

$scope.goNoticiasPage = function () {
  $state.go('tab.noticiasPage');
  $scope.modal.hide();
};

$scope.goContactosPage = function () {
  $state.go('tab.contactos');
  $scope.modal.hide();
};

$scope.goCalendarioPage = function () {
  $state.go('tab.calendario');
  $scope.modal.hide();
};
$scope.goFormularioPage = function () {
  $state.go('tab.formulario');
  $scope.modal.hide();
};

$scope.goWeatherPage = function () {
  $state.go('tab.weather');
  $scope.modal.hide();
};

$scope.goCuentaPage = function () {
  //$state.go('tab.cuenta');
  $scope.modal.hide();
};
$scope.goReconocimientoPage = function () {
  $state.go('tab.reconocimiento');
  $scope.modal.hide();
};
// $scope.goGhContigoPage = function () {
//   $state.go('tab.ghContigo');
//   $scope.modal.hide();
// };
$scope.goCalendarioPage = function () {
  $state.go('tab.calendario');
  $scope.modal.hide();
};
$scope.goDirectoryPage = function () {
  $state.go('tab.directory');
  $scope.modal.hide();
};
$scope.goVacantesPage = function () {
  $state.go('tab.vacantes');
  $scope.modal.hide();
};
$scope.goPreguntasPage = function () {
  $state.go('tab.preguntasFrecuentes');
  $scope.modal.hide();
};
$scope.goSegmentostaffaddPage = function () {
  $state.go('tab.Segmentostaffadd');
  $scope.modal.hide();
};
$scope.goCalendariodePage = function () {
  $state.go('tab.Calendariode');
  $scope.modal.hide();
};
// $scope.goBeneficiosPage = function () {
//   $state.go('tab.Beneficios');
//   $scope.modal.hide();
// };
$scope.goVacantesPage = function () {
  $state.go('tab.vacantes');
  $scope.modal.hide();
};

$scope.goVacationPage = function () {
  $state.go('tab.vacaciones');
  $scope.modal.hide();
};




$scope.logout = function () {
  $window.localStorage.clear();
  Session.setUser(null);
  $state.go('login');
  $scope.modal.hide();
  $scope.accountModal.hide();
};

////for openmode :
////for open modal :
$ionicModal.fromTemplateUrl('templates/modal.html', {
  scope: $scope,
  animation: 'slide-in-up'
}).then(function(modal) {
  console.log('before assign');
  $scope.modal = modal;
});
$scope.openModal = function() {
  $scope.modal.show();
};
$scope.closeModal = function() {
  $scope.modal.hide();
};
// Cleanup the modal when we're done with it!
$scope.$on('$destroy', function() {
  $scope.modal.remove();
});

// for my account modal
$ionicModal.fromTemplateUrl('templates/account.html', {
  scope: $scope,
  animation: 'slide-in-up'
}).then(function(accountModal) {
  console.log('before assign');
  $scope.accountModal = accountModal;
});
$scope.openAccountModal = function() {
	//console.log('$scope.userData : ' + $scope.userData);
	//console.log('$scope.userData : ' + $scope.userData.data.id);
	var obj = JSON.parse(Session.getUser());
	
    UserService.getUser(obj.data.id).then(function(response) {
      $scope.userInfo = [];
      if (response.success = "true") {
          $scope.userInfo = response.data;
		  console.log($scope.userInfo);
      }
    }).catch(function(error) {
        var error = JSON.parse(error);
        IonicPopupService.alert("ERROR!!", error.msg);
        //console.log('error : ' + angular.toJson(error, ' '));
    });
	
  $scope.accountModal.show();
};
$scope.closeAccountModal = function() {
  $scope.accountModal.hide();
  $scope.modal.hide();
};
// Cleanup the modal when we're done with it!
$scope.$on('$destroy', function() {
  $scope.accountModal.remove();
});

});
