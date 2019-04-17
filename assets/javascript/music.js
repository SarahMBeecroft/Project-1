// Click Event when user hits submit button
$("#submit-button").on("click", function (event) {

    //Prevents page from reloading
    event.preventDefault();

    // store and trim user input of hero search 
    var userInput = $("#searchAll").val().trim();
    console.log(userInput);

  // Building Ajax call
  var urlStart = "https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term="
  var urlEnd = "&entity=album&limit=2"
  var queryURL = urlStart + userInput + urlEnd

  //console.log the query url to make sure it works
console.log(queryURL)

  $.ajax({
    url: queryURL,
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

    console.log(`"${collectionView}"`)


    var anchorDiv = $("<a>")
    anchorDiv.attr("href", collectionView)
    anchorDiv.attr("target","_blank")

    anchorDiv.append(snTrkCvr)
    $("#Music").html(anchorDiv)
    $("#Music").append("<br> <br>Click the picture above to go to the album page!")
  })})

