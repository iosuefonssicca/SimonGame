
var randomNumber = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var randomChosenColor;
var gamePattern = [];
var userClickedPattern = [];

function nextSequence(){
    
    randomNumber = Math.random();
    randomNumber = randomNumber * 4;
    randomNumber = Math.floor(randomNumber);

    randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("./" + randomChosenColor + ".mp3");
    audio.play();
    
}

$(".sqr").click(function (){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    var audio = new Audio("./" + userChosenColour + ".mp3");
    audio.play();
});

nextSequence();
console.log(gamePattern);


