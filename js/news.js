$().ready(function(){
    $(".suanli ul li h3").click(function(){
        if($(this).next().hasClass("text_hide")){
            $(this).next().removeClass("text_hide");
            $(this).next().addClass("text_see");
        }else{
            $(this).next().removeClass("text_see");
            $(this).next().addClass("text_hide");
        }
        if($(this).hasClass("color_blue")){
            $(this).removeClass('color_blue');
        }else{
            $(this).addClass("color_blue");
            
        }
    })
    $(".shouyi ul li h3").click(function(){
        if($(this).next().hasClass("text_hide")){
            $(this).next().removeClass("text_hide");
            $(this).next().addClass("text_see");
        }else{
            $(this).next().removeClass("text_see");
            $(this).next().addClass("text_hide");
        }
        if($(this).hasClass("color_blue")){
            $(this).removeClass('color_blue');
        }else{
            $(this).addClass("color_blue");
            
        }
    })
   
})