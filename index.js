var colors = ["red","green","blue","yellow"];
var nmbrRandom = [];
var clrOrder = [];
var numberOfSqrs = document.querySelectorAll(".sqr").length;

nmbrRandom = Math.random();
nmbrRandom = nmbrRandom * 4;
nmbrRandom = Math.floor(nmbrRandom);

console.log(nmbrRandom);

clrOrder.push(colors[nmbrRandom]);

console.log(clrOrder);


if(clrOrder == "red"){
    $("#sqrR").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    var song = $("#songR")[0];
    song.play();
} else if(clrOrder == "green"){
    $("#sqrG").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    var song = $("#songG")[0];
    song.play();
} else if(clrOrder == "blue"){
    $("#sqrB").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    var song = $("#songB")[0];
    song.play();
} else if(clrOrder == "yellow"){
    $("#sqrY").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    var song = $("#songY")[0];
    song.play();
}


for(var i = 0; i<numberOfSqrs;i++){
    document.querySelectorAll(".sqr")[i].addEventListener("click", sqrClick);
}

function sqrClick(){
    console.log();
}







