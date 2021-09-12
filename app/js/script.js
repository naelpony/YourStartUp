
$(function () {
	$("#phone").mask("8(999) 999 99 99");
});
$(function () {
	$("#phonef").mask("8(999) 999 99 99");
});



$('.menu__burger').on('click', function(event){
	$('.menu__burger, .menu-center').toggleClass('active');
	$('body').toggleClass('lock')
});

