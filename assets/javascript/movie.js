// click event: when user clicks the submit button, show the search result on the right column 
$("#submit-button").on("click", function (event) {
    event.preventDefault();
    // store and trim user input of movie search 
    var movieTitle = $("#search-movies").val().trim();
    $("#search-movies").val(""); 
    console.log(movieTitle);
    var queryURL = " http://www.omdbapi.com/?apikey=604e2704&t=" + movieTitle;
    $.ajax({
        url: queryURL,
        method: 'GET',
    }).then(function (response) {
        console.log(response)

        // show and append relative information on the results section 
        // append movie title 
        $("#movies").html("<b>Movie Name: </b>"+movieTitle + "<br>");
        //append poster
        var image = $("<img>"); 
        image.attr("src", response.Poster); 
        $("#movies").append (image); 
        $("#movies").append("<br>"+"Actors: "+response.Actors+ "<br>"); 
        $("#movies").append("Director: "+response.Director+ "<br>"); 
        $("#movies").append("Awards : "+response.Awards+ "<br>"); 
        $("#movies").append("Country : "+response.Country+ "<br>"); 
        $("#movies").append("Genre : "+response.Genre+ "<br>"); 
        $("#movies").append("Plot: "+response.Plot+ "<br>"); 
    });
})


