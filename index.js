
var randomNumber = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var randomChosenColor;
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 1;

$(document).keypress(function() {
    if (!started) {
      $("#ttl0").text("Level " + level);
      rdmSequence();
      started = true;
    }
});

$(".sqr").click(function (){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatedPress(userChosenColour);
});



function nextSequence(){
    
    randomNumber = Math.random();
    randomNumber = randomNumber * 4;
    randomNumber = Math.floor(randomNumber);

    randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    level++;
}

function animatedPress(currentColor){
   $("#" + currentColor).addClass("pressed");

   setTimeout(function(){
    $("#" + currentColor).removeClass("pressed");
   },100);
}

function playSound(name){
    var audio = new Audio("./" + name + ".mp3");
    audio.play();
}
