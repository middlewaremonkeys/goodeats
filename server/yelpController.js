var yelp = require('yelp-fusion');
var client = yelp.client('');
var clientId = process.env.YELP_ID;
var clientSecret = process.env.YELP_SECRET;

yelp.accessToken(clientId, clientSecret).then(response => {
  console.log(response.jsonBody.access_token);
  client = yelp.client(response.jsonBody.access_token);
}).catch(e => {
  console.log(e);
});

var getBuisness = function(query) {
  return client.search({
    term: query,
    location: 'san francisco, ca'
  }).then(response => {
    return response.jsonBody;
  }).catch(e => {
    console.log(e);
  });
};


module.exports = {
  getBuisness: getBuisness
};
