angular.module('goodEats.services', [])
/**
 * Search factory
 * sends post request to internal api, storing query options and result data
 * @options and @results passed around to most of the controllers by reference along with a few other variables
 */
.factory('Search', ['$http', '$log', ($http, $log) => {

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
   * Modifys results in place instead of assigning to a different array
   * @return Promise Resolves to data from response or error
   */
  var search = () => {
    return $http.post('/api/yelp', options)
      .then((res) => {
        results.splice(0, results.length, ...res.data);
        $log.log('options', options);
        $log.log('results', results);
        return res.data;
      })
      .catch((err) => {
        $log.error(err);
        return err;
      });
  };

  var priceFilter = {};

  var ratingFilter = {};

  var radiusFilter = {};

  return {
    options: options,
    results: results,
    ratingFilter: ratingFilter,
    priceFilter: priceFilter,
    search: search,
    radiusFilter: radiusFilter
  };
}]);
