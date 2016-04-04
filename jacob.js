/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
	"use strict";
	var h = $(window).height(); 
	var w = $(window).width(); 
	var h2 = (h / 2);
	var w2 = (w /2);
	setTimeout(function() {
		// XHR to request a JS and a CSS
		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'pages/black.html');
		xhr.send('');
		xhr = new XMLHttpRequest();
		xhr.open('GET', 'pages/soundtrack.html');
		xhr.send('');
		// preload image
		new Image().src = "";
	}, 1000);	
});

var count = 0;
function intro() {
	if (count < 1) {
		$(".slideDown").slideDown("fast");
		count = 1;
//		var eyy =  window.open("pages/black.html", "", "width=500, height=500");
	} else {
		var music = window.open("pages/soundtrack.html", "", "width='+w', height='+h'");
		var page1 = window.open("pages/black.html", "",  "width='+w', height='+h'");
		var page2 = window.open("pages/black.html", "", "width=500, height=500");
		var page3 = window.open("pages/black.html", "", "width=500, height=500");
		var page4 = window.open("pages/black.html", "", "width=500, height=500");
		music.focus();
	}
}
	
	
//	


//}
//    var soundtrack = window.open("pages/soundtrack.html", "", "width=100, height=100");
//	soundtrack.blur();
//	var page1 = window.open("pages/black.html", "", "width=500, height=500");
//	var page2 = window.open("pages/black.html", "", "width=500, height=500");
//	var page3 = window.open("pages/black.html", "", "width=500, height=500");
//	var page4 = window.open("pages/black.html", "", "width=500, height=500");
//	var soundtrack.focus();