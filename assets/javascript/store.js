// function: on clicking the reload btn, reload the page. 
$("#reload-button").on("click",function(){
  location.reload(); 
}); 

// on clicking the submit button for submitting zip code 
$("#zip_submit").on("click", function (event) {
  event.preventDefault();
  console.log("clicked")
  var key = "mKrqR7d-JOSx8fFf48OgVlJzlJqg2Um5RJjaFT-FIqfbrrtme3UQlIkD4k6xr2kGsbx8TM-IDfpCHfczH_Wt6QHwh2711OO1JYLd0IIa4jiv0MW8Pv4QZJiEJVG1XHYx";
  var zip_code = $("#zipcode").val().trim();
  var yelpURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=comic+book&location=" + zip_code
  //captures user input of zip code
  // using jQuery & 'beforeSend' callback
  $.ajax({
    // xhrFields: {
    //   withCredentials: true
    // },
    method: "GET",
    headers: { 'Authorization': `Bearer ${key}` },
    url: yelpURL
  }).then(data => parseData(data))
    .catch(err => console.log(err));
  $("#map").css("display", "block");
})

// function: yelp api
function parseData(response) {
  var businessInfo = response.businesses;
  var locations = [];
  for (i = 0; i < businessInfo.length; i++) {
    // console.log(businessInfo[i])

    var storeName = businessInfo[i].name;
    // var phone = businessInfo[i].display_phone;
    var lat = businessInfo[i].coordinates.latitude;
    var long = businessInfo[i].coordinates.longitude;
    locations.push([storeName, lat, long, i]);
    console.log(locations); 
  }
  markMap(locations);
}

//function: google maps api
function markMap(locations) {
  // calculate the average long and lat of locations array
  var sumOfLat = 0;
  var sumOfLng = 0; 
  for (var i = 0; i < locations.length; i++) {
    sumOfLat += locations[i][1]; //don't forget to add the base
    sumOfLng += locations[i][2]; //don't forget to add the base
  }
  var avgOfLat = sumOfLat / locations.length;
  var avgOfLng = sumOfLng / locations.length;
  console.log(avgOfLat); 
  console.log(avgOfLng); 
  // google maps
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: new google.maps.LatLng(avgOfLat, avgOfLng),

    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var infowindow = new google.maps.InfoWindow();

  var marker, i;

  for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map
    });

    google.maps.event.addListener(marker, 'click', (function (marker, i) {
      return function () {
        infowindow.setContent(locations[i][0]);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }
}

