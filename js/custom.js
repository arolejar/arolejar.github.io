(function($) {
	'use strict';
	
	// Preloader
	$(window).on('load', function() {
		if ($('#overlayer').length > 0) {
			$('#overlayer').addClass('loaded');
			setTimeout(function() {
				$('#overlayer').remove();
			}, 2000);
		}
		if ($('.loader').length > 0) {
			$('.loader').addClass('loaded');
			setTimeout(function() {
				$('.loader').remove();
			}, 2000);
		}
	});

	// Initialize AOS
	AOS.init({
		duration: 800,
		easing: 'slide',
		once: true
	});

	// Jarallax for parallax effects
	jarallax(document.querySelectorAll('.jarallax'));

	// Remove any other initializations for unused features
	
})(jQuery);