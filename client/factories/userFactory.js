myApp.factory('userFactory', function($http, $location){
	var factory = {};
	var user = {};
	// save current user info store what they do in this session
	// user info is retrieve from adduser or login in
	var no_user = {};
	
	factory.addUser = function(info, callback){
		$http.post('/user', info).then(function(data){
			// check if data reponse has errors
			if(data.data.errors){
				console.log(data.data.errors);
				callback(data);
			}
			// if there are no errors then push the data
			else{			
				user = data.data;		// this object is the same as the login object
				console.log(user);		// user._id, user_.name
				$location.path('/dashboard');
				callback(user);
			}
		});
	}

	factory.login = function(info, callback){
		$http.get('/user/'+ info).then(function(data){
			if(data.data.user){
				console.log("no user found");
				no_user = data.data;
				callback(no_user);
			}
			else{
				user = data.data[0];     // this object is the same as the addedUser object
				$location.path('/dashboard');
				console.log(user); // user._id, user_.name
				callback(user);
			}
		});
	}

	factory.getUser = function(callback){
		callback(user);
	}




	return factory;
})