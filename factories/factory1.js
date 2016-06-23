angular.module('videoGames.factories',[])
	//.value('') //variable semiglobal.
	//.value('ref', 'https://practica-firebase-c98eb.firebaseio.com/'); -> forma vieja de llamar firebase
	.factory('$games', function($firebaseArray){
		var games={};
		var ref= firebase.database().ref().child('games'); /*--> para que solo se vaya a ese nodo de la base de datos*/

		games.list = function(){
			var list= $firebaseArray(ref);
				return list.$loaded(); // --> retorna un promise y me devuelve la conexion
		};
		/*games.add = function(){
			
		};*/
		/*games.remove = function(){
			
		};*/
		return games;
	});


