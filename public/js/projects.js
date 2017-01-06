
$(window).on('load', function(){
	$('.grid').masonry({
		itemSelector: '.tile', 
		columnWidth: 420, 
		isFitWidth: true
	});
});

function showInfo(proj){
	var id = "#"+proj;
	$('#projectGrid').fadeOut(200);
	$(id).fadeIn(200);
}
function hideInfo(proj){
	var id = "#"+proj;
	$('#projectGrid').fadeIn(200, function(){
		$('.grid').masonry({
			itemSelector: '.tile', 
			columnWidth: 420, 
			isFitWidth: true
		});
	});
	$(id).fadeOut(200);
}