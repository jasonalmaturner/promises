var app = angular.module('mahPromises');

app.controller('controller', function($scope, service){

// $scope.birdies = theBirds;

// $scope.birds = service.getBirds();

$scope.getAllTheBirds = function(){

	service.birdIsTheWord().then(function(response){
		console.log(response);
		$scope.birds = response;
	}, function(err){
		console.log(err);
	});
	console.log($scope.birds);
};
// I commented this out, because I'm getting the data in the resolve in app.js.
$scope.getSoManyBirds = function(){
	service.getSoManyBirds().then(function(res){
		// console.log(res);
		$scope.birdies = res
	}, function(err){
		console.log(err);
	})
}

})