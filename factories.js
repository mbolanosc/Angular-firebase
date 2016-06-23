angular.module('videogames.factories', [])

// Old way of firebase reference
//.value('ref', 'https://project-5047501402504107690.firebaseio.com')

.factory('$games', function($firebaseArray, $firebaseObject){
	var games = {};
	var ref = firebase.database().ref().child('Games');
	var list = $firebaseArray(ref);
	var cache = [];

	games.list = function(){				
		return list.$loaded().then(function(games){
			return cache = games;
		});
	};

	games.add = function(game){
		return list.$add(game);
	};

	games.get = function(id){
		return cache.$getRecord(id);
	};

	games.edit = function(game){
		return list.$save(game);
	};

	return games;
})