var express = require('express');
var mongojs = require('mongojs');
var bodyParser = require('body-parser');

var app = express();
var db = mongojs('profile', ['personalDetails', 'professionalSummary']);

//app.use(express.static(__dirname + "/app"));
app.use(express.static(__dirname));
app.use(bodyParser.json());

app.get('/personalDetails', function(req, res) {

	console.log('received a get request');
	db.personalDetails.find(function(err, docs) {
		console.log(docs);
			res.json(docs[0]);
	});
});

app.get('/professionalSummary', function(req, res) {

	console.log('received a get request');
	db.professionalSummary.find(function(err, docs) {
		console.log(docs[0]);
		res.json(docs[0]);
	});
});

app.listen(8000);

console.log('Server running on port 8000...');