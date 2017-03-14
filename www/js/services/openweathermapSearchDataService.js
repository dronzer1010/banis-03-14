// angular.module('starter')
//
// .service('WeatherService', ["$q", "$http", function($q, $http) {
//
//
//
//
// }]);


angular.module('starter')
.service('openweathermapSearchDataService', function () {
        this.getApiBaseUrl = function (_params) {
            return "http://api.openweathermap.org/data/2.5/";
        };

        this.fillDataInObjectByList = function (_object, _params, _list) {
            angular.forEach(_list, function (value, key) {
                if (angular.isDefined(_params[value])) {
                    _object.object[value] = _params[value];
                }
            });
            return _object;
        };

        this.getNew = function (_type, _params) {

            var openweathermapSearchData = {
                object: {
                    appid: _params.appid,
                },
                url: "",
            };

            switch (_type) {
                case "citySearchByName":
                    openweathermapSearchData = this.fillDataInObjectByList(openweathermapSearchData, _params, [
                        'q', 'lang', 'type', "units",
                    ]);
                    openweathermapSearchData.url = this.getApiBaseUrl() + "weather";
                    break;

                case "cityById":
                    openweathermapSearchData = this.fillDataInObjectByList(openweathermapSearchData, _params, [
                        'id', 'lang', "units",
                    ]);
                    openweathermapSearchData.url = this.getApiBaseUrl() + "weather";
                    break;

                case "citiesById":
                    openweathermapSearchData = this.fillDataInObjectByList(openweathermapSearchData, _params, [
                        'id', 'lang', "units",
                    ]);
                    openweathermapSearchData.url = this.getApiBaseUrl() + "group";
                    break;

                case "locationByCoordinates":
                    openweathermapSearchData = this.fillDataInObjectByList(openweathermapSearchData, _params, [
                        'lat', 'lon', 'lang', "units",
                    ]);
                    openweathermapSearchData.url = this.getApiBaseUrl() + "weather";
                    break;

                case "locationByZipcode":
                    openweathermapSearchData = this.fillDataInObjectByList(openweathermapSearchData, _params, [
                        'zip', 'lang', "units",
                    ]);
                    openweathermapSearchData.url = this.getApiBaseUrl() + "weather";
                    break;

                case "cityForecast5SearchByName":
                    openweathermapSearchData = this.fillDataInObjectByList(openweathermapSearchData, _params, [
                        'q', 'lang', 'type', "units",
                    ]);
                    openweathermapSearchData.url = this.getApiBaseUrl() + "forecast";
                    break;

                case "cityForecast5ById":
                    openweathermapSearchData = this.fillDataInObjectByList(openweathermapSearchData, _params, [
                        'id', 'lang', "units",
                    ]);
                    openweathermapSearchData.url = this.getApiBaseUrl() + "forecast";
                    break;

                case "locationForecast5ByCoordinates":
                    openweathermapSearchData = this.fillDataInObjectByList(openweathermapSearchData, _params, [
                        'lat', 'lon', 'lang', "units",
                    ]);
                    openweathermapSearchData.url = this.getApiBaseUrl() + "forecast";
                    break;

            }
            return openweathermapSearchData;
        };
    });
