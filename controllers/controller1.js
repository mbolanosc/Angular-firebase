angular.module(videoGames.controllers ,[])
	.controller('listController' ,function($location,$games){
		var list = this;

		$games.list().then(function(games){
			list.games = games;
		},function(error){
			console.log(error);
		});

		list.add = function (){
			$games.add({}).then(function(){


			},function(error){
				alert('Error');
			});

		};
	});