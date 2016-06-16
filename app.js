angular.module('videoGames', ['videoGames.controllers', 'videoGames.factories', 'ngRoute','firebase'])
	

.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/home.html',
		})
		.when('/games', {
			templateUrl: 'views/games.html',
			controller: 'listController as list',
		})
		.when('/game:gameId', {
			templateUrl: 'views/game.html',	
		})
		.otherwise({
			redirecTo: '/'
		});

	var config = {
	    apiKey: "AIzaSyChqjTB8yd5Cjtmzmc4mtUObhei-EEbX2M",
	    authDomain: "practica-firebase-c98eb.firebaseapp.com",
	    databaseURL: "https://practica-firebase-c98eb.firebaseio.com",
	    storageBucket: "practica-firebase-c98eb.appspot.com",
	  };
	  firebase.initialzeApp(config);
});