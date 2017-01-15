// Image swap

$('#elsa').delay(1000).fadeOut(2500, function(){
	$(this).attr('src','images/background04.jpg').fadeIn(1000);
});

// Event hover
$('h2').hover(function(){
	$(this).css('color', 'red');
});
$('em').hover(function(){
	$(this).css('color', 'goldenrod');
});






//
$('p').on( 'click', function () {
	$(this).toggleClass('steelblue');
    alert("Bonjour Wild code school!")
});

$('#elsa').on('mouseover', function() {
	$('#citation1').css('opacity', '1')
	$('#citation1').css('transition', '2s linear')
});










