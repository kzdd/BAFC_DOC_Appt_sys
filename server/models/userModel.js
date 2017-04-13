var mongoose = require('mongoose');
var validator = require('node-mongoose-validator');

var UserSchema = new mongoose.Schema({
  	name : {
  		type: String,
  		required: [true, 'Cannot be empty'],
  		minlength: [5, "Too Short"],
  		maxlength: [15, "Too Long"]
  	}
});

mongoose.model('User', UserSchema);
UserSchema.path('name').validate(validator.$isAlpha({msg: "Characters only"}));

UserSchema.path('name').validate(function(value, done) {
    this.model('User').count({ name: value }, function(err, count) {
        if (err) {
            return done(err);
        } 
        // If `count` is greater than zero, "invalidate"
        done(!count);
    });
}, 'Username already exists');
