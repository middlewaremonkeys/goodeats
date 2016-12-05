var yelp = require('yelp-fusion');
var client = yelp.client('');
var clientId = process.env.YELP_ID;
var clientSecret = process.env.YELP_SECRET;

/**
 * Send post request for yelp OAuth token
 *  Set client to a yelp client with the OAuth token
 */
yelp.accessToken(clientId, clientSecret).then(response => {
  console.log(response.jsonBody.access_token);
  client = yelp.client(response.jsonBody.access_token);
}).catch(e => {
  console.log(e);
});

/**
 * Search the yelp API with given parameters
 * @param  Object options Configuration object to pass as param's to the yelp API (example values below)
 * @return Promise        Resolves to shortened array of objects where each is a business
 *
 *
 * @options
 *  term: STRING, //optional
 *  location: STRING, //required (loc or lat + long)
 *  latitude: INT, //required (loc or lat + long)
 *  longitude: INT, //required (loc or lat + long)
 *  radius: INT, //optional (meters)
 *  categories: STRING, //optional (comma delimited)
 *  limit: INT, //optional (default 20, max 50)
 *  offset: INT, //optional (offset from start)
 *  sort_by: STRING, //optional (default best_match, rating, review_count, distance)
 *  price: STRING, //optional (1-4) | i.e. '1' | '2,3'
 *  open_now: BOOLEAN //optional
 *
 */
var search = function(options) {

  return client.search(options)
    .then(response => {
      return response.jsonBody.businesses.map((business) => {
        return {
          rating: business.rating,
          coordinates: business.coordinates,
          id: business.id,
          reviewCount: business.review_count,
          name: business.name,
          open: !business.is_closed,
          image: business.image_url,
          price: convertPriceToEnglish(business.price),
          categories: business.categories.map((category) => category.title)
        };
      });
    }).catch(e => {
      console.log(e);
      return e;
    });
};

/**
 * Converts a '$' price given by yelp's api to a english string
 * @param  string price string to be converted
 * @return string       english string to price represents
 */
var convertPriceToEnglish = (price) => {
  let prices = {
    '$': 'cheap',
    '$$': 'medium',
    '$$$': 'expensive',
    '$$$$': 'high-end'
  };

  return prices[price];
};

module.exports = {
  search: search
};
