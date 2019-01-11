$(document).ready(function() 
{
  //creating a function to get random number between min & max
    function getRndInteger(min, max) 
  {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  };

  var targetNumber = getRndInteger(9,120);
  $("#number-to-guess").text(targetNumber);

  var counter = 0;
  var wins = 0;
  var losses = 0;

  var firstNum = getRndInteger(1,12);
  var secondNum = getRndInteger(1,12);
  var thirdNum = getRndInteger(1,12);
  var fourthNum = getRndInteger(1,12);
  //creating a function that resets the game and the desired values
  function reset()
  {
    counter = 0;
    $("#your-score").text(counter);
    targetNumber = getRndInteger(19,120);
    $("#number-to-guess").text(targetNumber);
    firstNum = getRndInteger(1,12);
    secondNum = getRndInteger(1,12);
    thirdNum = getRndInteger(1,12);
    fourthNum = getRndInteger(1,12);
  }

  function winner()
  {
    wins++;        
    $("#wins-losses").html("You scored: " + counter + " You win!  Click Crystals to play again!"+ "<br>" + "Wins: " + wins + "<br>"+"Losses: " + losses);
    reset();
  }

  function loser()
  {
    losses++;        
    $("#wins-losses").html("You scored: " + counter + " You lose!  Click Crystals to play again!"+ "<br>" + "Wins: " + wins + "<br>"+"Losses: " + losses);
    reset();
  }
  //
  $('#first').on('click', function(){
    counter += firstNum;
    $("#your-score").text(counter);
    $("#wins-losses").html("Wins: " + wins + "<br>"+ "Losses: " + losses);
          //sets win/lose conditions
        if (counter === targetNumber){
          winner();
        }
        else if ( counter > targetNumber){
          loser();
        }  
    }) 
    $('#second').on ('click', function(){
        counter += secondNum;
        $("#your-score").text(counter);
        $("#wins-losses").html("Wins: " + wins + "<br>"+ "Losses: " + losses);
              //sets win/lose conditions
            if (counter === targetNumber){
              winner();
            }
            else if ( counter > targetNumber){
              loser();
            }  
        }) 
        $('#third').on ('click', function(){
            counter += thirdNum;
            $("#your-score").text(counter);
            $("#wins-losses").html("Wins: " + wins + "<br>"+ "Losses: " + losses);
                  //sets win/lose conditions
                if (counter === targetNumber){
                  winner();
                }
                else if ( counter > targetNumber){
                  loser();
                }  
            }) 
            $('#fourth').on ('click', function(){
                counter += fourthNum;
                $("#your-score").text(counter);
                $("#wins-losses").html("Wins: " + wins + "<br>"+ "Losses: " + losses);
                      //sets win/lose conditions
                    if (counter === targetNumber){
                      winner();
                    }
                    else if ( counter > targetNumber){
                      loser();
                    }  
                }); 
            }); 


