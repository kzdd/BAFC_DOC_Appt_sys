// Pretty standard server.js file
var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, './client')));
app.use(bodyParser.json());

require('./server/config/db.js');
require('./server/config/routes.js')(app);

app.listen(8000, function() {
  console.log('Server is on @ 8000');
});
