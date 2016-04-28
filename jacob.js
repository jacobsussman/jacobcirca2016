/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {

	var h = $(window).height();
	var w = $(window).width();
	var h2 = (h / 2);
	var w2 = (w /2);
	var count = 0;
	var soundtrack;
	var scream = new Audio("../media/sound/scream1.mp3");	

	
	$( "#intro" ).click(function() {
		if (count < 1) {
			soundtrack = window.open("pages/soundtrack.html", "", "width=10, height=10");
			soundtrack.close();
			$(".slideDown").slideDown("fast");
			count = 1;
		} else {
			
		
    			setTimeout(function(){ $( "body" ).css("background-color", "black"); }, 25);
				setTimeout(function(){ $( "body" ).css("background-color", "#ea272d"); }, 50);
				setTimeout(function(){ $( "body" ).css("background-color", "black"); }, 75);
				setTimeout(function(){ $( "body" ).css("background-color", "#ea272d"); }, 100);
   				setTimeout(function(){ $( "body" ).css("background-color", "black"); }, 150);
				setTimeout(function(){ $( "body" ).css("background-color", "#ea272d"); }, 225);
		
			

			setTimeout(function(){ location.assign("pages/1.html");}, 250);
		}
	});

	
	$( ".ani1" ).click(function() {
		setTimeout(function(){ $( ".none1" ).css("visibility", "visible"); }, 50);
		setTimeout(function(){ $( ".none2" ).css("visibility", "visible"); }, 100);
		setTimeout(function(){ $( ".none1" ).css("visibility", "hidden"); }, 125);
		setTimeout(function(){ $( ".none3" ).css("visibility", "visible"); }, 150);
		setTimeout(function(){ $( ".none2" ).css("visibility", "hidden"); }, 250);
		setTimeout(function(){ $( ".none3" ).css("visibility", "hidden"); }, 300);
//		setTimeout(function(){ location.assign("2.html"); }, 350);
		setTimeout(function(){ location.assign("musicWarning.html"); }, 350);
		setTimeout(function(){ soundtrack.close(); }, 299);
		setTimeout(function(){ window.open("soundtrack.html", "", "width=10, height=10"); }, 300);
		
		

	});
	
	$( ".ani2" ).click(function() {
		
		setTimeout(function(){$(".pxlH1").css("visibility","visible");}, 100);
		setTimeout(function(){$(".pxlH2").css("visibility","visible");}, 190);
		setTimeout(function(){$(".pxlH3").css("visibility","visible");}, 400);
		setTimeout(function(){$(".pxlH4").css("visibility","visible");}, 425);
		setTimeout(function(){$(".pxlH5").css("visibility","visible");}, 150);
		setTimeout(function(){$(".pxlH6").css("visibility","visible");}, 170);
		setTimeout(function(){$(".pxlH7").css("visibility","visible");}, 300);
		setTimeout(function(){$(".pxlH8").css("visibility","visible");}, 605);
	
		
	});
	$( ".ani3" ).click(function() {
		setTimeout(function(){$(".fire5").css("visibility","visible");}, 5);
		setTimeout(function(){$(".fire1").css("visibility","visible");}, 100);
		setTimeout(function(){$(".fire2").css("visibility","visible");}, 190);
		setTimeout(function(){$(".fire3").css("visibility","visible");}, 400);
		setTimeout(function(){$(".fire4").css("visibility","visible");}, 425);

	
		
	});
	$( ".ani4" ).click(function() {
		
    location.assign("family.html"); 		
	});
    $( ".ani5" ).click(function() {
      
//		scream.play();
//        setTimeout(function(){location.assign("3.html");}, 805);
    location.assign("family.html"); 		

		
	});
$( ".ani6" ).click(function() {
      
        setTimeout(function(){$(".frown1").css("visibility","visible");}, 100);
		setTimeout(function(){$(".frown2").css("visibility","visible");}, 190);
		setTimeout(function(){$(".frown3").css("visibility","visible");}, 400);
		setTimeout(function(){$(".frown4").css("visibility","visible");}, 425);
     setTimeout(function(){$(".frown5").css("visibility","visible");}, 100);
		setTimeout(function(){$(".frown6").css("visibility","visible");}, 190);
		setTimeout(function(){$(".frown7").css("visibility","visible");}, 400);
		setTimeout(function(){$(".frown8").css("visibility","visible");}, 425);
     setTimeout(function(){$(".frown9").css("visibility","visible");}, 100);
		setTimeout(function(){$(".frown10").css("visibility","visible");}, 190);
		setTimeout(function(){$(".frown11").css("visibility","visible");}, 400);
		setTimeout(function(){$(".frown12").css("visibility","visible");}, 425);
    setTimeout(function(){$(".frown13").css("visibility","visible");}, 100);
		setTimeout(function(){$(".frown14").css("visibility","visible");}, 190);
		setTimeout(function(){$(".frown15").css("visibility","visible");}, 400);
		setTimeout(function(){$(".frown16").css("visibility","visible");}, 425);
     setTimeout(function(){$(".frown17").css("visibility","visible");}, 100);
		setTimeout(function(){$(".frown18").css("visibility","visible");}, 190);
		setTimeout(function(){$(".frown19").css("visibility","visible");}, 400);
		setTimeout(function(){$(".frown20").css("visibility","visible");}, 425);
     setTimeout(function(){$(".frown21").css("visibility","visible");}, 100);
		setTimeout(function(){$(".frown22").css("visibility","visible");}, 190);
		setTimeout(function(){$(".frown23").css("visibility","visible");}, 400);
		setTimeout(function(){$(".frown24").css("visibility","visible");}, 425);
//    
//        for (i = 0; i < 12; i++) { 
//        var color = 0;
//            
//        if (color < 1) {
//        var h = document.createElement("P")                // Create a <h1> element
//        var t = document.createTextNode(":(");     // Create a text node
//        h.appendChild(t);
//        document.getElementById("h").className += "fontRed abs";
//        document.getElementById("p2").style.color = "blue";

      
		
	});
    $( ".ani7" ).click(function() {
      
        location.assign("mirror.html"); 
		
	});
     $( ".ani9" ).click(function() {
      
//		scream.play();
    location.assign("mirror.html"); 
		
	});
    $( ".ani13" ).click(function() {
      
//		scream.play();
        setTimeout(function(){location.assign("5.html");}, 805);

		
	});
    $( ".ani17" ).click(function() {
      
//		scream.play();
        setTimeout(function(){location.assign("6.html");}, 805);

		
	});
     $( ".ani21" ).click(function() {
      
//		scream.play();
        setTimeout(function(){location.assign("7.html");}, 805);

		
	});
	
     $( ".ani25" ).click(function() {
      
//		scream.play();
        setTimeout(function(){location.assign("8.html");}, 805);

		
	});
     $( ".ani29" ).click(function() {
      
//		scream.play();
        setTimeout(function(){location.assign("9.html");}, 805);

		
	});
     $( ".ani33" ).click(function() {
      
//		scream.play();
        setTimeout(function(){location.assign("10.html");}, 805);

		
	});
      $( ".ani37" ).click(function() {
      
//		scream.play();
        setTimeout(function(){location.assign("11.html");}, 805);

		
	});
       $( ".ani41" ).click(function() {
      
//		scream.play();
        setTimeout(function(){location.assign("12.html");}, 805);

		
	});
           $( ".ani45" ).click(function() {
      
//		scream.play();
        setTimeout(function(){location.assign("13.html");}, 805);

		
	});
     $( ".ani49" ).click(function() {
      
//		scream.play();
        setTimeout(function(){location.assign("13.html");}, 805);

		
	});
	
	
	


	$( ".fontRed" ).hover(function() {
		$( ".fontRed" ).css("text-decoration", "underline");
	}, function() {
    	$( ".fontRed" ).css("text-decoration", "none");
	});
	$( ".fontPurple" ).hover(function() {
		$( ".fontPurple" ).css("text-decoration", "underline");
	}, function() {
    	$( ".fontPurple" ).css("text-decoration", "none");
	});
	
	$( ".fontYellow" ).hover(function() {
		$( ".fontYellow" ).css("text-decoration", "underline");
	}, function() {
    	$( ".fontYellow" ).css("text-decoration", "none");
	});
    $( ".fontGrey" ).hover(function() {
		$( ".fontGrey" ).css("text-decoration", "underline");
	}, function() {
    	$( ".fontGrey" ).css("text-decoration", "none");
	});
	
	
	
//	
//	(function makeDiv(){
//    var divsize = ((Math.random()*100) + 50).toFixed();
//    var color = '#'+ Math.round(0xffffff * Math.random()).toString(16);
//    $newdiv = $('<div/>').css({
//        'width':divsize+'px',
//        'height':divsize+'px',
//        'background-color': color
//    });
//    
//    var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
//    var posy = (Math.random() * ($(document).height() - divsize)).toFixed();
//    
//    $newdiv.css({
//        'position':'absolute',
//        'left':posx+'px',
//        'top':posy+'px',
//        'display':'none'
//    }).appendTo( 'body' ).fadeIn(100).delay(300).fadeOut(200, function(){
//       $(this).remove();
//       makeDiv(); 
//    }); 
//})
//	();
//
//	
	
	

});

