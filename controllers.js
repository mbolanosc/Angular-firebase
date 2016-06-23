angular.module('videogames.controllers', [])

.controller('listController', function($location, $games){
	var list = this;

	$games.list().then(function(games){
		list.games = games;
	}, function(error){
		console.log(error);
		alert(error.message);
	});	
})

.controller('addController', function($games){
	var add = this;

	add.save = function(){
		$games.add(add.game).then(function(){
			alert('Success!');
		}, function(error){
			alert('Error');
			console.log(error);
		});
	};
})

.controller('editController', function($routeParams, $games){
	var edit = this;
	var id = $routeParams.id;

	edit.game = $games.get(id);

	edit.save = function(){
		$games.edit(edit.game).then(function(){
			alert('Success!');
		}, function(error){
			alert('Error');
			console.log(error);
		});
	};
});