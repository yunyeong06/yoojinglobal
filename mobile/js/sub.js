$(document).ready(function(){
	// navigation bar
	$(".subtop_wrap").click(function(){
		$(".subtop_wrap .subtop_area > li").toggleClass("active");
	});


	// 제품페이지 탭메뉴
	$(".tab_btn_area .tab_link").click(function(){
		var tab_id = $(this).attr("data-tab");

		$(".tab_btn_area .tab_link").removeClass("on");
		$(".tab_cont_area").removeClass("on");

		$(this).addClass("on");
		$("#"+tab_id).addClass("on");
	});

	
	// 공지사항 아코디언 메뉴
	$(".accordion_wrap li .title").click(function(){
		$(".accordion_wrap li .cont").slideUp();
		$(".accordion_wrap li").toggleClass("open");
		
		if($(this).next().is(":hidden")){
			$(this).next().slideDown();
		}else{
			$(this).next().slideUp();
		}
	});


	//인증서
	var fractionSwiper = new Swiper(".fraction", {
        slidesPerView: "auto",
        spaceBetween: 40,
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

	//카달로그
	var progressSwiper = new Swiper(".progress", {
		slidesPerView: "auto",
        spaceBetween: 10,
        pagination: {
          	el: ".swiper-pagination",
          	type: "progressbar",
        },
        navigation: {
          	nextEl: ".swiper-button-next",
          	prevEl: ".swiper-button-prev",
        },
	});
});