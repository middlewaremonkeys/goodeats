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

var search = function(options) {
  /*
  var query = {
    term: STRING, //optional
    location: STRING, //required (loc or lat + long)
    latitude: INT, //required (loc or lat + long)
    longitude: INT, //required (loc or lat + long)
    radius: INT, //optional (meters)
    categories: STRING, //optional (comma delimited)
    limit: INT, //optional (default 20, max 50)
    offset: INT, //optional (offset from start)
    sort_by: STRING, //optional (default best_match, rating, review_count, distance)
    price: STRING, //optional (1-4) | i.e. '1' | '2,3'
    open_now: BOOLEAN //optional
  };
  */

  return client.search(options)
    .then(response => {
      let data = response.jsonBody.businesses;

      return data.map((business) => {
        return {
          rating: business.rating,
          coordinates: business.coordinates,
          id: business.id,
          review_count: business.review_count,
          name: business.name,
          is_closed: business.is_closed,
          image: business.image_url,
          price: business.price,
          categories: business.categories
        };
      });
    }).catch(e => {
      console.log(e);
    });
};


module.exports = {
  search: search
};
