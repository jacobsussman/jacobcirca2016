$(document).ready(function () {
	



    $(".opac").velocity({ opacity: 1},  {duration: 3020} );
    setTimeout(function(){ $(".opac").velocity({ opacity: 0},  {duration: 3020} ); }, 3021);

    
    setTimeout(function(){ $( "body" ).css("background-color", "black"); }, 6025);
    setTimeout(function(){ $( "body" ).css("background-color", "#ea272d"); }, 6050);
    setTimeout(function(){ $( "body" ).css("background-color", "black"); }, 6075);
    setTimeout(function(){ $( "body" ).css("background-color", "#ea272d"); }, 6100);
   	setTimeout(function(){ $( "body" ).css("background-color", "black"); }, 6150);
    setTimeout(function(){ $( "body" ).css("background-color", "#ea272d"); }, 6225);
    
setTimeout(function(){ location.assign("4.html"); }, 6242);


});