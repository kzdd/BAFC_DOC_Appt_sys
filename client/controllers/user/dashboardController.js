myApp.controller('dashboardController', function($scope, $routeParams, $location, userFactory, dashboardFactory){
	
	dashboardFactory.getAllAppt(function(data){
		$scope.appts = data;
		console.log($scope.appts);
		//to populate the table
	})

	userFactory.getUser(function(data){
		$scope.user = data;
		// got user for id and name etc
		// console.log($scope.user);
	})



	$scope.Delete = function(appt){
		console.log(appt);
		dashboardFactory.Delete(appt, function(data){
			console.log(data);
		})
	}



})