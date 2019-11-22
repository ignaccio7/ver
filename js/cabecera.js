$(document).ready(function(){
	$(window).scroll(function(){
		if ( $(this).scrollTop() > 0 ) {
			if ($('#cabecera').hasClass('cabecera')) {
				$('#cabecera').addClass('cabecera2');
				$('#cabecera').removeClass('cabecera');
				$('#contenido-header').addClass('contenido-header');
			}
		}else{
			if ($('#cabecera').hasClass('cabecera2')) {
				$('#cabecera').addClass('cabecera');
				$('#cabecera').removeClass('cabecera2');
				$('#contenido-header').removeClass('contenido-header');
			}
		}
	});
});