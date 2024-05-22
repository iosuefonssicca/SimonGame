var colors = ["red","green","blue","yellow"];
var nmbrRandom = [];
var clrOrder = [];
var usrSequence = [];
var gameSequence = [];
var started = false;
var level = 0;

$(document).keypress(function() {
    if (!started) {
      $("#ttl0").text("Level " + level);
      rdmSequence();
      started = true;
    }
  });
  

$(".sqr").click(function (){
    var usrClickedColor = $(this).attr("id");
    usrSequence.push(usrClickedColor);
    userClick(usrClickedColor);
});

function rdmSequence(){

level++;
$("#ttl0").text("Level " + level);

nmbrRandom = Math.random();
nmbrRandom = nmbrRandom * 4;
nmbrRandom = Math.floor(nmbrRandom);

clrOrder.push(colors[nmbrRandom]);

if(clrOrder == "red"){
    $("#sqrR").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    var song = $("#songR")[0];
    song.play();
    gameSequence.push("sqrR");
} else if(clrOrder == "green"){
    $("#sqrG").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    var song = $("#songG")[0];
    song.play();
    gameSequence.push("sqrG");
} else if(clrOrder == "blue"){
    $("#sqrB").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    var song = $("#songB")[0];
    song.play();
    gameSequence.push("sqrB");
} else if(clrOrder == "yellow"){
    $("#sqrY").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    var song = $("#songY")[0];
    song.play();
    gameSequence.push("sqrY");
}

console.log(gameSequence);

}

function userClick(idSqr){
    if(idSqr == "sqrR" ){
        $("#sqrR").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        var song = $("#songR")[0];
        song.play();
    } else if(idSqr == "sqrG"){
        $("#sqrG").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        var song = $("#songG")[0];
        song.play();
    } else if(idSqr == "sqrB"){
        $("#sqrB").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        var song = $("#songB")[0];
        song.play();
    } else if(idSqr == "sqrY"){
        $("#sqrY").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        var song = $("#songY")[0];
        song.play();
    }
}








