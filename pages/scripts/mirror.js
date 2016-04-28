/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
   
	
    
	setTimeout(function(){ $( "h1" ).css("visibility", "visible"); }, 150);
setTimeout(function(){ $( "h2" ).css("visibility", "visible"); }, 450);
			setTimeout(function(){ $( "h3" ).css("visibility", "visible"); }, 900);
    setTimeout(function(){ $( "h4" ).css("visibility", "visible"); }, 1300);
    
    	setTimeout(function(){ $( ".fullScreen" ).css("background-color", "white"); }, 2800);
	setTimeout(function(){ $( ".fullScreen" ).css("background-color", "#5C3ECA"); }, 2880);
	setTimeout(function(){ $( ".fullScreen" ).css("background-color", "#FBDD01"); }, 3000);
	setTimeout(function(){ $( ".fullScreen" ).css("background-color", "#white"); }, 3040);
	setTimeout(function(){ $( ".fullScreen" ).css("background-color", "#5C3ECA"); }, 3130);

    setTimeout(function(){ $(".mirror").velocity({ opacity: 1},  {duration: 120} ); }, 3550);
   setTimeout(function(){  $(".mirror").velocity({scale: "4,4",}, {duration: 700,}); }, 3550);
    
    setTimeout(function(){ $( ".fullScreen" ).css("background-color", "white"); }, 5000);
	setTimeout(function(){ $( ".fullScreen" ).css("background-color", "black"); }, 5180);
	setTimeout(function(){ $( ".fullScreen" ).css("background-color", "white"); }, 5300);
	setTimeout(function(){ $( ".fullScreen" ).css("background-color", "black"); }, 5340);
	setTimeout(function(){ $( ".fullScreen" ).css("background-color", "white"); }, 5390);
    setTimeout(function(){ location.assign("4.html"); }, 5500);
    
    
});
    

