// when clicking on the submit button, use ajax call to superheroapi
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
    $("#Character").html("");
    for (i = 0; i < response.results.length; i++) {
      var newDiv = $("<div>");
      var heroImage = $("<img>");
      heroImage.attr("src", response.results[i].image.url);
      heroImage.addClass("char_image");
      $(newDiv).html(heroImage);

      $(newDiv).append("<br><b>Full Name: </b>" + response.results[i].biography["full-name"]);
      $(newDiv).append("<br><b>Place of Birth: </b>" + response.results[i].biography["place-of-birth"]);
      $(newDiv).append("<br><b>First Appearance: </b>" + response.results[i].biography["first-appearance"]);
      $(newDiv).append("<br><b>Publisher: </b>" + response.results[i].biography["publisher"]);
      $(newDiv).append("<br><b>Aliases: </b>");

      var aliases = response.results[i].biography.aliases;
      console.log(aliases);
      for (j = 0; j < aliases.length; j++) {
        $(newDiv).append(aliases[j] + " | ");
      }

      $(newDiv).append("<br><b>Group Affiliation: </b>" + response.results[i].connections["group-affiliation"]);
      $(newDiv).append("<br><b>Power Stats: </b>" + "combat: " + response.results[i].powerstats.combat + " | " +
        "durability: " + response.results[i].powerstats.durability + " | " + "intelligence: " + response.results[i].powerstats.intelligence + " | " +
        "power: " + response.results[i].powerstats.power + " | " + "speed: " + response.results[i].powerstats.speed + " | " + "strength: " + response.results[i].powerstats.strength+"<br>"+"<br>")
      $("#Character").append(newDiv);
    }
  })
})

