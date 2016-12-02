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

app.post('/location', function(req, res) {
	res.send('HELLO I WORK!!!!');
	console.log(req.body);
});

app.get('/', function(req, res) {
  res.send('GOODEATS!!!!');

});

app.listen(port);
console.log(`Server listening on *:${port}`);
