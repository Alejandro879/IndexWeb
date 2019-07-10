$('.ayuda').click(function(event) {
	/* Act on the event */
	var dest = $("footer").offset().top;
	$("html, body").animate({scrollTop: dest},2000);
});
$('.contacto').click(function(event) {
	/* Act on the event */
	var dest = $("footer").offset().top;
	$("html, body").animate({scrollTop: dest},2000);
});

$('.servicio').click(function(event) {
	/* Act on the event */
	var dest = $(".servicios").offset().top;
	$("html, body").animate({scrollTop: dest},2000);
});

$('.plane').click(function(event) {
	/* Act on the event */
	var dest = $(".precios").offset().top;
	$("html, body").animate({scrollTop: dest},2000);
});

$('.precio').click(function(event) {
	/* Act on the event */
	var dest = $(".precios").offset().top;
	$("html, body").animate({scrollTop: dest},2000);
});

AOS.init();