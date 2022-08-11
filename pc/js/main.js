$(document).ready(function(){
	// 제품
	var prdtSwiper = new Swiper(".fraction", {
        slidesPerView: "3",
        spaceBetween: 16,
		loop: true,
        pagination: {
			el: ".swiper-pagination",
          	type: "fraction",
          	clickable: true
        },
        navigation: {
          	nextEl: ".swiper-button-next",
          	prevEl: ".swiper-button-prev"
        },
	});

	
	// top 버튼
	$(window).scroll(function(){
		if($(this).scrollTop() > 900){
			$('#topBtn').fadeIn();
		}else{
			$('#topBtn').fadeOut();
		}
	});
});