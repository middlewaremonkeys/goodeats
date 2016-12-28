require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const yelpController = require('./API/yelpController');

app.use(express.static(__dirname + '/../client'));
app.use('/node_modules', express.static(__dirname + '/../node_modules'));
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

app.get('*', (req, res) => {
  res.send('GoodEats!!!!');
});

app.listen(port);
console.log(`Server listening on *:${port}`);
