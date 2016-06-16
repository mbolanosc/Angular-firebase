angular.module('routes', ['ngRoute'])

.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: "views/home.html"
		})
		.when('/songs', {
			templateUrl: "views/songs.html"
		})
		.when('/contactus', {
			templateUrl: "views/contactus.html"
		})
		.otherwise({
			redirectTo: '/'
		});
});