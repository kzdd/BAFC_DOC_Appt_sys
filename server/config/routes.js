var userController = require('./../controllers/users.js')
var appointmentController = require('./../controllers/appointments.js')

module.exports = function(app){

	app.post('/user', function(req, res){
		userController.addUser(req, res);
	})

	app.get('/user/:name', function(req, res){
		userController.login(req, res);
	})

	app.post('/appointment', function(req, res){
		appointmentController.createAppointment(req, res);
	})

	app.get('/getAllAppt', function(req, res){
		appointmentController.getAllAppt(req, res);
	})

	app.post('/delete', function(req, res){
		appointmentController.delete(req, res);
	})
	


}