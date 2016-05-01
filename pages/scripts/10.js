$(document).ready(function () {

    
    
    
    setTimeout(function(){ $(".sen1").velocity({ left: -1500},  {duration: 8500} ); }, 0);
    setTimeout(function(){ $(".img1").velocity({ left: -1500},  {duration: 8500} ); }, 500);

    setTimeout(function(){ $(".sen2").velocity({ left: -1500},  {duration: 8500} ); }, 2000);
    setTimeout(function(){ $(".run1").velocity({ left: -1500},  {duration: 8500} ); }, 2000);
    setTimeout(function(){ $(".sen3").velocity({ left: -1500},  {duration: 8500} ); }, 4500);
    setTimeout(function(){ $(".img2").velocity({ left: -1500},  {duration: 8500} ); }, 5000);
    setTimeout(function(){ $(".sen32").velocity({ left: -1500},  {duration: 8500} ); }, 6500);
    setTimeout(function(){ $(".hyp2").velocity({ left: -1500},  {duration: 8500} ); }, 7000);
    
    setTimeout(function(){
        var noose = document.getElementById("noose"); 
        noose.play();
    }, 6000);
    
    
    
    setTimeout(function(){ $(".sen4").velocity({ left: -1500},  {duration: 8500} ); }, 9800);
    setTimeout(function(){ $(".img3").velocity({ left: -1500},  {duration: 8500} ); }, 9000);
//
//    setTimeout(function(){ $(".sen5").velocity({ left: -1800},  {duration: 8500} ); }, 10500);
//    setTimeout(function(){ $(".img4").velocity({ left: -1500},  {duration: 8500} ); }, 11000);
    
    setTimeout(function(){ $(".sen1").velocity({ opacity: 0},  {duration: 0} ); }, 17400);
    setTimeout(function(){ $(".sen2").velocity({ opacity: 0},  {duration: 0} ); }, 17400);
    setTimeout(function(){ $(".sen3").velocity({ opacity: 0},  {duration: 0} ); }, 17400);
    setTimeout(function(){ $(".sen32").velocity({ opacity: 0},  {duration: 0} ); }, 17400);
    setTimeout(function(){ $(".sen4").velocity({ opacity: 0},  {duration: 0} ); }, 17400);
    
    setTimeout(function(){ $( "#page4" ).css("background-color", "#ea272d"); }, 17500);
    setTimeout(function(){ $( "#page4" ).css("background-color", "black"); }, 17520);
    
    
    
    setTimeout(function(){ location.assign("11.html") }, 18000);
    
    
 
});