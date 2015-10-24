angular.module('OWMApp', ['ngRoute'])

//CITY VALUES
	.value('owmCities', ['New York', 'Dallas', 'Chicago'])

//SETS BOOLEAN FOR LOADING
    .run(function($rootScope, $location, $timeout) {
        $rootScope.$on('$routeChangeError', function() {
            $location.path('/error');
        });
        $rootScope.$on('$routeChangeStart', function() {
            $rootScope.isLoading = true;
        });
        $rootScope.$on('$routeChangeSuccess', function() {
            $timeout(function() {
                $rootScope.isLoading = false;
            }, 1000);
        });
    })

//ROUTING CONFIG
    .config(function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl : 'main.html',
            controller : 'MainCtrl'
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
        .when('/error' {
            template : '<p>where you going? Theres nothing here...</p>'
        })
        .otherwise('/error');
    })

//CONTROLLERS
    .controller('MainCtrl', ['$scope', function($scope) {
        //empty for now
    }])
    .controller('CityCtrl', function($scope, city) {
        $scope.city = city;
    });

