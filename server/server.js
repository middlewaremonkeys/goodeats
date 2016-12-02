require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
var router = require('./router.js');
var app = express();
var port = process.env.PORT || 3000;
var yelpController = require('./yelpController');

app.use(express.static(__dirname + '/../client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/api/yelp/', (req, res) => {
  yelpController.search(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.get('/', function(req, res) {
  res.send('GOODEATS!!!!');

    console.log('I am successfully receiving a GET request...');
});

app.post('/api/yelp', function(req, res) {
	console.log("I AM WORKING");
  res.send(req.body);


});

app.listen(port);
console.log(`Server listening on *:${port}`);
