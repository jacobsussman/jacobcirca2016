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
	
	
	
	
//	
//	$( ".ani1" ).hover( function() {
//		TweenLite.to($(this), 1, {margin-left:800});
//	});
//	

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
	
	
	
	
	
	
	
	
//	$( ".ani1" ).hover(function() {
//    	$( this ).css("color", "#fae003");
//	}, function() {
//    $( this ).css("color", "#ea272d");
//	});


			
//$( ".ani1" ).click(function() {
//	$( "none1" ).slideUp(200);
//	$( "none2" ).delay(200).slideDown(200);
//	$( "none3" ).delay(400).slideUp(200);
//});
//		var music = window.open("pages/music.html", "", "width=10, height=10");
//		var page1 = window.open("pages/black.html", "",  "width='+w', height='+h'");
//		var page2 = window.open("pages/black.html", "", "width=500, height=500");
//		var page3 = window.open("pages/black.html", "", "width=500, height=500");
//		var page4 = window.open("pages/black.html", "", "width=500, height=500");
//		music.focus();
	

});

