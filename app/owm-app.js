angular.module('OWMApp', ['ngRoute'])
	.value('owmCities', ['New York', 'Dallas', 'Chicago'])
    .config(function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl : 'home.html',
            controller : 'HomeCtrl'
        })
        .when('/cities/:city', {
            templateUrl : 'city.html',
            controller : 'CityCtrl',
            resolve : {
            	city: function(owmCities, $route, $location) {
            		var city = $route.current.params.city;
            		var city = city.replace('_', ' ');
            		if(owmCities.indexOf(city) == -1) {
            			$location.path('/error');
            			return
            		}
            		return city;
            	}
            }
        })
        .when('/error', {
        	template : '<p>Error - Page not found</p>'
        })
        .otherwise('/error');
    })
    .controller('HomeCtrl', ['$scope', function($scope) {
        //empty for now
    }])
    .controller('CityCtrl', function($scope, city) {
        $scope.city = city;
    });