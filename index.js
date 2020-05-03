var express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/api');
var app = express();

app.use(express.static(__dirname));

app.get('/', function(req, res) {
	res.render('index.html');
});

var port = 3000;
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "*");
	res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
	next();
  });
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/api', apiRoutes);

app.listen(port, function() {
	console.log('Server', process.pid, 'listening on port', port);
});
