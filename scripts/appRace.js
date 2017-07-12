console.log("Sanity Check: JS is working!");

var locationP1;
var locationP2;

$(document).ready(function(){
  //targeting the document window. On'keydown', variable "keyPlay" is passed through the function.
  $(document).keydown(function(keyPlay){
    // controls for player 1.
        if(keyPlay.keyCode === 65){
      //if keyboard letter "A" is pressed, top left position of #theimage will move 100px over
          $("#theimage").stop().animate({left:'+=50'},"1000","swing")
          //let p1x = $("#theimage").offset();
          //console.log(p1x, "found") //886.5
          //return $("#theimage").offset();
          if ($("#theimage").offset.left >= 888.5){console.log("player 1 winner")}
        }


    //controls for player 2
        if(keyPlay.keyCode === 76){
        //console.log('A was pressed');
        $("#theimage2").stop().animate({left:'+=50'},"1000","swing");
          //var p2x = $("#theimage2").offset();
          //console.log(p2x, "location found");
        }

    //Controls for resting the game
        if(keyPlay.keyCode === 32){
        //resets player 1 to starting position
          $("#theimage").css({
          "position": "relative",
          "left": "0"
          })
          $("#theimage2").css({
            "position": "relative",
            "left": "0"
          })
          //console.log('space bar was pressed');
        }
        // win the game
        //if (886.5
        /*
        if(p1x > p2x == true ){
          $(".message").text("Player 1 is winning");
        }else
            {
              $(".message").text("Player 2 is winning");
            }
        */
    })
})
    //console.log("x is", x);
  //  console.log("y is", y);
