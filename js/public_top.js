$().ready(function(){
	// 导航栏底部线条
	$(".nav_ul>li").each(function(){
		// $(this).click(function(){
		// 	$(".nav_ul>li").removeClass("reactive");
		// 	$(".nav_ul>li").removeClass("active");
		// 	$(this).addClass("active");	
		// 	$(this).addClass("reactive");
		// })
		// if($(".public_head").find("h1").css("left") != 0){
		// 	$(".nav_ul>li").removeClass("reactive");
		// 	$(".nav_ul>li").removeClass("active");
		// }
	})
	// 导航栏底部线条结束
	
	// 导航栏底部线条移动动画

	// 导航栏底部线条移动动画结束
	
	//顶部位置判断
	$(window).scroll(function() {
        var t_Head = $(".public_head").find("h1").height();
        var y = $(window).scrollTop();
        if (y < t_Head) {
        	$(".public_head").find("h1").css("position","static");
        }else{
        	$(".public_head").find("h1").css("position","fixed");
        }
    }); 
	//顶部位置判断结束

	// 汉堡包点击事件
	// $(".hamburger").click(function(){
		// $(".nav").animate({"left":"0"},300);
		// $("body").animate({"left":"55%"},300);
		// $(".public_head").find("h1").animate({"left":"55%"},300);
		// console.log($(".public_head").find("h1").css("left"))
		// $(".move_left").removeClass("hide");
		// $(".hamburger").css("display","none");
		// $(".move_left").css("display","block");
	})
	// 汉堡包点击事件结束
	//右箭头事件
	// $(".move_left").click(function(){
		// $(".nav").animate({"left":"-55%"},300);
		// $("body").animate({"left":"0"},300);
		// $(".public_head").find("h1").animate({"left":"0"},300);
		// $(".move_left").addClass("hide");
		// $(".hamburger").css("display","block");
	// })	
	//右箭头事件结束
	

	// 侧边栏左移
	// $(".main").click(function(){
		// $(".nav").animate({"left":"-55%"},300);
		// $("body").animate({"left":"0"},300);
		// $(".public_head").find("h1").animate({"left":"0"},300);
		// $(".move_left").addClass("hide");
		// $(".hamburger").css("display","block");
	// })
	// $(".main").click(function(){
		// $(".nav").animate({"left":"-55%"},300);
		// $("body").animate({"left":"0"},300);
		// $(".public_head").find("h1").animate({"left":"0"},300);
		// $(".move_left").addClass("hide");
		// $(".hamburger").css("display","block");
	// })
	// $(".swiper-container").click(function(){
		// $(".nav").animate({"left":"-55%"},300);
		// $("body").animate({"left":"0"},300);
		// $(".public_head").find("h1").animate({"left":"0"},300);
		// $(".move_left").addClass("hide");
		// $(".hamburger").css("display","block");
	// })
	// 侧边栏左移结束
})
