myApp.controller('userController', function($scope, $routeParams, $location, userFactory){
	
	$scope.addUser = function(){
		userFactory.addUser($scope.newUser, function(data){
	
			if(data.data){
				console.log(data.data);
				console.log("there is an error");
				$scope.error = data.data.errors.name.message;
				$scope.newUser = {};
			}
			else{
				$scope.user = data;
				$scope.newUser = {};		
			}
		})
	}

	$scope.login = function(oldUser){
		userFactory.login(oldUser, function(data){
			if(data.user){
				$scope.no_user = data.user;
				$scope.oldUser = {};
			}
			else{
				// console.log(data);
				$scope.user = data;
				$scope.oldUser = {};				
			}
		})
	}
})