(function($) {
  "use strict";
var giantdesign_trigger = false;
	
function initializegiantdesign() {	
	giantdesign_trigger = true;	
	jQuery('html').bind('contextmenu', function(e) {
		return false;
	});
	
	if (jQuery('.giantdesign #slides').length != 0) {
		
		if (jQuery('.giantdesign #slides li').length < 2) {
			jQuery('.giantdesign #slides').superslides({
				play: false,
				animation: 'fade',
				hashchange: false,
				pagination: false
			});
		} else {		
			jQuery('.giantdesign #slides').superslides({
				play: 5000,
				animation: 'fade',
				hashchange: false,
				pagination: false
			});
		}
	}
	
	// MAIN DIMENSION SET WIDTH
	(function() {
		function mainInit() {			
			var main = jQuery('.giantdesign #main'),
			ww = jQuery(window).width(),
			mainWidth = ww-250;
			
			if (ww > 900) {
				main.css({
					width: mainWidth+"px"
				});
			}
			
			// center content
			var mainContent = jQuery('.giantdesign .content .content-inner'),
				contentHeight = mainContent.height(),
				parentHeight = main.height(),
				topMargin = (parentHeight - contentHeight) / 2;
				
			mainContent.css({
				"padding-top" : topMargin+"px"
			});
		}
		
		jQuery(window).on("resize", mainInit);
		jQuery(document).on("ready", mainInit);
	})();
	
	// QUOTES
	if (jQuery('.giantdesign .bxslider li').length < 2) {
	} else {
		jQuery('.giantdesign .bxslider').bxSlider({
			auto: false,
			easing: 'ease-in-out',		
			touchEnabled: true,
			oneToOneTouch: true,
			pageCustom: '#bx-pager',
			nextSelector: '#bx-next',
			prevSelector: '#bx-prev',
			nextText: 'next',
			prevText: 'prev',
			pager: false,
			speed: 650,
			pause: 8500
		});
	}
		
	var formShowing = false;
}

// Document Ready
jQuery(document).ready(function($){
	giantdesign_trigger = true;
	initializegiantdesign();	
	jQuery(window).on("resize", initializegiantdesign());
});

if (giantdesign_trigger == false) {
	setTimeout(initializegiantdesign, 800);
}})(jQuery);