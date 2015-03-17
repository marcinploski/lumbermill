$(document).ready(function(){

	// push the panel
	$('#showPanel').click(function(){
		$('.panel-right').animate({
			right: "0px"
		}, 200);
	});

	$('#hidePanel').click(function(){
		$('.panel-right').animate({
			right: "-290px"
		}, 200);
	});
});