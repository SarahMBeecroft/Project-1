// create global variables of movie name and query url 
var movieTitle = ""; 
var queryURL = " http://www.omdbapi.com/?apikey=604e2704&t="+movieTitle; 
$.ajax({
    url: queryURL,
    method: 'GET',
}).then(function(response){
    console.log(response)
}); 

// click event: when user clicks the submit button, show the search result on the right column 
