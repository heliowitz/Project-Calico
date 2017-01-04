function showInfo(proj){
	var id = "#"+proj;
	$('#projectGrid').fadeOut(200);
	$(id).fadeIn(200);
}
function hideInfo(proj){
	var id = "#"+proj;
	$('#projectGrid').fadeIn(200);
	$(id).fadeOut(200);
}