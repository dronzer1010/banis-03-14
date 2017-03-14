
angular.module('starter')

.directive('weatherDay', function() {
    return {
        restrict: 'E', replace: true,
        scope: {
            day: '='
        },
        controller: function($scope) {
            $scope.getDate = function() {
            	var date = new Date();
              date.setDate(date.getDate() + $scope.day.number);
              return date;
            }
        },
        template: '<div class="col col-20" style="margin:2px 2px 2px 2px;background-color: #305b9e;border-radius: 8px;color: white;">{{ getDate() | date: "EEE d"}}<h5 style="color: white;">{{ day.temp.current | formatTemp}}</h5 style="color: white;">wind: {{day.wind }}<br/>  <weather-icon sky="{{ day.sky }}"></weather-icon></div>'
    };
});
