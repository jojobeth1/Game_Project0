console.log("Sanity Check: JS is working!");

var locationP1;
var locationP2;

$(document).ready(function(){


  //targeting the document window. On'keydown', variable "keyPlay" is passed through the function.
  $(document).keydown(function(keyPlay){
    keyPlay.preventDefault();
    // controls for player 1.


    if(keyPlay.keyCode === 65){
      //console.log('A was pressed');
      //if keyboard letter "A" is pressed, top left position of #theimage will move 100px over
      $("#theimage").stop().animate({
      left: '+=50'
      });
      //get's position for player 1
      var locationP1 = $("#theimage").position();
      x = parseInt(locationP1.left);

      //console.log(x);
    }

    //controls for player 2
    if(keyPlay.keyCode === 76){
      //console.log('L was pressed');
      $("#theimage2").stop().animate({
      left: '+=50'
      });
      //get's position for player 2
      var locationP2 = $("#theimage2").position();
      //y = parseInt(locationP2.left);
      //console.log(y);
    }
    //console.log("values", x,y);

    //Controls for resting the game
    if(keyPlay.keyCode === 32){
      //resets player 1 to starting position
      $("#theimage").css({
        "position": "relative",
        "left": "0"
      });
      $("#theimage2").css({
        "position": "relative",
        "left": "0"
      });
        console.log('space bar was pressed');
      }

    //console.log("x is", x);
  //  console.log("y is", y);

    /*if(x>y){
      $(".message").text("Player 1 is winning");
    }else if (y<x)
        {
          $(".message").text("Player 2 is winning");
        }
    */
  });
})







//function can be listener or handler

//assign a keys a right, l is right.







/*  $('document').keypress(function(e){if (e.which == 65){console.log("You pressed the right key");
      $('#theimage').animate({left: '-= 10px'});
    };
  });
*/
