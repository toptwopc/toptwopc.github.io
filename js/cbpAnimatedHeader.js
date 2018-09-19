/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpAnimatedHeader = (function() {

	var docElem = document.documentElement,
		header = document.querySelector( '.navbar-default' ),
		topForm = document.querySelector('.navbar-form'),
		didScroll = false,
		changeHeaderOn = 20;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 150 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			classie.add( header, 'navbar-shrink' );
			topForm.style.visibility="visible";
			topForm.style.marginTop="0px";
			document.body.getElementsByTagName("header")[0].style.visibility="hidden";
		}
		else {
			classie.remove( header, 'navbar-shrink' );
			topForm.style.visibility="hidden";
			
			topForm.style.marginTop="-300px";
			document.body.getElementsByTagName("header")[0].style.visibility="visible";
			

		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();