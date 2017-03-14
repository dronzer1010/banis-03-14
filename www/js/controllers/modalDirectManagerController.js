angular.module('starter').controller('modalDirectManagerController', function($scope, $state, $window, VacancyService, IonicPopupService) {
 
	$scope.directManagers = "";
  $scope.$on('$ionicView.enter', function(ev) {
    if (ev.targetScope !== $scope)
      return;
	
    this.getAllDirectManagers = function() {
        var def = $q.defer();

        var url = AppSettings.url + 'vacancies';
        headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        };
		console.log(url);
        $http({
            method: 'GET',
            url: url,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            transformRequest: function(obj) {
                var str = [];
                for (var p in obj)
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            }
        }).success(function(body, status, headers, config) {
             //console.log("body : " + JSON.stringify(body));
            def.resolve(body);
        }).
        error(function(error, status, headers, config) {
            console.log("Error : " + JSON.stringify(error));
            def.reject(JSON.stringify(error));
        });

        //return def.promise;
		$scope.directManagers = def.promise.data;
    };	
	

  });  

  $scope.goDetailPage = function (vacancyId) {
    $state.go('tab.vacantesDetail',{'vacancyId':vacancyId});
  };




});
