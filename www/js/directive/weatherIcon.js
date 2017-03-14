// angular.module('starter')
//
// .service('WeatherService', ["$q", "$http", function($q, $http) {
//
//
//
//
// }]);


angular.module('starter')

.directive('weatherIcon', function() {
    return {
        restrict: 'E', replace: true,
        scope: {
            sky: '@'
        },
        controller: function($scope) {
            $scope.imgurl = function() {
                var baseUrl = 'https://ssl.gstatic.com/onebox/weather/128/';
                if ($scope.sky === "Clear") {
                    return baseUrl + 'sunny.png';
                } else if ($scope.sky === 90) {
                   return baseUrl + 'partly_cloudy.png';
                } else if ($scope.sky === "Rain") {
                    return baseUrl + 'cloudy.png';
                }
            };
        },
        template: '<div><img ng-src="{{ imgurl() }}" width="25% !important"></div>'
    };
});
