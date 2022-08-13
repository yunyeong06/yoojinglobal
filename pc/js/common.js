$(document).ready(function(){
	// header_gnb 메뉴 mouseenter
	$(".gnb_wrap, .gnb_bg").on("mouseenter",function(){
		$("#header").removeClass("on");
		$("#header").addClass("open");
		$(".header_logo img").attr("src", "/yoojinglobal/pc/images/common/ci_header_logo_on.png");
		$(".gnb_bg").stop().slideDown(300);
		$(".sub_wrap").stop().slideDown(300);
	});


	// header_gnb 메뉴 mouseleave
	$(".gnb_wrap, .gnb_bg").on("mouseleave",function(){
		var sct = $(window).scrollTop();
		if(sct>0){
			$("#header").removeClass("open");
			$("#header").addClass("on");
		  	$(".header_logo img").attr("src", "/yoojinglobal/pc/images/common/ci_header_logo_on.png");
			$(".gnb_bg").stop().slideUp(300);
			$(".sub_wrap").stop().slideUp(300);
			if($(".menu_btn").hasClass("open")){
				$("#header").removeClass("on");
				$("#header").addClass("open");
				$(".header_logo img").attr("src", "/yoojinglobal/pc/images/common/ci_header_logo_on.png");
				$(".gnb_bg").stop().slideDown(300);
				$(".sub_wrap").stop().slideDown(300);
			}
		}else if($(".menu_btn").hasClass("open")){
			$("#header").removeClass("on");
			$("#header").addClass("open");
			$(".header_logo img").attr("src", "/yoojinglobal/pc/images/common/ci_header_logo_on.png");
			$(".gnb_bg").stop().slideDown(300);
			$(".sub_wrap").stop().slideDown(300);
		}else{
			$("#header").removeClass("on");
			$("#header").removeClass("open");
			$(".header_logo img").attr("src", "/yoojinglobal/pc/images/common/ci_header_logo.png");
			$(".gnb_bg").stop().slideUp(300);
			$(".sub_wrap").stop().slideUp(300);
		}
	});


	// header_우측 버튼 click
	$(".menu_btn").on("click",function(){
		var sct = $(window).scrollTop();
		$(this).toggleClass("open");

		if($(this).hasClass("open")){
			$("#header").removeClass("on");
			$("#header").addClass("open");
			$(".header_logo img").attr("src", "/yoojinglobal/pc/images/common/ci_header_logo_on.png");
			$(".gnb_bg").stop().slideDown(300);
			$(".sub_wrap").stop().slideDown(300);
		}else if(sct>0){
			$("#header").removeClass("open");
			$("#header").addClass("on");
			$(".header_logo img").attr("src", "/yoojinglobal/pc/images/common/ci_header_logo_on.png");
			$(".gnb_bg").stop().slideUp(300);
			$(".sub_wrap").stop().slideUp(300);
			if($(".menu_btn").hasClass("open")){
				$("#header").removeClass("on");
				$("#header").addClass("open");
				$(".header_logo img").attr("src", "/yoojinglobal/pc/images/common/ci_header_logo_on.png");
				$(".gnb_bg").stop().slideDown(300);
				$(".sub_wrap").stop().slideDown(300);
			}
		}else{
			$("#header").removeClass("open");
			$(".header_logo img").attr("src", "/yoojinglobal/pc/images/common/ci_header_logo.png");
			$(".gnb_bg").stop().slideUp(300);
			$(".sub_wrap").stop().slideUp(300);
		}
	});


	// header_gnb 메뉴 scroll
	$(window).scroll(function(){
		var sct = $(window).scrollTop();
		if(sct>0){
			$("#header").addClass("on");
		  	$(".header_logo img").attr("src", "/yoojinglobal/pc/images/common/ci_header_logo_on.png");
			if($(".menu_btn").hasClass("open")){
				$("#header").removeClass("on");
			}
		}else if($(".menu_btn").hasClass("open")){
			$("#header").removeClass("on");
			$("#header").addClass("open");
			$(".header_logo img").attr("src", "/yoojinglobal/pc/images/common/ci_header_logo_on.png");
			$(".gnb_bg").stop().slideDown(300);
			$(".sub_wrap").stop().slideDown(300);
		}else{
			$("#header").removeClass("on");
			$("#header").removeClass("open");
		  	$(".header_logo img").attr("src", "/yoojinglobal/pc/images/common/ci_header_logo.png");
		}
	});


	//top 버튼
	$("#topBtn").click(function(){
		$("html, body").animate({
			scrollTop : 0
		}, 500);
		return false;
	});


	// 오시는 길
	tab("#map", 0);
});


// 오시는 길
window.onload = function(){
	document.getElementById("map2").style.display = "none";
};
function tab(e, num){
	var num = num || 0;
	var menu = $(e).children();
	var con = $(e+"_content").children();
	var select = $(menu).eq(num);
	var i = num;
	
	select.addClass("on");
	
	menu.click(function(e){
		e.preventDefault();
		if(select!==null){
			select.removeClass("on");
			con.eq(i).hide();
		}
		
		select = $(this);
		i = $(this).index();
		
		select.addClass("on");
		con.eq(i).show();
		
		setTimeout(function() {
			map1.relayout();
			map1.setCenter(new kakao.maps.LatLng(36.327446, 127.443853));
			map2.relayout();
			map2.setCenter(new kakao.maps.LatLng(36.617396, 127.127806));
		}, 0);
	});
}