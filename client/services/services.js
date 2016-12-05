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
   *  sort_by: STRING, //optional (default best_match, rating, review_count, distance)
   *  price: array, //optional (1-4) | i.e. [1,2,3,4] | [4,2,3]
   *  open_now: BOOLEAN //optional
   */
  var options = {};

  /**
   * Search results
   * @var Array
   */
  var result = [];

  /**
   * Send post request to backend for a yelp request with the options object
   * @return Promise Resolves to data from response or error
   */
  var search = () => {
    return $http.post('/api/yelp', options)
      .then((res) => {
        result = res.data;
        return res.data;
      })
      .catch((err) => {
        console.err(err);
        return err;
      });
  };

  return {
    options: options,
    result: result,
    search: search
  };
});
