angular.module('starter').controller('vacacionesController', function($scope, $state, $window, VacacionesService, IonicPopupService, Session, UserService, $ionicModal, $q, $http, $filter) {

  $scope.goBack = function() {
      $state.go('tab.formulario');
    // $window.history.back();
  };
  $scope.gomenuPage = function () {
    $state.go('tab.more');
  };
  
    $ionicModal.fromTemplateUrl('templates/modalDirectManager.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(directManagerModal) {
      $scope.directManagerModal = directManagerModal;
    });
	
    $scope.openDirectManagerModal = function() {
      $scope.directManagerModal.show();
    };
    $scope.closeDirectManagerModal = function() {
      $scope.directManagerModal.hide();
    };	  


  $scope.$on('$ionicView.enter', function(ev) {
    if (ev.targetScope !== $scope)
      return;

   // $scope.getAllDirectManagers = function() {
        //var def = $q.defer();
		
	  var userData = JSON.parse(Session.getUser());
	  var AuthorizationData = userData;		  

        var url = AppSettings.url + 'managers/my';
        headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        };
		console.log(AuthorizationData.data.auth_token);
        $http({
            method: 'GET',
            url: url,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
				'Authorization': AuthorizationData.data.auth_token
            },
            transformRequest: function(obj) {
                var str = [];
                for (var p in obj)
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            }
        }).success(function(body, status, headers, config) {
             //console.log("body : " + JSON.stringify(body));
            //def.resolve(body);
			console.log(body.data);
			$scope.directManagers = body.data;
        }).
        error(function(error, status, headers, config) {
            console.log("Error : " + JSON.stringify(error));
            //def.reject(JSON.stringify(error));
        });

        //return def.promise;
		//console.log(def.promise.data);
		//$scope.directManagers = def.promise.data;
    //};


  });



  var userData = JSON.parse(Session.getUser());
  var AuthorizationData = userData;
  
	UserService.getUser(userData.data.id).then(function(response) {
	  $scope.userInfo = [];
	  
	  if (response.success = "true") {
		  $scope.userInfo = response.data;
		  //console.log(response.data);
		 $scope.immediateSupervisorId = $scope.userInfo.directManager._id;
		 $scope.immediateSupervisor = $scope.userInfo.directManager.name;
	  }
	}).catch(function(error) {
		var error = JSON.parse(error);
		IonicPopupService.alert("ERROR!!", error);
		//console.log('error : ' + angular.toJson(error, ' '));
	});  
  
  // console.log('$scope.userData : ' + angular.toJson(AuthorizationData.data.auth_token , ' '));

  $scope.submit = function (incioDateValue,finDateValue,regresoDateValue,comentariosData) {
     /*
	 console.log('$scope.incioDateValue : ' + $scope.incioDateValue);
     console.log('$scope.finDateValue : ' + $scope.finDateValue);
     console.log('$scope.regresoDateValue : ' + $scope.regresoDateValue);
     console.log('$scope.selectedName : ' + $scope.reportsToId);
     console.log('$scope.description : ' + $scope.comentariosData);
	 */
	//console.log($scope);
	
	
		// Calculate days between dates
		var startDate = new Date(incioDateValue);
		var endDate = new Date(finDateValue);
		var millisecondsPerDay = 86400 * 1000; // Day in milliseconds
		startDate.setHours(0,0,0,1);  // Start just after midnight
		endDate.setHours(23,59,59,999);  // End just before midnight
		var diff = endDate - startDate;  // Milliseconds between datetime objects    
		var days = Math.ceil(diff / millisecondsPerDay);
		
		// Subtract two weekend days for every week in between
		var weeks = Math.floor(days / 7);
		days = days - (weeks * 2);
	
		// Handle special cases
		var startDay = startDate.getDay();
		var endDay = endDate.getDay();
		
		// Remove weekend not previously removed.   
		if (startDay - endDay > 1)         
			days = days - 2;      
		
		// Remove start day if span starts on Sunday but ends before Saturday
		if (startDay == 0 && endDay != 6) {
			days = days - 1;  
		}
				
		// Remove end day if span ends on Saturday but starts after Sunday
		if (endDay == 6 && startDay != 0) {
			days = days - 1;
		}
		//console.log($scope.userInfo.vacationPending);
		
	  if(days <= $scope.userInfo.vacationPending){ 
			  
			var leaveObj = {
				startsOn: incioDateValue,
				endsOn: finDateValue,
				joinsOn: regresoDateValue,
				supervisor: $scope.immediateSupervisorId,
				vacationType: 'vacation',
				Authorization : AuthorizationData.data.auth_token
			}
			//console.log('leaveObj : ' + angular.toJson(leaveObj , ' '));
			/**/
			VacacionesService.applyForLeave(leaveObj).then(function(response) {
				if (response.success = "true") {
					  var IonicPopup = IonicPopupService.alert("Apply for leave successfully...");
					   IonicPopup.then(function(res) {
						 $scope.goBack();			 
					   });			  
				} else {
					IonicPopupService.alert("ERROR!!", 'Error at apply for leave.');
				}
			}).catch(function(error) {
				var error = JSON.parse(error);
				IonicPopupService.alert("ERROR!!", 'Error at apply for leave.');
				//console.log('error : ' + angular.toJson(error, ' '));
			});
	  
	  
	  }else{ 
		  var IonicPopup = IonicPopupService.alert("Your number of vacations days are more than avaialbe days.");
	  }	
	
	
  };

  $scope.user = AuthorizationData.data.userType;
  console.log('$scope.user : ' + $scope.user);
  
  $scope.changeManager = function(id,title){
	  //console.log(id+"--"+title);
	  $scope.immediateSupervisor = title;
	  $scope.immediateSupervisorId = id;
	  $scope.closeDirectManagerModal();
  }
});
