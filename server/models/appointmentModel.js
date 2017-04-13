var mongoose = require('mongoose');
var validator = require('node-mongoose-validator');

var today = Date.now;


var AppointmentSchema = new mongoose.Schema({
  	name : String,
  	user_id : String,
  	complain: { 
  		type: String,
      required: [true, 'Complaint cannot be empty'],
  		minlength: [10, "Complain must be 10 characters"]
  	},
  	time: {
      type: String,
      required: [true, "Time cannot be empty"]
    },
  	created_at: {type: Date, default: Date.now},  
  	date: { 
      type: String,
      required: [true, "Date cannot be empty"]
    }

});

mongoose.model('Appointment', AppointmentSchema);
AppointmentSchema.path('date').validate(validator.$isAfter({msg: 'Must be a future date dummy'}));


