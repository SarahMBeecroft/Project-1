// // starting Apple api query
// var MusicQueryURL = "https://itunes.apple.com/search?term=" + userInput + "&entity=album&limit=2";
// $.ajax({
//     url: MusicQueryURL,
//     method: "GET"
// }).then(function (response) {
//     console.log(typeof response);
//     console.log(JSON.parse(response))
//     var data = JSON.parse(response)
//     var soundTrackCover = data.results[0].artworkUrl100
//     var collectionView = data.results[0].collectionViewUrl
//     // creating an element to hold the image for soundtrackCover
//     var snTrkCvr = $("<img>")
//     snTrkCvr.attr("src", soundTrackCover);
//     $("#Music").append(snTrkCvr)
//     console.log(collectionView)
// });
