// angular.module('starter')
//
// .service('WeatherService', ["$q", "$http", function($q, $http) {
//
//
//
//
// }]);


angular.module('starter')

.factory('WeatherService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var cities = [
    {
      "id": 1,
      "name": "Moscow",
      "country": "RU",
      "current": {
        "dt": 1452495207,
        "main": {
          "temp": 275.18,
          "temp_min": 274.407,
          "temp_max": 275.18,
          "humidity": 75
        },
        "weather": {
          "main": "Clouds",
          "icon": "wi-cloud"
        },
        "clouds": {
          "all": 32
        },
        "wind": {
          "speed": 2.86,
          "deg": 93.0053
        },
        "snow": {}
      },
      "list": [
        {
          "dt": 1452495207,
          "main": {
            "temp": 274.76,
            "temp_min": 270.596,
            "temp_max": 274.76,
            "humidity": 65
          },
          "weather": [
            {
              "main": "Clouds",
              "icon": "wi-cloud"
            }
          ],
          "clouds": {
            "all": 32
          },
          "wind": {
            "speed": 2.86,
            "deg": 93.0053
          },
          "snow": {}
        },
        {
          "dt": 1452668007,
          "main": {
            "temp": 275.18,
            "temp_min": 274.407,
            "temp_max": 275.18,
            "humidity": 75
          },
          "weather": [
            {
              "main": "Clouds",
              "icon": "wi-cloud"
            }
          ],
          "clouds": {
            "all": 68
          },
          "wind": {
            "speed": 3.2,
            "deg": 101.502
          },
          "snow": {}
        },
        {
          "dt": 1452754407,
          "main": {
            "temp": 275.94,
            "temp_min": 275.553,
            "temp_max": 275.94,
            "humidity": 82
          },
          "weather": [
            {
              "main": "Clear",
              "icon": "wi-day-sunny"
            }
          ],
          "clouds": {
            "all": 76
          },
          "wind": {
            "speed": 3.76,
            "deg": 111.001
          },
          "snow": {
            "3h": 0.0025
          }
        },
        {
          "dt": 1452840807,
          "main": {
            "temp": 277.757,
            "temp_min": 277.757,
            "temp_max": 277.757,
            "humidity": 73
          },
          "weather": [
            {
              "id": 800,
              "main": "Sunny",
              "icon": "wi-day-sunny"
            }
          ],
          "clouds": {
            "all": 76
          },
          "wind": {
            "speed": 4.51,
            "deg": 104.502
          },
          "snow": {
            "3h": 0.005
          }
        },
        {
          "dt": 1452927207,
          "main": {
            "temp": 277.156,
            "temp_min": 277.156,
            "temp_max": 277.156,
            "humidity": 76
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "icon": "wi-day-cloudy"
            }
          ],
          "clouds": {
            "all": 76
          },
          "wind": {
            "speed": 5.24,
            "deg": 105
          },
          "snow": {
            "3h": 0.0175
          }
        }
      ]
    },
    {
      "id": 2,
      "name": "Tokyo",
      "country": "JP",
      "current": {
        "dt": 1452495207,
        "main": {
          "temp": 275.18,
          "temp_min": 274.407,
          "temp_max": 275.18,
          "humidity": 75
        },
        "weather": {
          "main": "Sunny",
          "icon": "wi-day-cloudy"
        },
        "clouds": {
          "all": 32
        },
        "wind": {
          "speed": 2.86,
          "deg": 93.0053
        },
        "snow": {}
      },
      "list": [
        {
          "dt": 1452495207,
          "main": {
            "temp": 277.76,
            "temp_min": 270.596,
            "temp_max": 277.76,
            "humidity": 65
          },
          "weather": [
            {
              "main": "Clouds",
              "icon": "wi-cloud"
            }
          ],
          "clouds": {
            "all": 32
          },
          "wind": {
            "speed": 2.86,
            "deg": 93.0053
          },
          "snow": {}
        },
        {
          "dt": 1452668007,
          "main": {
            "temp": 275.18,
            "temp_min": 274.407,
            "temp_max": 275.18,
            "humidity": 75
          },
          "weather": [
            {
              "main": "Clouds",
              "icon": "wi-cloud"
            }
          ],
          "clouds": {
            "all": 68
          },
          "wind": {
            "speed": 3.2,
            "deg": 101.502
          },
          "snow": {}
        },
        {
          "dt": 1452754407,
          "main": {
            "temp": 275.94,
            "temp_min": 275.553,
            "temp_max": 275.94,
            "humidity": 82
          },
          "weather": [
            {
              "main": "Clear",
              "icon": "wi-day-sunny"
            }
          ],
          "clouds": {
            "all": 76
          },
          "wind": {
            "speed": 3.76,
            "deg": 111.001
          },
          "snow": {
            "3h": 0.0025
          }
        },
        {
          "dt": 1452840807,
          "main": {
            "temp": 277.757,
            "temp_min": 277.757,
            "temp_max": 277.757,
            "humidity": 73
          },
          "weather": [
            {
              "id": 800,
              "main": "Sunny",
              "icon": "wi-day-sunny"
            }
          ],
          "clouds": {
            "all": 76
          },
          "wind": {
            "speed": 4.51,
            "deg": 104.502
          },
          "snow": {
            "3h": 0.005
          }
        },
        {
          "dt": 1452927207,
          "main": {
            "temp": 277.156,
            "temp_min": 277.156,
            "temp_max": 277.156,
            "humidity": 76
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "icon": "wi-day-cloudy"
            }
          ],
          "clouds": {
            "all": 76
          },
          "wind": {
            "speed": 5.24,
            "deg": 105
          },
          "snow": {
            "3h": 0.0175
          }
        }
      ]
    },
    {
      "id": 3,
      "name": "Seoul",
      "country": "KR",
      "current": {
        "dt": 1452495207,
        "main": {
          "temp": 277.18,
          "temp_min": 274.407,
          "temp_max": 277.18,
          "humidity": 75
        },
        "weather": {
          "main": "Clouds",
          "icon": "wi-cloud"
        },
        "clouds": {
          "all": 32
        },
        "wind": {
          "speed": 2.86,
          "deg": 93.0053
        },
        "snow": {}
      },
      "list": [
        {
          "dt": 1452495207,
          "main": {
            "temp": 274.76,
            "temp_min": 270.596,
            "temp_max": 274.76,
            "humidity": 65
          },
          "weather": [
            {
              "main": "Clouds",
              "icon": "wi-cloud"
            }
          ],
          "clouds": {
            "all": 32
          },
          "wind": {
            "speed": 2.86,
            "deg": 93.0053
          },
          "snow": {}
        },
        {
          "dt": 1452668007,
          "main": {
            "temp": 275.18,
            "temp_min": 274.407,
            "temp_max": 275.18,
            "humidity": 75
          },
          "weather": [
            {
              "main": "Clouds",
              "icon": "wi-cloud"
            }
          ],
          "clouds": {
            "all": 68
          },
          "wind": {
            "speed": 3.2,
            "deg": 101.502
          },
          "snow": {}
        },
        {
          "dt": 1452754407,
          "main": {
            "temp": 275.94,
            "temp_min": 275.553,
            "temp_max": 275.94,
            "humidity": 82
          },
          "weather": [
            {
              "main": "Clear",
              "icon": "wi-day-sunny"
            }
          ],
          "clouds": {
            "all": 76
          },
          "wind": {
            "speed": 3.76,
            "deg": 111.001
          },
          "snow": {
            "3h": 0.0025
          }
        },
        {
          "dt": 1452840807,
          "main": {
            "temp": 277.757,
            "temp_min": 277.757,
            "temp_max": 277.757,
            "humidity": 73
          },
          "weather": [
            {
              "id": 800,
              "main": "Sunny",
              "icon": "wi-day-sunny"
            }
          ],
          "clouds": {
            "all": 76
          },
          "wind": {
            "speed": 4.51,
            "deg": 104.502
          },
          "snow": {
            "3h": 0.005
          }
        },
        {
          "dt": 1452927207,
          "main": {
            "temp": 277.156,
            "temp_min": 277.156,
            "temp_max": 277.156,
            "humidity": 76
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "icon": "wi-day-cloudy"
            }
          ],
          "clouds": {
            "all": 76
          },
          "wind": {
            "speed": 5.24,
            "deg": 105
          },
          "snow": {
            "3h": 0.0175
          }
        }
      ]
    },
    {
      "id": 4,
      "name": "NewYork",
      "country": "US",
      "current": {
        "dt": 1452495207,
        "main": {
          "temp": 277.18,
          "temp_min": 277274.407,
          "temp_max": 277.18,
          "humidity": 75
        },
        "weather": {
          "main": "Clouds",
          "icon": "wi-cloud"
        },
        "clouds": {
          "all": 32
        },
        "wind": {
          "speed": 2.86,
          "deg": 93.0053
        },
        "snow": {}
      },
      "list": [
        {
          "dt": 1452495207,
          "main": {
            "temp": 274.76,
            "temp_min": 270.596,
            "temp_max": 274.76,
            "humidity": 65
          },
          "weather": [
            {
              "main": "Clouds",
              "icon": "wi-cloud"
            }
          ],
          "clouds": {
            "all": 32
          },
          "wind": {
            "speed": 2.86,
            "deg": 93.0053
          },
          "snow": {}
        },
        {
          "dt": 1452668007,
          "main": {
            "temp": 275.18,
            "temp_min": 274.407,
            "temp_max": 275.18,
            "humidity": 75
          },
          "weather": [
            {
              "main": "Clouds",
              "icon": "wi-cloud"
            }
          ],
          "clouds": {
            "all": 68
          },
          "wind": {
            "speed": 3.2,
            "deg": 101.502
          },
          "snow": {}
        },
        {
          "dt": 1452754407,
          "main": {
            "temp": 275.94,
            "temp_min": 275.553,
            "temp_max": 275.94,
            "humidity": 82
          },
          "weather": [
            {
              "main": "Clear",
              "icon": "wi-day-sunny"
            }
          ],
          "clouds": {
            "all": 76
          },
          "wind": {
            "speed": 3.76,
            "deg": 111.001
          },
          "snow": {
            "3h": 0.0025
          }
        },
        {
          "dt": 1452840807,
          "main": {
            "temp": 277.757,
            "temp_min": 277.757,
            "temp_max": 277.757,
            "humidity": 73
          },
          "weather": [
            {
              "id": 800,
              "main": "Sunny",
              "icon": "wi-day-sunny"
            }
          ],
          "clouds": {
            "all": 76
          },
          "wind": {
            "speed": 4.51,
            "deg": 104.502
          },
          "snow": {
            "3h": 0.005
          }
        },
        {
          "dt": 1452927207,
          "main": {
            "temp": 277.156,
            "temp_min": 277.156,
            "temp_max": 277.156,
            "humidity": 76
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "icon": "wi-day-cloudy"
            }
          ],
          "clouds": {
            "all": 76
          },
          "wind": {
            "speed": 5.24,
            "deg": 105
          },
          "snow": {
            "3h": 0.0175
          }
        }
      ]
    },
    {
      "id": 5,
      "name": "Paris",
      "country": "FR",
      "current": {
        "dt": 1452495207,
        "main": {
          "temp": 276.18,
          "temp_min": 277274.407,
          "temp_max": 276.18,
          "humidity": 75
        },
        "weather": {
          "main": "Clouds",
          "icon": "wi-cloud"
        },
        "clouds": {
          "all": 32
        },
        "wind": {
          "speed": 2.86,
          "deg": 93.0053
        },
        "snow": {}
      },
      "list": [
        {
          "dt": 1452495207,
          "main": {
            "temp": 274.76,
            "temp_min": 270.596,
            "temp_max": 274.76,
            "humidity": 65
          },
          "weather": [
            {
              "main": "Clouds",
              "icon": "wi-cloud"
            }
          ],
          "clouds": {
            "all": 32
          },
          "wind": {
            "speed": 2.86,
            "deg": 93.0053
          },
          "snow": {}
        },
        {
          "dt": 1452668007,
          "main": {
            "temp": 275.18,
            "temp_min": 274.407,
            "temp_max": 275.18,
            "humidity": 75
          },
          "weather": [
            {
              "main": "Clouds",
              "icon": "wi-cloud"
            }
          ],
          "clouds": {
            "all": 68
          },
          "wind": {
            "speed": 3.2,
            "deg": 101.502
          },
          "snow": {}
        },
        {
          "dt": 1452754407,
          "main": {
            "temp": 275.94,
            "temp_min": 275.553,
            "temp_max": 275.94,
            "humidity": 82
          },
          "weather": [
            {
              "main": "Clear",
              "icon": "wi-day-sunny"
            }
          ],
          "clouds": {
            "all": 76
          },
          "wind": {
            "speed": 3.76,
            "deg": 111.001
          },
          "snow": {
            "3h": 0.0025
          }
        },
        {
          "dt": 1452840807,
          "main": {
            "temp": 277.757,
            "temp_min": 277.757,
            "temp_max": 277.757,
            "humidity": 73
          },
          "weather": [
            {
              "id": 800,
              "main": "Sunny",
              "icon": "wi-day-sunny"
            }
          ],
          "clouds": {
            "all": 76
          },
          "wind": {
            "speed": 4.51,
            "deg": 104.502
          },
          "snow": {
            "3h": 0.005
          }
        },
        {
          "dt": 1452927207,
          "main": {
            "temp": 277.156,
            "temp_min": 277.156,
            "temp_max": 277.156,
            "humidity": 76
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "icon": "wi-day-cloudy"
            }
          ],
          "clouds": {
            "all": 76
          },
          "wind": {
            "speed": 5.24,
            "deg": 105
          },
          "snow": {
            "3h": 0.0175
          }
        }
      ]
    },
    {
      "id": 6,
      "name": "London",
      "country": "UK",
      "current": {
        "dt": 1452495207,
        "main": {
          "temp": 277.18,
          "temp_min": 277274.407,
          "temp_max": 275.18,
          "humidity": 75
        },
        "weather": {
          "main": "Clouds",
          "icon": "wi-cloud"
        },
        "clouds": {
          "all": 32
        },
        "wind": {
          "speed": 2.86,
          "deg": 93.0053
        },
        "snow": {}
      },
      "list": [
        {
          "dt": 1452495207,
          "main": {
            "temp": 274.76,
            "temp_min": 270.596,
            "temp_max": 274.76,
            "humidity": 65
          },
          "weather": [
            {
              "main": "Clouds",
              "icon": "wi-cloud"
            }
          ],
          "clouds": {
            "all": 32
          },
          "wind": {
            "speed": 2.86,
            "deg": 93.0053
          },
          "snow": {}
        },
        {
          "dt": 1452668007,
          "main": {
            "temp": 275.18,
            "temp_min": 274.407,
            "temp_max": 275.18,
            "humidity": 75
          },
          "weather": [
            {
              "main": "Clouds",
              "icon": "wi-cloud"
            }
          ],
          "clouds": {
            "all": 68
          },
          "wind": {
            "speed": 3.2,
            "deg": 101.502
          },
          "snow": {}
        },
        {
          "dt": 1452754407,
          "main": {
            "temp": 275.94,
            "temp_min": 275.553,
            "temp_max": 275.94,
            "humidity": 82
          },
          "weather": [
            {
              "main": "Clear",
              "icon": "wi-day-sunny"
            }
          ],
          "clouds": {
            "all": 76
          },
          "wind": {
            "speed": 3.76,
            "deg": 111.001
          },
          "snow": {
            "3h": 0.0025
          }
        },
        {
          "dt": 1452840807,
          "main": {
            "temp": 277.757,
            "temp_min": 277.757,
            "temp_max": 277.757,
            "humidity": 73
          },
          "weather": [
            {
              "id": 800,
              "main": "Sunny",
              "icon": "wi-day-sunny"
            }
          ],
          "clouds": {
            "all": 76
          },
          "wind": {
            "speed": 4.51,
            "deg": 104.502
          },
          "snow": {
            "3h": 0.005
          }
        },
        {
          "dt": 1452927207,
          "main": {
            "temp": 277.156,
            "temp_min": 277.156,
            "temp_max": 277.156,
            "humidity": 76
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "icon": "wi-day-cloudy"
            }
          ],
          "clouds": {
            "all": 76
          },
          "wind": {
            "speed": 5.24,
            "deg": 105
          },
          "snow": {
            "3h": 0.0175
          }
        }
      ]
    }
  ];

  return {
    all: function() {
      return cities;
    }
  };
});
