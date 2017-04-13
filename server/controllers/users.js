var mongoose = require('mongoose');
var userDb = mongoose.model('User');


module.exports = (function() {
	return {
		addUser: function(req, res){
			var newUser = new userDb(req.body);
			newUser.save(function(err, user){
				if(err){
					res.json(err);
				}
				else {
					res.json(newUser);
				}
			})
		},

		login: function(req, res){
			// console.log(req.params.name);
			userDb.find({name: req.params.name}, function(err, user){
				if(user.length < 1){
					console.log("messed up getting user");
					res.json({user:"user not found"})
				}
				else{
					res.json(user);
				}
			})
		},
	}
})();