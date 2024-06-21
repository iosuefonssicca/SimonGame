
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
}

nextSequence();
console.log(gamePattern);


