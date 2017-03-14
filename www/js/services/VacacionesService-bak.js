angular.module('starter')

.service('VacacionesService', ["$q", "$http","Session", function($q, $http, Session) {

    this.getAllUsers = function() {
        var def = $q.defer();

        var url = AppSettings.url + 'users';
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
            // console.log("body : " + JSON.stringify(body));
            def.resolve(body);
        }).
        error(function(error, status, headers, config) {
            console.log("Error : " + JSON.stringify(error));
            def.reject(JSON.stringify(error));
        });

        return def.promise;
    };

    this.applyForLeave = function(leaveObj) {
        var def = $q.defer();
        console.log('leaveObj : ' + leaveObj.Authorization);
        // console.log('Session.getUser().data.auth_token : ' + JSON.parse(Session.getUser().data));
        var url = AppSettings.url + 'vacationreq';
        headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': leaveObj.Authorization
        };

        $http({
            method: 'POST',
            url: url,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': leaveObj.Authorization
            },
            transformRequest: function(obj) {
                var str = [];
                for (var p in obj)
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            },
            data: {
                startsOn: leaveObj.startsOn,
                endsOn: leaveObj.endsOn,
                joinsOn: leaveObj.joinsOn,
                reportsTo:leaveObj.reportsTo,
                vacationType:leaveObj.vacationType
            }
        }).success(function(body, status, headers, config) {
            console.log("leave body : " + JSON.stringify(body));
            def.resolve(JSON.stringify(body));
        }).
        error(function(error, status, headers, config) {
            console.log("leave Error : " + JSON.stringify(error));
            def.reject(JSON.stringify(error));
        });

        return def.promise;
    };


}]);
