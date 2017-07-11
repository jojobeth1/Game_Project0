console.log("Sanity Check: JS is working!");

$(document).ready(function(){
  //let car1 = $('#theimage')
  $(document).keydown(function(element){
    if(element.keyCode === 65){
      console.log('hello');
      $("#theimage").stop().animate({
        left: '+=20'
      /*$("#theimage").css({
        "border":"5px solid blue",
        "right":"100px"*/
      });
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
