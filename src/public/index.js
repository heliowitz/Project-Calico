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
		} 
		else {
			if ($('body').hasClass('projectsShow')){ // Switch from Projects
				$('body').addClass('projectsSwitch');
				$('body').removeClass('projectsShow');
			} else if ($('body').hasClass('resumeShow')) { // Switch from Resume
				$('body').addClass('resumeSwitch');
				$('body').removeClass('resumeShow');
			} else { // Show
				$('body').addClass('overlayShow');
				$('body').removeClass('overlayHide');
			}
			$('body').addClass('aboutShow');
			$('body').removeClass('aboutSwitch');	
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
		} 
		else {
			if ($('body').hasClass('aboutShow')){ // Switch from About
				$('body').addClass('aboutSwitch');
				$('body').removeClass('aboutShow');
			} else if ($('body').hasClass('resumeShow')) { // Switch from Resume
				$('body').addClass('resumeSwitch');
				$('body').removeClass('resumeShow');
			} else { // Show
				$('body').addClass('overlayShow');
				$('body').removeClass('overlayHide');
			}
			$('body').addClass('projectsShow');
			$('body').removeClass('projectsHide');	
			$('body').removeClass('projectsSwitch')		
		}	
	});

	// Resume
	$('#Resume').click(function(){
		if ($('body').hasClass('overlayShow') && $('body').hasClass('resumeShow')){ // Hide
			$('body').addClass('resumeHide');
			$('body').removeClass('resumeShow');

			$('body').addClass('overlayHide');
			$('body').removeClass('overlayShow');
		} 
		else {
			if ($('body').hasClass('projectsShow')){ // Switch from Projects
				$('body').addClass('projectsSwitch');
				$('body').removeClass('projectsShow');
			} else if ($('body').hasClass('aboutShow')) { // Switch from About
				$('body').addClass('aboutSwitch');
				$('body').removeClass('aboutShow');
			} else { // Show
				$('body').addClass('overlayShow');
				$('body').removeClass('overlayHide');
			}
			$('body').addClass('resumeShow');
			$('body').removeClass('resumeHide');			
			$('body').removeClass('resumeSwitch');
		}	
	});
});

