// click event: when user clicks the submit button, show the search result on the right column 
$("#submit-button").on("click", function (event) {
    event.preventDefault();
    var isClicked = $("#movies").click(); 
    if (isClicked){
        // store and trim user input of movie search 
        var movieTitle = $("#searchAll").val().trim();
      
        console.log(movieTitle);
        var queryURL = " http://www.omdbapi.com/?apikey=604e2704&t=" + movieTitle;
        $.ajax({
            url: queryURL,
            method: 'GET',
        }).then(function (response) {
            console.log(response)
    
            // show and append relative information on the results section 
            // append movie title 
            $("#results").html("<b>Movie Name: </b>"+movieTitle + "<br>");
            //append poster
            var image = $("<img>"); 
            image.attr("src", response.Poster); 
            $("#results").append (image); 
            $("#results").append("<br>"+"Actors: "+response.Actors+ "<br>"); 
            $("#results").append("Director: "+response.Director+ "<br>"); 
            $("#results").append("Awards : "+response.Awards+ "<br>"); 
            $("#results").append("Country : "+response.Country+ "<br>"); 
            $("#results").append("Genre : "+response.Genre+ "<br>"); 
            $("#results").append("Plot: "+response.Plot+ "<br>"); 
        });
    }
})


