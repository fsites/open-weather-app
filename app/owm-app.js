angular.module('OWMApp', ['ngRoute'])
	.value('owmCities', ['New York', 'Dallas', 'Chicago'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl : 'home.html',
            controller : 'HomeCtrl'
        })
        .when('/cities/:city', {
            templateUrl : 'city.html',
            controller : 'CityCtrl'
        });
    }])
    .controller('HomeCtrl', ['$scope', function($scope) {
        //empty for now
    }])
    .controller('CityCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
        $scope.city = $routeParams.city;
    }]);