import $ from 'jquery';

(function($) {

	"use strict";
		
	console.log('%c Afros Blog - thatAfro', 'font-size: 12px;');


	function openNav() {
		document.getElementById("sideMenu").style.width = "250px";
		// document.getElementById("main").style.marginLeft = "250px";
		// document.body.style.backgroundColor = "rgba(0,0,0,0.5)";
	}
	
	function closeNav() {
		document.getElementById("sideMenu").style.width = "0";
		// document.getElementById("main").style.marginLeft = "0";
		// document.body.style.backgroundColor = "white";
	}
	
})($);
