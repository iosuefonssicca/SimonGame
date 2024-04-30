var colors = ["red","green","blue","yellow"];
var nmbrRandom = [];
var clrOrder = [];
var numberOfSqrs = document.querySelectorAll(".sqr").length;
var usrSequence = [];


function rdmSequence(){

nmbrRandom = Math.random();
nmbrRandom = nmbrRandom * 4;
nmbrRandom = Math.floor(nmbrRandom);


clrOrder.push(colors[nmbrRandom]);


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

}


// for(var i = 0; i<numberOfSqrs;i++){
//     console.log(numberOfSqrs);
//     var id = [];
//     id = this.id;
//     document.querySelectorAll(".sqr")[i].addEventListener("click", sqrClick);
// }

$(".sqr").click(function(){
        var usrClickedColor = $(this).attr("id");

        usrSequence.push(usrClickedColor);

});



function sqrClick(){
    console.log();
}







