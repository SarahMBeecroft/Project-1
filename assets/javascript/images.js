
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


// // Click event when user hits submit button
$("#submit-button").on("click", function (event) {
    
    // Prevents page from reloading
    event.preventDefault();

    // store and trim user input of movie search 
    var searchTerm = $("#searchAll").val().trim();

    // Clears search box
    $("#searchAll").val(""); 
    console.log(searchTerm);
    
    var queryURL = "https://comicvine.gamespot.com/api/issues/?api_key=7e34951fcec75de14801f45cdd1fa59016a6a03c&format=json&filter=name:batman";
    // var queryURL = "https://gateway.marvel.com:443/v1/public/comics?format=comic&formatType=comic&title=" + searchTerm + "&limit=10&apikey=aa8be1be5797e77aa2b312f6e96dfedc";
    // var queryURL = "https://api.cognitive.microsoft.com/bing/v7.0/images/search?q=comic book covers&count=10&offset=0&mkt=en-us&safeSearch=Moderate";
        // Ajax call    
        $.ajax({
            url: queryURL,
            method: 'GET',
        }).then(function (response) {
            console.log(response)
    
            // show and append relative information on the results section 
            // append movie title 
            $("#results").html(response);
            
            // Appends image 
            var image = $("<img>"); 
            image.attr("src", response); 
            $("#results").append (response); 
         
        });
    })






    // Azure code

    // $(function() {
    //     var params = {
    //         // Request parameters
    //         "q": "comics",
    //         "count": "10",
    //         "offset": "0",
    //         "mkt": "en-us",
    //         "safeSearch": "Moderate",
    //     };
      
    //     $.ajax({
    //         url: "https://uswest.api.cognitive.microsoft.com/bing/v7.0/images/search?" + $.param(params), // add uswest
    //         beforeSend: function(xhrObj){
    //             // Request headers
    //             xhrObj.setRequestHeader("Content-Type","multipart/form-data");
    //             xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","{5bf4d67faac747c1b3bb8b918c7bb775}");
    //         },
    //         type: "GET",
    //         // Request body
    //         data: "{body}",
    //     })
    //     .done(function(data) {
    //         alert(JSON.stringify(data));
    //     })
    //     .fail(function() {
    //         alert("error");
    //     });
    // });