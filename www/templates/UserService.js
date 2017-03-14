angular.module('starter')

.service('UserService', ["$q", "$http", function($q, $http) {

    this.login = function(loginObj) {
        var def = $q.defer();

        var url = AppSettings.url + 'users/login';
        headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        };

        $http({
            method: 'POST',
            url: url,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            transformRequest: function(obj) {
                var str = [];
                for (var p in obj)
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            },
            data: {
                username: loginObj.userName,
                password: loginObj.password
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
