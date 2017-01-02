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
			$('body').removeClass('resumeFocus');
			$('body').removeClass('resumeHidden');

			$('body').addClass('aboutDefault');
			$('body').addClass('projectsDefault');
			$('body').addClass('resumeDefault');
		} 
		else {
			if ($('body').hasClass('projectsShow')){ // Switch from Projects
				$('body').addClass('projectsHide');
				$('body').removeClass('projectsShow');

				$('body').removeClass('projectsFocus');
				$('body').removeClass('aboutHidden');

				$('body').addClass('aboutFocus');
				$('body').addClass('projectsHidden');

			} else if ($('body').hasClass('resumeShow')) { // Switch from Resume
				$('body').addClass('resumeHide');
				$('body').removeClass('resumeShow');

				$('body').removeClass('resumeFocus');
				$('body').removeClass('aboutHidden');

				$('body').addClass('aboutFocus');
				$('body').addClass('resumeHidden');

			} else { // Show
				$('body').addClass('overlayShow');
				$('body').removeClass('overlayHide');

				$('body').removeClass('aboutDefault');
				$('body').removeClass('projectsDefault');
				$('body').removeClass('resumeDefault');

				$('body').addClass('aboutFocus');
				$('body').addClass('projectsHidden');
				$('body').addClass('resumeHidden');			
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
			$('body').removeClass('resumeFocus');
			$('body').removeClass('resumeHidden');

			$('body').addClass('aboutDefault');
			$('body').addClass('projectsDefault');
			$('body').addClass('resumeDefault');
		} 
		else {
			if ($('body').hasClass('aboutShow')){ // Switch from About
				$('body').addClass('aboutHide');
				$('body').removeClass('aboutShow');

				$('body').removeClass('aboutFocus');
				$('body').removeClass('projectsHidden');

				$('body').addClass('projectsFocus');
				$('body').addClass('aboutHidden');

			} else if ($('body').hasClass('resumeShow')) { // Switch from Resume
				$('body').addClass('resumeHide');
				$('body').removeClass('resumeShow');

				$('body').removeClass('resumeFocus');
				$('body').removeClass('projectsHidden');

				$('body').addClass('projectsFocus');
				$('body').addClass('resumeHidden');

			} else { // Show
				$('body').addClass('overlayShow');
				$('body').removeClass('overlayHide');

				$('body').removeClass('aboutDefault');
				$('body').removeClass('projectsDefault');
				$('body').removeClass('resumeDefault');

				$('body').addClass('aboutHidden');
				$('body').addClass('projectsFocus');
				$('body').addClass('resumeHidden');	

			}
			$('body').addClass('projectsShow');
			$('body').removeClass('projectsHide');	
		}	
	});

	// Resume
	$('#Resume').click(function(){
		if ($('body').hasClass('overlayShow') && $('body').hasClass('resumeShow')){ // Hide
			$('body').addClass('resumeHide');
			$('body').removeClass('resumeShow');

			$('body').addClass('overlayHide');
			$('body').removeClass('overlayShow');

			$('body').removeClass('aboutFocus');
			$('body').removeClass('aboutHidden');
			$('body').removeClass('projectsFocus');
			$('body').removeClass('projectsHidden');
			$('body').removeClass('resumeFocus');
			$('body').removeClass('resumeHidden');

			$('body').addClass('aboutDefault');
			$('body').addClass('projectsDefault');
			$('body').addClass('resumeDefault');
		} 
		else {
			if ($('body').hasClass('projectsShow')){ // Switch from Projects
				$('body').addClass('projectsHide');
				$('body').removeClass('projectsShow');

				$('body').removeClass('projectsFocus');
				$('body').removeClass('resumeHidden');

				$('body').addClass('resumeFocus');
				$('body').addClass('projectsHidden');

			} else if ($('body').hasClass('aboutShow')) { // Switch from About
				$('body').addClass('aboutHide');
				$('body').removeClass('aboutShow');

				$('body').removeClass('aboutFocus');
				$('body').removeClass('resumeHidden');

				$('body').addClass('resumeFocus');
				$('body').addClass('aboutHidden');

			} else { // Show
				$('body').addClass('overlayShow');
				$('body').removeClass('overlayHide');

				$('body').removeClass('aboutDefault');
				$('body').removeClass('projectsDefault');
				$('body').removeClass('resumeDefault');

				$('body').addClass('aboutHidden');
				$('body').addClass('projectsHidden');
				$('body').addClass('resumeFocus');	

			}
			$('body').addClass('resumeShow');
			$('body').removeClass('resumeHide');			
		}	
	});
});

