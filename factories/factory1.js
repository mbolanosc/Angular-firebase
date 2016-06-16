angular.module('videoGames.factories',[])
	//.value('') //variable semiglobal.
	//.value('ref', 'https://practica-firebase-c98eb.firebaseio.com/');
	.factory('$games', function($firebaseArray){
		var games={};

		games.list = function(){
			var ref= firebase.database().ref();

			var list= $firebaseArray(ref);
				return list.$loaded();
		};
		/*games.add = function(){
			
		};*/
		/*games.remove = function(){
			
		};*/
		return games;
	});