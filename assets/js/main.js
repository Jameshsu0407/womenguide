// 初始設定------------------------------------------------------------------------
// ready
$(document).ready(function () {
	// 回到上方
	go_top();
	// 點擊導覽前往頁面
	scroll_link();
	// 切換地圖資訊
	switch_map_content();
	// wow初始化
	new WOW().init();
});
// window resize
$(window).resize(function () {

});
// laxxx.js初始化
window.onload = function () {
	laxxx.setup({
		/* opts */
	}); // init

	document.addEventListener(
		"scroll",
		function (e) {
			laxxx.update(window.scrollY); // update every scroll
		},
		false
	);

	laxxx.update(window.scrollY); // set initial positions
};
// youtube背景影片
jQuery(document).ready(function() {
	jQuery('[data-youtube]').youtube_background();
});
// 初始設定------------------------------------------------------------------------


// function-----------------------------------------------------------------------
// 回到上方
function go_top() {
	$('a#go_top[href*="#"]')
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function (t) {
			if (
				location.pathname.replace(/^\//, "") ==
					this.pathname.replace(/^\//, "") &&
				location.hostname == this.hostname
			) {
				var e = $(this.hash);
				(e = e.length ? e : $("[name=" + this.hash.slice(1) + "]")),
					e.length &&
						(t.preventDefault(),
						$("html, body").animate(
							{
								scrollTop: e.offset().top,
							},
							600,
							function () {
								var t = $(e);
								if ((t.focus(), t.is(":focus"))) return !1;
								t.attr("tabindex", "-1"), t.focus();
							}
						));
			}
		});
}
// 點擊導覽前往頁面
function scroll_link() {
	$("#navbar ul li a[href^='#']").on("click", function (e) {
		// prevent default anchor click behavior
		e.preventDefault();
		// store hash
		var hash = this.hash;
		// animate
		$("html, body").animate(
			{
				scrollTop: $(hash).offset().top-120,
			},
			1000,
		);
	});
}
// 切換地圖資訊
function switch_map_content() {
	$('#route1_link').click(function (e) { 
		$('.route2_content').attr('style','display: none !important')
		$('.route1_content').attr('style','display: block !important')
		
	});
	$('#route2_link').click(function (e) { 
		$('.route1_content').attr('style','display: none !important')
		$('.route2_content').attr('style','display: block !important')
	});
}
// function-----------------------------------------------------------------------


// 輪播圖--------------------------------------------------------------------------
// 遮罩輪播
$(".slick_same").slick({
	speed: 5000,
	autoplay: true,
	autoplaySpeed: 0,
	cssEase: "linear",
	slidesToShow: 5,
	slidesToScroll: 1,
	infinite: true,
	centerMode: true,
	swipeToSlide: false,
	focusOnSelect: false,
	arrows: false,
	pauseOnHover: false,
	pauseOnFocus: false,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 4,
			},
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
			},
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			},
		},
	],
});
// 彈跳視窗裡的輪播圖
$(".card_slick").slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	infinite: true,
	speed: 500,
	dots: false,
	arrows: true,
	autoplay: true,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				adaptiveHeight: true
			},
		},
	],
})
// 彈跳視窗點開後slick馬上顯示
$('.modal').on('shown.bs.modal', function (e) {
	$('.card_slick').slick('setPosition');
	$('.wrap-modal-slider').addClass('open');
  })

$(".mb_map_1").slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	infinite: true,
	speed: 500,
	dots: false,
	arrows: false,
	autoplay: true,
	// centerMode: true,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
			},
		},
	],
})
// 輪播圖--------------------------------------------------------------------------
