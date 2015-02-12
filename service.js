var app = angular.module('mahPromises');

app.service('service', function($http, $q){

var birds = [{commonName: 'snowy plover', type: 'plover'}, {commonName: 'western meadowlark', type: 'icterid'}, {commonName:'red breasted merganser', type: 'duck'}, {commonName:'black capped chickadee', type: 'passerine, chickadee'}, {commonName:'northern shoveler', type: 'duck'}, {commonName:'sharp shinned hawk', type: 'raptor'}, {commonName:'blue heron', type: 'wading bird'}, {commonName:'snowy egret', type: 'wading bird'}, {commonName:'barn owl', type: 'owl'}, {commonName:'osprey', type:'raptor'}, {commonName:'sage grouse',type:'game bird'}];
// var birds;

// this.getBirds = function(){
// 	return birds;
// }


this.birdIsTheWord = function() {
	var deferred = $q.defer();
	// console.log(deferred.promise);
	// console.log(deferred);
	if(birds){
		deferred.resolve(birds);
	} else {
		deferred.reject("I rejected the promise");
	}
	return deferred.promise;
}

this.getSoManyBirds = function(){
	var deferred = $q.defer();
	$http({
		method: 'GET',
		url: 'http://ebird.org/ws1.1/data/obs/geo/recent?lng=-111.6608&lat=40.2444&dist=20&back=20&maxResults=500&locale=en_US&fmt=json'
	}).then(function(res){
		// console.log(res);
		deferred.resolve(res.data);
	}, function(err){
		deferred.rejected(err);
	})
	return deferred.promise;
}

});