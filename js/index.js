
$(function() {

	//轮播
	var myImgSwiper = new Swiper('.swiper-container ',{
	  	pagination : '.swiper-pagination',
	});

	//图片懒加载
	$('.lazyimg').picLazyLoad({
		threshold: 100,
	}); 
});


