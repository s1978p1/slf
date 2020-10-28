$().ready(function(){
	// 导航栏底部线条
	
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
	
	// 汉堡包点击事件结束
	//右箭头事件
	
	//右箭头事件结束
	

	// 侧边栏左移
	
	// 侧边栏左移结束
})
