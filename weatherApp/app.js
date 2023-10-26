angular.module('WeatherApp', [])
    .controller('WeatherController', function($scope, $http) {
        $scope.city = '';
        $scope.weatherData = null;

        $scope.searchWeather = function() {
            
            var apiKey = "6f32ee98d1672d788fe5c291f90787de";
            var apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=" + $scope.city + '&appid=' + apiKey;

            $http.get(apiUrl)
                .then(function(response) {
                    $scope.weatherData = response.data;
                })
                .catch(function(error) {
                    console.error('Error fetching weather data:', error);
                    $scope.weatherData = null;
                });
        };
    });

