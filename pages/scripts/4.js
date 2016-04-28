$(document).ready(function () {
    
    var directionsService = new google.maps.DirectionsService();
var directionsRoute = directionsService.route({
    destination: new google.maps.LatLng(33.8974391098385,-116.6136966801696),
    origin: new google.maps.LatLng(33.9063,-116.56344000000001),
    travelMode: google.maps.TravelMode.DRIVING
}, function (DirectionsResult, DirectionsStatus) {
    var routeSequence = StreetviewSequence('#route', {
        route: DirectionsResult,
        duration: 5000,
        loop: true,
        width: 585,
        height: 325
    });

    routeSequence.done(function(player) {
        player.play();
    });
});
    
//    
//    
//    setTimeout(function(){ $(".sen1").velocity({ left: -1600},  {duration: 6500} ); }, 0);
//    setTimeout(function(){ $(".sen2").velocity({ left: -1500},  {duration: 6500} ); }, 2000);
//    setTimeout(function(){ $(".sen3").velocity({ left: -1500},  {duration: 6500} ); }, 4000);
//    setTimeout(function(){ $(".sen32").velocity({ left: -1500},  {duration: 6500} ); }, 6000);
//    setTimeout(function(){ $(".sen4").velocity({ left: -1500},  {duration: 6500} ); }, 8000);
//    setTimeout(function(){ $(".sen5").velocity({ left: -1500},  {duration: 6500} ); }, 10000);
//    
//    
    
 
});