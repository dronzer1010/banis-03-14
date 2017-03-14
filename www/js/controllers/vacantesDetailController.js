angular.module('starter').controller('vacantesDetailController', function($scope, $state, $window, $stateParams,VacancyService, IonicPopupService, $http, Session) {

	$scope.showApplyBtn = false;
	$scope.showApplyContent = false;
	$scope.showSubmitBtn = false;
	$scope.showAppliedBtn = false;
	$scope.showSuccessMsg = false;
	
	var userData  = JSON.parse(Session.getUser());
	var formdata = new FormData();
	$scope.getTheFiles = function ($files) {
		console.log($files[0]);
		formdata.append('file', $files[0]);
		/*
		angular.forEach($files, function (value, key) {
			console.log(value);
			formdata.append(key, value);
		});
		*/
	};  
  
  $scope.goBack = function() {
    $state.go('tab.vacantesSubMenu');
    // $window.history.back();
  };
  
  $scope.vacancyId = $stateParams.vacancyId;
  //console.log(JSON.stringify($stateParams));
  
  $scope.$on('$ionicView.enter', function(ev) {
    if (ev.targetScope !== $scope)
      return;

    VacancyService.getVacancy($scope.vacancyId).then(function(response) {
      $scope.vacancy = [];
      if (response.success = "true") {
        // console.log('yes true');
          $scope.vacancy = response.data;
		  $scope.showApplyBtn = true;
          //console.log(response.data);
      }
    }).catch(function(error) {
        var error = JSON.parse(error);
        IonicPopupService.alert("ERROR!!", error);
        console.log('error : ' + angular.toJson(error, ' '));
    });

  });  

  $scope.gomenuPage = function () {
    $state.go('tab.more');
  };

  $scope.view_pdf = function (url) {
    var ref = window.open(url, '_blank', 'location=no');
}

	$scope.uploadFiles = function () {
		/**/
		var request = {
			method: 'POST',
			url: 'http://banistmo-backend.herokuapp.com/api/upload/file',
			data: formdata,
			headers: {
				'Content-Type': undefined
			}
		};
		
	
		// SEND THE FILES.
		$http(request)
			.success(function (d) {
				console.log(d);
				if(d.success){
					$scope.showApplyContent = false;
					$scope.showSubmitBtn = true;
					$scope.cvUrl = d.path;
				}else{
						
				}
			})
			.error(function () {
				//IonicPopupService.alert("Success", "User Login successfully.");
			});
			
	}
	
	$scope.apply = function(){
		$scope.showApplyBtn = false;
		$scope.showApplyContent = true;
	}
	
	$scope.submitVacancy = function(){
		console.log($scope.cvUrl);
		var vacancyObj = {auth_token:userData.data.auth_token,id:$scope.vacancyId,documents:$scope.cvUrl};
		VacancyService.apply(vacancyObj).then(function(response) {
			if (response.success = "true") {
                var respData = JSON.parse(response);
					console.log(response);
					$scope.showSubmitBtn = false;
					$scope.showSuccessMsg = true;		
            } else {
               		//IonicPopupService.alert("Success", "User Login successfully.");
            }			
			
		});
	}
});
