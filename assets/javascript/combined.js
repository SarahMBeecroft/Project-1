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

// click event: when user clicks the submit button, show the search result on the right column 
$("#submit-button").on("click", function (event) {
    event.preventDefault();
    // store and trim user input of movie search 
    var userInput = $("#searchAll").val().trim();
    console.log(userInput);
    var movieQueryURL = " http://www.omdbapi.com/?apikey=604e2704&t=" + userInput;
    $.ajax({
        url: movieQueryURL,
        method: 'GET',
    }).then(function (response) {
        console.log(response)
        // show and append relative information on the Movies section 
        // append movie title 
        $("#Movies").html("<b>Movie Name: </b>" + userInput + "<br>");
        //append poster
        var image = $("<img>");
        image.attr("src", response.Poster);
        $("#Movies").append(image);
        $("#Movies").append("<br>" + "Actors: " + response.Actors + "<br>");
        $("#Movies").append("Director: " + response.Director + "<br>");
        $("#Movies").append("Awards : " + response.Awards + "<br>");
        $("#Movies").append("Country : " + response.Country + "<br>");
        $("#Movies").append("Genre : " + response.Genre + "<br>");
        $("#Movies").append("Plot: " + response.Plot + "<br>");
    });
    // starting Apple api query
    var MusicQueryURL = "https://itunes.apple.com/search?term=" + userInput + "&entity=album&limit=2";
    $.ajax({
        url: MusicQueryURL,
        method: "GET"
    }).then(function (response) {
        console.log(typeof response);
        console.log(JSON.parse(response))
        var data = JSON.parse(response)
        var soundTrackCover = data.results[0].artworkUrl100
        var collectionView = data.results[0].collectionViewUrl
        // creating an element to hold the image for soundtrackCover
        var snTrkCvr = $("<img>")
        snTrkCvr.attr("src", soundTrackCover);
        snTrkCvr.wrap($('<a>', {
            href: collectionView
        }));

        $("#Music").append(snTrkCvr)
        console.log(collectionView)


    });

})


