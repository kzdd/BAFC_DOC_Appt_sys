var mongoose = require('mongoose');
var userDb = mongoose.model('User');
var appointmentDb = mongoose.model('Appointment');


module.exports = (function() {
	return {
	
		createAppointment: function(req, res){
			console.log(req.body);
			var newAppointment = new appointmentDb(req.body);
			newAppointment.save(function(err, appointment){
				if(err){
					// console.log("error in appoinment");
					// console.log(err);
					res.json(err);
				}
				else{
					console.log(appointment);
					res.json(appointment);
				}
			})
		},

		getAllAppt: function(req, res){
			appointmentDb.find({}, function(err, appts){
				if(err){
					console.log("err in the get allpolls");
				}
				else{
					res.json(appts);
				}
			})
		},

		delete: function(req, res){
			appointmentDb.remove({_id: req.body._id}, function(err, data){
				if(err){
					console.log(err);
				}
				else{
					res.json(data);
				}
			})
		}


	}
})();