// function openSearch
function openSearch(evt, searchParameter) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(searchParameter).style.display = "block";
    evt.currentTarget.className += " active";
}

// click event: enter key equals to search button clicked 
$("#searchAll").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#submit-button").click();
    }
});

// click event: when user clicks the submit button, show the search result on the right column 
$("#submit-button").on("click", function (event) {
    event.preventDefault();

    // store and trim user input of movie search 
    var userInput = $("#searchAll").val().trim();
    console.log(userInput);
    var movieQueryURL = " https://www.omdbapi.com/?apikey=604e2704&t=" + userInput;
    $.ajax({
        url: movieQueryURL,
        method: 'GET',
    }).then(function (response) {
        console.log(response)
        // show and append relative information on the Movies section 
        //append poster
        var image = $("<img>");
        image.attr("src", response.Poster);
        $("#Movies").html(image);
        // append movie title 
        $("#Movies").append("<br><b>Movie Name: </b>" + userInput);
        $("#Movies").append("<br>" + "<b>Actors</b>: " + response.Actors + "<br>");
        $("#Movies").append("<b>Director: </b>" + response.Director + "<br>");
        $("#Movies").append("<b>Awards : </b>" + response.Awards + "<br>");
        $("#Movies").append("<b>Country : </b>" + response.Country + "<br>");
        $("#Movies").append("<b>Genre : </b>" + response.Genre + "<br>");
        $("#Movies").append("<b>Plot: </b>" + response.Plot + "<br>");
    });
})
