
var randomNumber = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var randomChosenColor;
var gamePattern = [];
var userClickedPattern = [];

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

nextSequence();
console.log(gamePattern);


