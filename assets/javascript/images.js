// Initializes Firebase
var config = {
    apiKey: "AIzaSyAA7fqbxbh_t9fqSWqsFGcoA1zS5etAR5o",
    authDomain: "supersearch-b7f54.firebaseapp.com",
    databaseURL: "https://supersearch-b7f54.firebaseio.com",
    projectId: "supersearch-b7f54",
    storageBucket: "supersearch-b7f54.appspot.com",
    messagingSenderId: "867218048475"
  };
    firebase.initializeApp(config); 

// Creates a variable to reference the database
var database = firebase.database();

// Creates click event when user clicks submit button 
$("#submit-button").on("click", function (event) {

    // Prevents page from being reloaded
    event.preventDefault();

    
});
