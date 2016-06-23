angular.module('videogames', ['videogames.controllers', 'videogames.factories', 'ngRoute', 'firebase'])

.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: "views/home.html"
	})
	.when('/games', {
		templateUrl: "views/games.html",
		controller: 'listController as list'
	})
	.when('/game/:id', {
		templateUrl: "views/game.html",
		controller: 'editController as game'
	})
	.when('/new', {
		templateUrl: "views/game.html",
		controller: 'addController as game'
	})
	.otherwise({
		redirectTo: '/'
	});

	var config = {
    apiKey: "AIzaSyChqjTB8yd5Cjtmzmc4mtUObhei-EEbX2M",
    authDomain: "practica-firebase-c98eb.firebaseapp.com",
    databaseURL: "https://practica-firebase-c98eb.firebaseio.com",
    storageBucket: "practica-firebase-c98eb.appspot.com",
  };
  firebase.initializeApp(config);
});

