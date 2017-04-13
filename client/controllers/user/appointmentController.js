myApp.controller('appointmentController', function($scope, $routeParams, $location, userFactory, appointmentFactory, dashboardFactory){
	
	userFactory.getUser(function(data){
		$scope.user = data;
		// got user, now create poll with user info
		// console.log($scope.user);
	})

	dashboardFactory.getAllAppt(function(data){
		$scope.appts = data;
		console.log($scope.appts);
		//to populate the table
	})




	$scope.createAppointment = function(newAppt){
		var checks = $scope.appts
		var thing = Date.parse(newAppt.date);

		function checkdate(thing, checks){
				var count =0;
				
				for(var i = 0; i<checks.length; i++){
					var schedules = Date.parse(checks[i].date);
					console.log(schedules);					
					if(thing == schedules){
						count++;
					}
				}
			return count;
			}
		var hello = checkdate(thing, checks);
		console.log(hello);	

		if(hello>3){
			$scope.cannot = "too many appointments";
			$scope.newAppt ={};
		}
		else{

			// console.log(newAppt);
			if($scope.newAppt == undefined){
				$scope.error = "cannot be empty dummy";
				$location.path('/new_appointment');	
			}
			else{

				appointmentFactory.createAppointment(newAppt, $scope.user, function(data){
					$scope.errors = [];
					$scope.error = '';
					// console.log(data.data);

					if(data.data){
						if(data.data.errors.complain){
							$scope.errors.push({complain: data.data.errors.complain.message});
						}
						if(data.data.errors.time){
							$scope.errors.push({time: data.data.errors.time.message});
						}
						if(data.data.errors.date){
							$scope.errors.push({complain: data.data.errors.date.message});
						}
						$scope.newAppt ={};
					}

					else{
						$scope.newAppt ={};
						$location.path('/dashboard');
					}
				})
			}
		}
		


	}
	
})