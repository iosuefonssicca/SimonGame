
var randomNumber = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var randomChosenColor;
var gamePattern = [];

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

$(".sqr").fadeIn(100).fadeOut(100).fadeIn(100).click(function (){
    var audio = new Audio("./" + randomChosenColor + ".mp3");
    audio.play();
});

nextSequence();
console.log(gamePattern);


