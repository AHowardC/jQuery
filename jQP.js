console.log('hi')
$('document').ready(function(){
	$('#wrapper').css('width',500);
	$('#wrapper').css('height','auto');
	$('#p_two').css('color', 'red');
	$('#p_two').css({'background': "url('laliga.png'"});
	$('#hp').css('color', '#014A97');
	$('#A').click(function() {
		$(this).remove();
	});
	$('#V').click(function(){
		$(this).replaceWith('<p>im the new paragraph</p>');
	});


	
}); <!-- End of JQuery Code -->