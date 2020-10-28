//轮播图
var swiper = new Swiper('.swiper-container', {
	speed:1000,
    slidesPerView: 1,//一次允许展示1张图片
	spaceBetween: 0,//图片间隔
	loop: true,//轮播是否循环
	autoplay: {
		delay: 3000,//3秒切换一次
		disableOnInteraction:false,
	},
	pagination: {//使用分页器导航
		el: '.swiper-pagination',
		clickable: true,//可点击
		dynamicBullets: true,//小圆点过多是否隐藏部分
	},
	navigation: {//使用前进后退按钮
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
$().ready(function(){
	$(".appDownload").click(function(){
		window.location.href = "http://api.suanlifeng.com/wap/invite/92947423/367566964ec3a65c4825dc8c143c5243";
	})
	$(".about").click(function(){
		window.location.href = "https://huimo.site/company.html";
	})
})
//轮播图结束

