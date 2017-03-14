angular.module('starter').controller('weatherController', function($scope, $state, $window, WeatherService, WeatherFactory, IonicPopupService) {

  $scope.goBack = function() {
    // $state.go('tab.more');
    $window.history.back();
  };

  $scope.gomenuPage = function () {
    $state.go('tab.more');
  };
   $scope.date = new Date();

   $scope.searchCity = function (searchText) {
     $scope.city = searchText;
     $scope.weather = WeatherFactory.getWeather(searchText);
   };
  $scope.weather = WeatherFactory.getWeather();

  $scope.$on('$ionicView.enter', function(ev) {
    if (ev.targetScope !== $scope)
      return;

    // WeatherFactory.getWeather().then(function(response) {
    //   $scope.weather = response;
    //   console.log('$scope.weather : ' + angular.toJson($scope.weather , ' '));
    //   // if (!!$scope.weather) {
    //   //     var date = new Date();
    //   //     date.setDate(date.getDate() + $scope.weather.date);
    //   //     console.log('date : ' + date);
    //   //     return date;
    //   //   }
    // }).catch(function(error) {
    //     var error = JSON.parse(error);
    //     IonicPopupService.alert("ERROR!!", error.msg);
    //     console.log('error : ' + angular.toJson(error, ' '));
    // });

  });



  // true if use celsius, false if use fahrenheit
  var useCelsius = true;

  // set scope variable
  $scope.useCelsius = useCelsius;

  // get all cities and bind to the view
  $scope.cities = WeatherService.all();

  // set title on header bar
  $scope.cityName = $scope.cities[0].name;

  // set active for the fist city
  $scope.cities[0].active = true;

  // change view title
  $scope.changeTitle = function(city) {
    $scope.cityName = city.name;
  }

  // get temperature
  $scope.getTemp = function($amount) {
    if (useCelsius) {
      return Math.round(convertToC($amount));
    }

    return Math.round(convertToF($amount));
  }

  // get weekday from timestamp
  $scope.getWeekday = function($timestamp) {
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    var date = new Date($timestamp * 1000);

    return days[date.getDay()];
  }

  // get date from timestamp
  $scope.getMainWeekdayAndDate = function ($timestamp) {
    var a = new Date($timestamp * 1000);
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var month = months[a.getMonth()];
    var date = a.getDate();
    var day = days[a.getDay()];

    return day + ', ' + month + ' ' + date
  }

  // convert wind direction
  // http://climate.umn.edu/snow_fence/components/winddirectionanddegreeswithouttable3.htm
  $scope.convertWindDirection = function ($degree) {
    var val = Math.floor(($degree / 22.5) + 0.5);
    var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];

    return arr[(val % 16)].toLowerCase();
  }

  // toggle show
  $scope.toggleShow = function(city) {

    for(var i = 0; i < $scope.cities.length; i++) {
      if($scope.cities[i].id != city.id) {
        $scope.cities[i].active = false;
      }
    }

    city.active = true;
    $scope.changeTitle(city);
  }

  // convert from Kenvin to Celsius
  function convertToC ($amount) {
    return $amount - 273;
  }

  // convert from Kenvin to Fahrenheit
  function convertToF ($amount) {
    return convertToC($amount) * 1.8 + 32;
  }
});
