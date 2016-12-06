angular.module('goodEats.services', [])
.factory('Search', ($http) => {

  /**
   * Search options
   * @var Object Search options object
   * @options
   *  term: STRING, //optional
   *  location: STRING, //required (loc or lat + long)
   *  latitude: INT, //required (loc or lat + long)
   *  longitude: INT, //required (loc or lat + long)
   *  radius: INT, //optional (meters)
   *  categories: STRING, //optional (comma delimited)
   *  limit: INT, //optional (default 20, max 50)
   *  offset: INT, //optional (offset from start)
   *  sortBy: STRING, //optional (default best_match, rating, review_count, distance)
   *  price: array, //optional (1-4) | i.e. [1,2,3,4] | [4,2,3]
   *  openNow: BOOLEAN //optional
   */
  var options = {};

  /**
   * Search results
   * @var Array
   */
  var results = [];

  /**
   * Send post request to backend for a yelp request with the options object
   * Overwrites results
   * @return Promise Resolves to data from response or error
   */
  var search = () => {
    return $http.post('/api/yelp', options)
      .then((res) => {
        results.splice(0, results.length, ...res.data);
        console.log('options', options);
        console.log('results', results);
        return res.data;
      })
      .catch((err) => {
        console.err(err);
        return err;
      });
  };

  var priceFilter = {};

  var ratingFilter = {};

  return {
    options: options,
    results: results,
    ratingFilter: ratingFilter,
    priceFilter: priceFilter,
    search: search
  };
});
