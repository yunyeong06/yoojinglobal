$(document).ready(function(){
	// header_우측 버튼 click
	$(".menu_btn").click(function() {
		$(this).toggleClass("open");
		$(".gnb_wrap").toggleClass("on");
		$(".gnb_bg").toggleClass("open");
	});

	// gnb 아코디언 메뉴
	$(".gnb_wrap > li:not(:first-child) > a").click(function(){
        $(this).toggleClass("open");
		$(this).next().slideToggle();
		$(".gnb_wrap > li:not(:first-child) > a").not(this).next().slideUp();
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