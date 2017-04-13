var myApp = angular.module('Myapp', ['ngRoute']);

(function(){
	myApp.config(function($routeProvider){
		$routeProvider
			.when('/', 
			{
				controller: 'userController',
				templateUrl: "partials/views/login_page.html"
			})
			.when('/dashboard', 
			{
				controller: 'dashboardController',
				templateUrl: "partials/views/dashboard.html"
			})
			.when('/new_appointment', 
			{
				controller: 'appointmentController',
				templateUrl: "partials/views/appointment.html"
			})
			.otherwise({
				redirectTo: "/"
			})
	})
}());