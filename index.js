
var randomNumber = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var randomChosenColor;
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

$(document).keypress(function() {
    if (!started) {
      started = true;
      nextSequence();
    }
});

$(".sqr").click(function (){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatedPress(userChosenColour);
});

function checkAnswer(currentLevel){
    if userClickedPattern[currentLevel] === gamePattern[currentLevel]{
        console.log(Right);
    }
}


function nextSequence(){
    level++;
    $("#ttl0").text("Level " + level);
    randomNumber = Math.random();
    randomNumber = randomNumber * 4;
    randomNumber = Math.floor(randomNumber);

    randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
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
