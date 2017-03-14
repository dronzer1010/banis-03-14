angular.module('starter')

.service('NoticiasService', ["$q", "$http", function($q, $http) {



    this.getAllCirculars = function() {
        var def = $q.defer();

        var url = AppSettings.url + 'circulars';
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

    this.getAllNotices = function() {
        var def = $q.defer();

        var url = AppSettings.url + 'notices';
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

    this.getAllDetail = function(noticisaId) {
        var def = $q.defer();

        var url = AppSettings.url + 'notices/'+noticisaId;
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
}]);
