// when clicking on the submit button, use ajax call to comic vine 
$("#submit-button").on("click", function (event) {
  event.preventDefault();
  var characterTerm = $("#searchAll").val().trim();
  var characterQueryURL = "https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/825632581144352/search/" + characterTerm;
  $.ajax({
    url: characterQueryURL,
    method: 'GET',
  }).then(function (response) {
    // Testing response to make sure object is there
    console.log(response);
    var heroImage = $("<img>")
    heroImage.attr("src", response.results[0].image.url);
    heroImage.addClass("char_image");
    $("#Character").html(heroImage);

    $("#Character").append("<br><b>Full Name: </b>" + response.results[0].biography["full-name"]);
    $("#Character").append("<br><b>Place of Birth: </b>" + response.results[0].biography["place-of-birth"]);
    $("#Character").append("<br><b>First Appearance: </b>" + response.results[0].biography["first-appearance"]);
    $("#Character").append("<br><b>Publisher: </b>" + response.results[0].biography["publisher"]);

    var aliases = response.results[0].biography.aliases;
    console.log(aliases);
    $("#Character").append("<br><b>Aliases: </b>");
    for (i = 0; i < aliases.length; i++) {
      $("#Character").append(aliases[i] + " | ");
    }
    $("#Character").append("<br><b>Group Affiliation: </b>" + response.results[0].connections["group-affiliation"]);
    $("#Character").append("<br><b>Power Stats: </b>" + "combat: " + response.results[0].powerstats.combat + "| " +
      "durability: " + response.results[0].powerstats.durability + "| " + "intelligence: " + response.results[0].powerstats.intelligence + "| " +
      "power: " + response.results[0].powerstats.power + "| " + "speed: " + response.results[0].powerstats.speed + "| " + "strength: " + response.results[0].powerstats.strength);
  })
})

