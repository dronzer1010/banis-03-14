angular.module('starter')

.service('VacancyService', ["$q", "$http", function($q, $http) {

    this.getAllVacancies = function() {
        var def = $q.defer();

        var url = AppSettings.url + 'vacancies';
        headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        };

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

        return def.promise;
    };
	
    this.getVacancy = function(vacancyID) {
		//console.log('servcie:'+vacancyID);
        var def = $q.defer();

        var url = AppSettings.url + 'vacancies/'+vacancyID;
        headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        };

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

        return def.promise;
    };	
	
    this.apply = function(vacancyObj) {
        var def = $q.defer();
		console.log(vacancyObj.documents);
        var url = AppSettings.url + 'job-request';
        $http({
            method: 'POST',
            url: url,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
				'Authorization': vacancyObj.auth_token
            },
            transformRequest: function(obj) {
                var str = [];
                for (var p in obj)
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            },
            data: {
				vacancy : vacancyObj.id,
				documents : [vacancyObj.documents]
            }
        }).success(function(body, status, headers, config) {
            console.log("login body : " + JSON.stringify(body));
            def.resolve(JSON.stringify(body));
        }).
        error(function(error, status, headers, config) {
            console.log("login Error : " + JSON.stringify(error));
            def.reject(JSON.stringify(error));
        });

        return def.promise;
    };	

}]);
