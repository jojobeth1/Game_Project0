console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  //targeting the document window. On'keydown', variable "element" is passed through the function.
  $(document).keydown(function(keyPlay){
    if(keyPlay.keyCode === 65){
      console.log('A was pressed');

      $("#theimage").stop().animate({
      left: '+=100'
      });

      locationX = $("#theimage").position();
      console.log(locationX);

      locationX2 = $("#theimage2").position();
      console.log(locationX2);

      if (locationX.left >= 1000){
        alert("Player 1 is the Winner");
      }
      if (locationX2.left >= 1000){
        alert("Player 2 is the Winner");
      }


    }
    if(keyPlay.keyCode === 76){
      console.log('L was pressed');
      $("#theimage2").stop().animate({
      left: '+=100'
      });
    }
    if(keyPlay.keyCode === 32){
      console.log('space bar was pressed');
      /*$("#theimage2").stop().animate({
      left: '+=50'
    });*/
    }
  })
})
//function can be listener or handler

//assign a keys a right, l is right.







/*  $('document').keypress(function(e){if (e.which == 65){console.log("You pressed the right key");
      $('#theimage').animate({left: '-= 10px'});
    };
  });
*/
