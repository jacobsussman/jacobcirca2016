/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {

	var h = $(window).height();
	var w = $(window).width();
	var h2 = (h / 2);
	var w2 = (w /2);
	var count = 0;
	
	$( "#intro" ).click(function() {
		if (count < 1) {
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
		setTimeout(function(){ window.open("musicWarning.html", "",  "width='+(w*0.5)', height='+(h*0.5)'"); }, 350);
		setTimeout(function(){ window.open("soundtrack.html", "", "width=10, height=10"); }, 300);
		
		setTimeout(function(){ window.open("3.html", "",  "width='+w', height='+h'"); }, 5000);
		setTimeout(function(){ window.open("2.html", "",  "width='+w', height='+h'"); }, 7000);
		

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
		
		setTimeout(function(){$(".fire1").css("visibility","visible");}, 100);
		setTimeout(function(){$(".fire2").css("visibility","visible");}, 190);
		setTimeout(function(){$(".fire3").css("visibility","visible");}, 400);
		setTimeout(function(){$(".fire4").css("visibility","visible");}, 425);

	
		
	});
	$( ".ani4" ).click(function() {
		
		$(".fullScreen").css("visibility","visible");
	
		
	});
	
	


	$( ".fontRed" ).hover(function() {
		$( this ).css("text-decoration", "underline");
	}, function() {
    	$( this ).css("text-decoration", "none");
	});
	$( ".fontPurple" ).hover(function() {
		$( this ).css("text-decoration", "underline");
	}, function() {
    	$( this ).css("text-decoration", "none");
	});
	
	$( ".fontYellow" ).hover(function() {
		$( this ).css("text-decoration", "underline");
	}, function() {
    	$( this ).css("text-decoration", "none");
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

