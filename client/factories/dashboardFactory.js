myApp.factory('dashboardFactory', function($http, $location){
	var factory = {};
	var appts = [];


	factory.getAllAppt = function(callback){
		$http.get('/getAllAppt').then(function(data){
			// console.log(data.data);
			appts = data.data;
			callback(appts);
		})
	}

	factory.Delete = function(appt, callback){
		console.log(appt);
		appts.splice(appts.indexOf(appts._id), 1);

		$http.post('/delete', appt).then(function(data){
			callback(appts);
			
		})
	}




	return factory;
})