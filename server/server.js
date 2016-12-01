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

app.get('/api/yelp/:query', (req, res) => {
  let query = req.params.query;

  yelpController.getBuisness(query)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.get('/', function(req, res) {
  res.send('GOODEATS!!!!');
});

app.listen(port);
console.log(`Server listening on *:${port}`);
