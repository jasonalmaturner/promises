var app = angular.module('mahPromises',['ngRoute']);

app.config(function($routeProvider){

$routeProvider
	.when('/', {
		templateUrl: 'home.html',
		controller: 'controller',
		resolve: {
			theBirds: function(service){
				return service.getSoManyBirds();
			},
			weather: function(service,$q){
				var dfd = $q.defer();
				navigator.geolocation.getCurrentPosition(function(pos){
					service.getWeather({lat: pos.coords.latitude, lon: pos.coords.longitude}).then(function(res){
						dfd.resolve(res);
					}, function(err){
						dfd.reject(err);
					});
				});
				return dfd.promise;
			}
		}
	})

})
