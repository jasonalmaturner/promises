var app = angular.module('mahPromises');

app.controller('controller', function($scope, service){

$scope.name = 'jason';

// $scope.birds = service.getBirds();

$scope.getAllTheBirds = function(){

	// $scope.birds = service.birdIsTheWord();
	// console.log($scope.birds);

	service.birdIsTheWord().then(function(response){
		$scope.birds = response;
	}, function(error){
		alert(error);
	})
};

console.log($scope)

$scope.getSoManyBirds = function(){
	service.getSoManyBirds().then(function(response){
		console.log(response);
		$scope.birdies = response.data;
		console.log($scope.birdies);
	}, function(error){
		console.log(error);
	})
}

})