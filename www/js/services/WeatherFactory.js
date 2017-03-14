// angular.module('starter')
//
// .service('WeatherService', ["$q", "$http", function($q, $http) {
//
//
//
//
// }]);


angular.module('starter')

.factory('WeatherFactory', function($http, $q) {
    return {

      getWeather: function(searchText) {
        // console.log('searchText at factory : ' + searchText);

        // var def = $q.defer();
        var weather = {},
            i = 0;
            $http.jsonp('http://api.openweathermap.org/data/2.5/forecast/daily?q='+searchText+'&mode=json&units=metric&cnt=7&callback=JSON_CALLBACK&APPID=f9dbd911bc01df1d9ce563b2ba4d3209').success(function(data) {

              // console.log('weather data : ' + angular.toJson(data , ' '));
            if (data) {
            	if (data.list) {
              	weather.days = [];
              	angular.forEach(data.list, function(value, key) {
                    weather.days.push({
                    	"number": i,
                      "date": value.dt,
                      "city":data.city.name,
                    	"temp": {
                      	"current": value.temp.day,
                        "min": value.temp.min,
                        "max": value.temp.max
                      },
                      "wind": value.speed,
                      "sky": value.weather[0].main
                    });
                    i++;
                  });
              }
              weather.city = data.city.name;
            }
            // def.resolve(weather.days);
        });
        // return def.promise;
				return weather;
      }
    };
});
