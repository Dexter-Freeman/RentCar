$(document).ready(function() {
	$(".owl-carousel").owlCarousel({
		loop:true,
		items: 1,
		margin:80,
		stagePadding:10,
		nav:false,
		dots: true
		// onTranslated: animateImgFunc,
		// onChanged: animateImgClear
	});

	// //Добавляем класс с анимацией изображения
	// function animateImgFunc() {
	// 	$(".owl-carousel .active .inner-testimonial img").addClass("animated fadeIn full-opacity");
	// }

	// //Удаляем класс с анимацией изображения
	// function animateImgClear() {
	// 	$(".owl-carousel .active .inner-testimonial img").removeClass("animated fadeIn full-opacity");
	// }


	$('.cars-item').on('tap', function() {
		// $('.cars-item-flip').css(transform, "rotateY(180deg)");
		$(this).toggleClass(hover);
			});
		});