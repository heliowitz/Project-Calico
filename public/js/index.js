// LOADER
$(window).on('load', function(){
	$('body').addClass('loaded');

	// ABOUT
	$('#About').click(function(){
		if ($('body').hasClass('overlayShow') && $('body').hasClass('aboutShow')){ // Hide
			$('body').addClass('aboutHide');
			$('body').removeClass('aboutShow');

			$('body').addClass('overlayHide');
			$('body').removeClass('overlayShow');

			$('body').removeClass('aboutFocus');
			$('body').removeClass('aboutHidden');
			$('body').removeClass('projectsFocus');
			$('body').removeClass('projectsHidden');

			$('body').addClass('aboutDefault');
			$('body').addClass('projectsDefault');
		} 
		else {
			if ($('body').hasClass('projectsShow')){ // Switch from Projects
				$('body').addClass('projectsHide');
				$('body').removeClass('projectsShow');

				$('body').removeClass('projectsFocus');
				$('body').removeClass('aboutHidden');

				$('body').addClass('aboutFocus');
				$('body').addClass('projectsHidden');

			} else { // Show
				$('body').addClass('overlayShow');
				$('body').removeClass('overlayHide');

				$('body').removeClass('aboutDefault');
				$('body').removeClass('projectsDefault');

				$('body').addClass('aboutFocus');
				$('body').addClass('projectsHidden');
				}
				$('body').addClass('aboutShow');
				$('body').removeClass('aboutHide');			
		}	
	});

	// Projects
	$('#Projects').click(function(){
		if ($('body').hasClass('overlayShow') && $('body').hasClass('projectsShow')){ // Hide
			$('body').addClass('projectsHide');
			$('body').removeClass('projectsShow');

			$('body').addClass('overlayHide');
			$('body').removeClass('overlayShow');

			$('body').removeClass('aboutFocus');
			$('body').removeClass('aboutHidden');
			$('body').removeClass('projectsFocus');
			$('body').removeClass('projectsHidden');

			$('body').addClass('aboutDefault');
			$('body').addClass('projectsDefault');
		} 
		else {
			if ($('body').hasClass('aboutShow')){ // Switch from About
				$('body').addClass('aboutHide');
				$('body').removeClass('aboutShow');

				$('body').removeClass('aboutFocus');
				$('body').removeClass('projectsHidden');

				$('body').addClass('projectsFocus');
				$('body').addClass('aboutHidden');

			} else { // Show
				$('body').addClass('overlayShow');
				$('body').removeClass('overlayHide');

				$('body').removeClass('aboutDefault');
				$('body').removeClass('projectsDefault');

				$('body').addClass('aboutHidden');
				$('body').addClass('projectsFocus');
			}
			$('body').addClass('projectsShow');
			$('body').removeClass('projectsHide');	
		}	
	});
});

