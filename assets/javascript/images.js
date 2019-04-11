// // Initializes Firebase
// var config = {
//     apiKey: "AIzaSyAA7fqbxbh_t9fqSWqsFGcoA1zS5etAR5o",
//     authDomain: "supersearch-b7f54.firebaseapp.com",
//     databaseURL: "https://supersearch-b7f54.firebaseio.com",
//     projectId: "supersearch-b7f54",
//     storageBucket: "supersearch-b7f54.appspot.com",
//     messagingSenderId: "867218048475"
// };
// firebase.initializeApp(config);

// // Creates a variable to reference the database
// var database = firebase.database();

// // Creates click event when user clicks submit button 
// $("#submit-button").on("click", function (event) {

//     // Prevents page from being reloaded
//     event.preventDefault();

//     // Gets input values
//     var images = $("#search-images").val().trim();

//     // Creates local "temporary" object for holding comic data
//     var comicData = {

//         images: images,
//         movies: movies,
//         music: music,
//         dateAdded:
//             firebase.database.ServerValue.TIMESTAMP
//     };

//     // Pushes comic data to database
//     database.ref().push(comicData);

//     // Clears text boxes
//     $("#search-images").val("");
// });

// // Adds child snapshot to database
// database.ref().on("child_added", function (childSnapshot) {
//     // Variables for child snapshot
//     var images = childSnapshot.val().images;
//     var movies = childSnapshot.val().movies;
//     var music = childSnapshot.val().music;


//     // Appends the new row to the train table
//     $("#images").append(images);


// })





// Comic Vine API Key 
// 7e34951fcec75de14801f45cdd1fa59016a6a03c

// Function to display images
function displayImages() {

// Declares variable for queryURL
var image = $(text).attr("search-images");
console.log(image);

        // Query URL for Comic Vine
        var queryURL = "https://comicvine.gamespot.com/api/volumes/?api_key=7e34951fcec75de14801f45cdd1fa59016a6a03c&format=json&" + image + "&limit=10";
        console.log(queryURL);

        // Ajax call 
        $.ajax({
            url: queryURL,
            method: "GET"

        }).then(function (response) {

            // Testing response to make sure object is there
            console.log(response);

            // Sets up variable for response data
            var results = response.data;

            // Empties div 
            $("#images").empty();

            // For loop to display images
            for (var i = 0; i < results.length; i++) {

                // Adds results to div
                $("#images").append(results);

            };
        });
    };





    // Function to add click event when submit button is clicked
    $("#submit-button").on("click", function (event) {

        event.preventDefault();

        // Takes user's input in text box and trims it so there's no white space
        var image = $("#userbutton").val().trim();

        // Pushes user's input to array of topics
        image.push(image);

        // Calls make buttons function to show user's submission
        showButtons();
    });



});


