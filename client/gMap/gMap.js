angular.module('gMap', ['GoogleMapsNative'])

.controller('mapController', function($scope, $http) {
  
$scope.fakeData = [
  {
    "rating": 5,
    "coordinates" : {
      "position": [
        40.7056832469878,
        -74.0017905060425
      ]
    },
    "id": "yelps-12th-burstday-aboard-the-zephyr-new-york",
    "reviewCount": 72,
    "name": "Yelp's 12th Burstday Aboard THE ZEPHYR",
    "open": true,
    "image": "https://s3-media3.fl.yelpcdn.com/bphoto/MQmvkSJGrLZNwyGFsbPuKQ/o.jpg",
    "categories": [
      "Yelp Events"
    ]
  },
  {
    "rating": 4.5,
    "coordinates": {
      "position": [
        40.7059677364821,
        -73.9966657489186
      ]
    },
    "id": "brooklyn-bridge-brooklyn",
    "reviewCount": 1064,
    "name": "Brooklyn Bridge",
    "open": true,
    "image": "https://s3-media2.fl.yelpcdn.com/bphoto/xMLer6u7sMowolpZevqPzA/o.jpg",
    "categories": [
      "Landmarks & Historical Buildings"
    ]
  },
  {
    "rating": 4.5,
    "coordinates": {
      "position": [
        40.7016262778116,
        -73.9972114562988
      ]
    },
    "id": "brooklyn-bridge-park-brooklyn-3",
    "reviewCount": 423,
    "name": "Brooklyn Bridge Park",
    "open": true,
    "image": "https://s3-media1.fl.yelpcdn.com/bphoto/MC9G6eP7YeWYH29XYlTNkA/o.jpg",
    "categories": [
      "Parks"
    ]
  },
  {
    "rating": 4.5,
    "coordinates": {
      "position": [
        40.7103869,
        -74.0076009
      ]
    },
    "id": "pisillo-italian-panini-new-york",
    "reviewCount": 315,
    "name": "Pisillo Italian Panini",
    "open": true,
    "image": "https://s3-media2.fl.yelpcdn.com/bphoto/v5OesBHULixUjcbnurKZgg/o.jpg",
    "price": "medium",
    "categories": [
      "Italian",
      "Sandwiches"
    ]
  },
  {
    "rating": 4.5,
    "coordinates": {
      "position": [
        40.7185910158738,
        -74.0088844299316
      ]
    },
    "id": "jungsik-new-york",
    "reviewCount": 329,
    "name": "Jungsik",
    "open": true,
    "image": "https://s3-media2.fl.yelpcdn.com/bphoto/AOCHXf_qNZLWtarkx2J0iA/o.jpg",
    "price": "high-end",
    "categories": [
      "Korean"
    ]
  },
  {
    "rating": 5,
    "coordinates": {
      "position": [
        40.7087737,
        -74.0067282
      ]
    },
    "id": "voyager-espresso-new-york",
    "reviewCount": 37,
    "name": "Voyager Espresso",
    "open": true,
    "image": "https://s3-media1.fl.yelpcdn.com/bphoto/UIzRNqkXopGq_iU_B-yNTQ/o.jpg",
    "price": "cheap",
    "categories": [
      "Coffee & Tea",
      "Cafes"
    ]
  },
  {
    "rating": 4.5,
    "coordinates": {
      "position": [
        40.7168697865532,
        -74.0066022711227
      ]
    },
    "id": "arcade-bakery-new-york",
    "reviewCount": 131,
    "name": "Arcade Bakery",
    "open": true,
    "image": "https://s3-media1.fl.yelpcdn.com/bphoto/RirFCsoXIxDcNxPLIdtsLQ/o.jpg",
    "price": "medium",
    "categories": [
      "Coffee & Tea",
      "Bakeries"
    ]
  },
  {
    "rating": 4.5,
    "coordinates": {
      "position": [
        40.716958735395,
        -74.00889704957
      ]
    },
    "id": "bouley-new-york-2",
    "reviewCount": 1050,
    "name": "Bouley",
    "open": true,
    "image": "https://s3-media3.fl.yelpcdn.com/bphoto/hM08RKH7KrSv1Z-giu-z5w/o.jpg",
    "price": "high-end",
    "categories": [
      "French"
    ]
  },
  {
    "rating": 4.5,
    "coordinates": {
      "position": [
        40.709765,
        -74.012452
      ]
    },
    "id": "9-11-tribute-center-new-york",
    "reviewCount": 101,
    "name": "9/11 Tribute Center",
    "open": true,
    "image": "https://s3-media1.fl.yelpcdn.com/bphoto/gu_txBwP4MM0eU8DJb3l9A/o.jpg",
    "categories": [
      "Landmarks & Historical Buildings",
      "Museums"
    ]
  },
  {
    "rating": 4.5,
    "coordinates": {
      "position": [
        40.715688,
        -74.007695
      ]
    },
    "id": "nish-nush-new-york",
    "reviewCount": 452,
    "name": "Nish Nush",
    "open": true,
    "image": "https://s3-media4.fl.yelpcdn.com/bphoto/aaxrobKWTnDpKUY4AOXEKg/o.jpg",
    "price": "cheap",
    "categories": [
      "Middle Eastern",
      "Moroccan",
      "Greek"
    ]
  }
]


  console.log($scope.fakeData)  

   // $scope.getData = function() {
   // 	return $http({
   // 	  method: 'GET',
   // 	  url: '/api/yelp'	
   // 	})
   // 	.then(function(returnedData) {
   // 	  console.log(returnedData);
   // 	  return returnedData;
   // 	})
   // 	.catch(function(error) {
   // 	  console.log(error);
   // 	});
   // }

  // $scope.data = Search.results;
  $scope.storage = [];

	$scope.coords = {
  	latitude: false, 
  	longitude: false
  }

  $scope.geolocation = {
  	center: [37.772323, -122.214897], //center: $scope.storage 
  	zoom: 8, 
  	mapTypeId: google.maps.MapTypeId.ROADMAP
  }

  $scope.currentLocation = {
  	position:  [37.772323, -122.214897],
  	draggable: true
  }

  $scope.locArr = [
		{
			pos: {
		  	position:  [37.772323, -122.214897],
		  	draggable: true
			},
	  	text: 'loc 1'
	  },
		{
			pos: {
				position:  [36.772323, -122.214897],
		  	draggable: true
			},
	  	text: 'loc 2'
	  }
  ];

	console.log($scope.geolocation)
  // $scope.latitute = $scope.coords.latitude=marker.getPosition().lat()
  // $scope.longitude = $scope.coords.longitude=marker.getPosition().lng()

});
