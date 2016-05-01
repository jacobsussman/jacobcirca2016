/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {

	var h = $(window).height();
	var w = $(window).width();
	var h2 = (h / 2);
	var w2 = (w /2);
	var count = 0;
	var soundtrack;
        	scream = new Audio("../media/sound/scream1.mp3");	


	
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
		setTimeout(function(){ location.assign("pages/musicWarning.html"); }, 350);
		setTimeout(function(){ soundtrack.close(); }, 299);
		setTimeout(function(){ window.open("pages/soundtrack.html", "", "width=10, height=10"); }, 300);
		
		

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

        scream.play();
        
        setTimeout(function(){ location.assign("family.html");}, 805);	
	});
    $( ".ani5" ).click(function() {
      
      
		scream.play();
        setTimeout(function(){ location.assign("family.html");}, 805);
		
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
		
	});
    $( ".ani7" ).click(function() {
      
        location.assign("mirror.html"); 
		
	});
     $( ".ani8" ).click(function() {
      
        location.assign("mirror.html"); 
		
	});
     $( ".ani9" ).click(function() {
      
//		scream.play();
    location.assign("mirror.html"); 
		
	});
    $( ".ani13" ).click(function() {
      
        setTimeout(function(){location.assign("5.html");}, 805);
		
	});
    $( ".ani17" ).click(function() {
      
        setTimeout(function(){location.assign("6.html");}, 805);
		
	});
     $( ".ani21" ).click(function() {
      
        setTimeout(function(){location.assign("62.html");}, 805);
		
	});
    $( ".ani22" ).click(function() {

        setTimeout(function(){$(".pxlH1").css("visibility","visible");}, 100);
		setTimeout(function(){$(".pxlH2").css("visibility","visible");}, 190);
		setTimeout(function(){$(".pxlH3").css("visibility","visible");}, 400);
		setTimeout(function(){$(".pxlH4").css("visibility","visible");}, 425);
		setTimeout(function(){$(".pxlH5").css("visibility","visible");}, 150);
		setTimeout(function(){$(".pxlH6").css("visibility","visible");}, 170);
		setTimeout(function(){$(".pxlH7").css("visibility","visible");}, 300);
		setTimeout(function(){$(".pxlH8").css("visibility","visible");}, 605);
    });
     $( ".ani23" ).click(function() {
        location.assign("parents.html");

		
	});
    $( ".ani24" ).click(function() {
        var vid = document.getElementById("dazed"); 
        vid.play();
        setTimeout(function(){ $("#dazed").velocity({ top: 300},  {duration: 4500} ); }, 0);
        setTimeout(function(){ $("#dazed").css("visibility","hidden"); }, 14000);
        setTimeout(function(){location.assign("62.html");}, 8805);


		
	});
    $( ".ani25" ).click(function() {
      
//		scream.play();
        setTimeout(function(){location.assign("8.html");}, 0);

		
	});
    
    $( ".ani26" ).click(function() {
        
        setTimeout(function(){$(".hate").css("visibility","visible");}, 0);
                setTimeout(function(){location.assign("hell.html");}, 2000);

//        setTimeout(function(){$(".nah").css("visibility","visible");}, 0);
//        setTimeout(function(){$(".q1").css("text-decoration","line-through");}, 0);

        
	});
    $( ".ani27" ).click(function() {
      
        setTimeout(function(){location.assign("person.html");}, 0);

		
	});
     $( ".ani28" ).click(function() {
      
        setTimeout(function(){location.assign("capital.html");}, 0);

		
	});
   

    $( ".ani29" ).click(function() {
      
        setTimeout(function(){location.assign("9.html");}, 0);

		
	});
    $( ".ani30" ).click(function() {
      
//        setTimeout(function(){$(".type1").css("visibility","visible");}, 100);
//         setTimeout(function(){$(".type1").css("visibility","visible");}, 480);
        setTimeout(function(){$(".type3").css("visibility","visible");}, 280);
		setTimeout(function(){$(".type2").css("visibility","visible");}, 190);
        setTimeout(function(){ $( ".type1" ).velocity({
    scale: 3, translateY:-150},  1500 ); }, 750);
        setTimeout(function(){ $( ".type2" ).velocity({
    scale: 3, translateY:-150, translateX:-75},  1200 ); }, 850);
        setTimeout(function(){ $( ".type2" ).velocity({
    scale: 0.3, translateY:-150 },  1500 ); }, 2051);
        setTimeout(function(){ $( ".type2" ).velocity({
    scale: 3, translateY:-150},  1200 ); }, 2251);
          setTimeout(function(){ $( ".type1" ).velocity({
    scale: 0.3, translateY:-150},  1500 ); }, 750);
        setTimeout(function(){ $( ".type3" ).velocity({
    scale: 3, translateY:-150, translateX:-75},  1200 ); }, 850);
        setTimeout(function(){ $( ".type3" ).velocity({
    scale: 0.3, translateY:-150 },  1500 ); }, 2051);
        setTimeout(function(){ $( ".type3").velocity({
    scale: 3, translateY:-150},  1200 ); }, 2251);
		
	});
    $( ".ani31" ).click(function() {
      
        setTimeout(function(){location.assign("debt.html");}, 0);

		
	});
    $( ".ani32" ).click(function() {
      
        setTimeout(function(){location.assign("debt.html");}, 0);

		
	});
     $( ".ani33" ).click(function() {
      
        setTimeout(function(){location.assign("10.html");}, 0);

		
	});
      $( ".ani37" ).click(function() {
      
        setTimeout(function(){location.assign("11.html");}, 0);

		
	});
       $( ".ani41" ).click(function() {
      
//		scream.play();
           location.assign("wasitnah.html");
		
	});
        $( ".ani42" ).click(function() {
      
//		scream.play();
        location.assign("wasitnah.html");

		
	});
        $( ".ani43" ).click(function() {
      
//		scream.play();
        location.assign("wasitnah.html");

		
	});
     $( ".ani44" ).click(function() {
      
        setTimeout(function(){$(".syr1").css("visibility","visible");}, 100);
		setTimeout(function(){$(".syr2").css("visibility","visible");}, 190);
		setTimeout(function(){$(".syr3").css("visibility","visible");}, 400);
         
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
	
});
	



