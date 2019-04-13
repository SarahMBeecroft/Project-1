
// Comic Vine API Key 
// 7e34951fcec75de14801f45cdd1fa59016a6a03c

// Marvel API Keys
// Public Key
// aa8be1be5797e77aa2b312f6e96dfedc
// Private Key
// d4145605f826d819065b35e35a72a0b14024f23f

// Cognitive Services Group Keys (Bing/Azure)
// 5bf4d67faac747c1b3bb8b918c7bb775
// 17d8f18f01bf4c2eb580554b8a578e62

// var queryURL = "https://gateway.marvel.com:443/v1/public/comics?format=comic&formatType=comic&title=" + searchTerm + "&limit=10&apikey=aa8be1be5797e77aa2b312f6e96dfedc";
// var queryURL = "https://api.cognitive.microsoft.com/bing/v7.0/images/search?q=comic book covers&count=10&offset=0&mkt=en-us&safeSearch=Moderate";
        

// // Click event when user hits submit button
$("#submit-button").on("click", function (event) {
    
    // Prevents page from reloading
    event.preventDefault();

    // Creates variable for search term and trims 
    var searchTerm = $("#searchAll").val().trim();
    console.log(searchTerm);
    
    var queryURL = "https://cors-anywhere.herokuapp.com/https://comicvine.gamespot.com/api/issues/?api_key=7e34951fcec75de14801f45cdd1fa59016a6a03c&format=json&filter=name:" + searchTerm + "&limit=10"; // https://cors-anywhere.herokuapp.com prevents cors error
   
    // Ajax call    
    $.ajax({
        url: queryURL,
        method: 'GET',
    }).then(function (response) {

        // Testing response to make sure object is there
        console.log(response);
        
        // For loop to display gifs
        for (var i = 0; i < response.results.length; i++) {

            console.log(response.results[i].image.medium_url);
        
            // Creates variable for image and applies image attribute
            var image = $("<img>").attr("src", response.results[i].image.medium_url);

            // Adds both rating and gif to gif div in HTML
            $("#results").append(image);
            
        }
    })
})

