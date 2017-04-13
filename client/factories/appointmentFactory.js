myApp.factory('appointmentFactory', function($http, $location){
	var factory = {};
	var appointment = {};

	factory.createAppointment = function(newAppt, user, callback){
		// console.log(newAppt);
		// console.log(user);
		newAppt.name = user.name;
		newAppt.user_id = user._id;
		console.log(newAppt);
		$http.post('/appointment', newAppt).then(function(data){
			if(data.data.errors){
				console.log("error", data.data);
				callback(data);
			}
			else{
				appointment = data.data;
				callback(appointment);
			}
		})
	}





	return factory;
})