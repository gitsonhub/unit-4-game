// var random = Math.floor(Math.random() * 9) + 1;
$(document).ready(function() 
{
  function getRndInteger(min, max) 
  {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  };

  var targetNumber = getRndInteger(9,120);
  $("#number-to-guess").text(targetNumber);

  var counter = 0;
  var wins = 0;
  var losses = 0;

  // Now for the hard part. Creating multiple crystals each with their own unique number value.

  // We begin by expanding our array to include four options.
  var numberOptions = [getRndInteger(1,12), getRndInteger(1,12), getRndInteger(1,12), getRndInteger(1,12)];

  // Next we create a for loop to create crystals for every numberOption.
  for (var i = 0; i < numberOptions.length; i++) {

    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");
    var imgNum = i;

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("crystal-image");

    // Each imageCrystal will be given a src link to the crystal image
    if (imgNum===0)
        {
        imageCrystal.attr(src="assets/images/blue.jpg");
        }
    else if(imgNum===1)
        {
        imageCrystal.attr(src="assets/images/orange.jpg");
        }
    else if(imgNum===2)
        {
        imageCrystal.attr(src="assets/images/purple.jpg");
        }
    else if(imgNum===3)
        {
        imageCrystal.attr(src="assets/images/red.jpg");
        }
    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(imageCrystal);
  }

  // This time, our click event applies to every single crystal on the page. Not just one.
  $(".crystal-image").on("click", function() {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    // alert("New score: " + counter);
    $("#your-score").text(counter);
    $("#wins-losses").html("Wins: " + wins + "<br>"+ "Losses: " + losses);

    if (counter === targetNumber) {
        wins++;        
        $("#wins-losses").html("You scored: " + counter + " You win!  Click Crystals to play again!"+ "<br>" + "Wins: " + wins + "<br>"+"Losses: " + losses);
        counter = 0;
        $("#your-score").text(counter);
        crystalValue = 0;
        numberOptions = [getRndInteger(1,12), getRndInteger(1,12), getRndInteger(1,12), getRndInteger(1,12)];
        targetNumber = getRndInteger(19,120);
        $("#number-to-guess").text(targetNumber);
    }

    else if (counter > targetNumber) {
        losses++;        
        $("#wins-losses").html("You scored: " + counter + " You lose!  Click Crystals to play again!"+ "<br>" + "Wins: " + wins + "<br>"+"Losses: " + losses);
        counter = 0;
        $("#your-score").text(counter);
        crystalValue = 0;
        numberOptions = [getRndInteger(1,12), getRndInteger(1,12), getRndInteger(1,12), getRndInteger(1,12)];
        targetNumber = getRndInteger(19,120);
        $("#number-to-guess").text(targetNumber);
    }

  });
});

