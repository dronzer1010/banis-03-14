angular.module('starter')

.service('CouponService', ["$q", "$http", function($q, $http) {

    this.getAllCategories = function() {
        var def = $q.defer();

        var url = AppSettings.url + 'coupons/categories';
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

    this.getSubCategories = function(catId) {
        var def = $q.defer();

        var url = AppSettings.url + 'coupons/subcategories/'+catId;
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
            // console.log(" body : " + JSON.stringify(body));
            // def.resolve(JSON.stringify(body));
            def.resolve(body);
        }).
        error(function(error, status, headers, config) {
            console.log("Error : " + JSON.stringify(error));
            def.reject(JSON.stringify(error));
        });

        return def.promise;
    };

    this.getAllCoupens = function(catId) {
        var def = $q.defer();

        var url = AppSettings.url + '/coupons';
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
            // console.log(" body : " + JSON.stringify(body));
            def.resolve(body);
        }).
        error(function(error, status, headers, config) {
            console.log("Error : " + JSON.stringify(error));
            def.reject(JSON.stringify(error));
        });

        return def.promise;
    };


}]);
