$(function(){
    $("#close").click(function(){
        $(".top").css("display","none");
        $("section").css("paddingTop","88px");
    })

     /*  var index=0;
        $(".indicators ol li").click=function(){
            index=$(this).index();
            $(this).addClass("active").siblings().removeClass("active");
           $(".banner ul li").eq(index).fadeIn().siblings().fadeOut();
        }*/
    /*$(".bars").click(function(){
        $(".nav-content").css("display","block");
    })*/
    $("#back").click(function(){
        // $(".nav-content").css("display","none");
        $(".nav-content").css("transition","all 0.5s");
        $(".nav-content").css("transform","translate(-100%,0%)");
    })
    $(".nav .content .search").click(function(){
        $(".content .searchbox").css("display","none");
    })


    var index=0;
    var x=$(".aside-content  .swiper-container").width();
    $(".aside-content .btn-right").click(function(){
        index=index+1;
        $(".aside-content  .swiper-container .swiper-wrap").css("left",-index*x+"px");
        console.log(index);
            if(index>0 && index<4){
                $(".aside-content .btn-left").css("display","block");
            }
            if(index>=3){
                $(".aside-content .btn-right").css("display","none");
            }
        $(".swiper-button ul li").eq(index).addClass("active").siblings().removeClass("active");
    })
    $(".aside-content .btn-left").click(function(){
        index=index-1;
        $(".aside-content  .swiper-container .swiper-wrap").css("left",-index*x+"px");
        console.log(-index*x);
        if(index<=0){
            $(".aside-content .btn-left").css("display","none");
        }
        else if(index<3 && index>=0){
            $(".aside-content .btn-right").css("display","block");
        }
        $(".swiper-button ul li").eq(index).addClass("active").siblings().removeClass("active");
    })


    $(".aside-nav ul li:first-of-type").click(function(){
        $(this).addClass("current");
        $(this).siblings().removeClass("current");
        $(".aside-nav ul li:first-of-type span").css("color","#000");
        $(".aside-nav ul li:nth-of-type(3) span").css("color","#999");
        $(".aside-nav ul li:nth-of-type(2) span").css("color","#999");
        $(".aside-content .first").css("display","block");
        $(".aside-content .second").css("display","none");
        $(".aside-content .third").css("display","none");
    })
    $(".aside-nav ul li:nth-of-type(2)").click(function(){
        $(this).addClass("current");
        $(this).siblings().removeClass("current");
        $(".aside-nav ul li:nth-of-type(2) span").css("color","#000");
        $(".aside-nav ul li:nth-of-type(3) span").siblings().css("color","#999");
        $(".aside-nav ul li:first-of-type span").css("color","#999");
        $(".aside-content .first").css("display","none");
        $(".aside-content .second").css("display","block");
        $(".aside-content .third").css("display","none");
    })
    $(".aside-nav ul li:last-of-type").click(function(){
        $(this).addClass("current");
        $(this).siblings().removeClass("current");
        $(".aside-nav ul li:nth-of-type(3) span").css("color","#000");
        $(".aside-nav ul li:nth-of-type(2) span").css("color","#999");
        $(".aside-nav ul li:first-of-type span").css("color","#999");
        $(".aside-content .first").css("display","none");
        $(".aside-content .second").css("display","none");
        $(".aside-content .third").css("display","block");
    })

        $(".swiper-button ul li:first-of-type").click(function(){
            $(".aside-content  .swiper-container .swiper-wrap").css("left",0+"px");
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
        })
    $(".swiper-button ul li:nth-of-type(2)").click(function(){
        $(".aside-content  .swiper-container .swiper-wrap").css("left",-x+"px");
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    })
    $(".swiper-button ul li:nth-of-type(3)").click(function(){
        $(".aside-content  .swiper-container .swiper-wrap").css("left",-2*x+"px");
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    })
    $(".swiper-button ul li:last-of-type").click(function(){
        $(".aside-content  .swiper-container .swiper-wrap").css("left",-3*x+"px");
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    })

    $(".footer-notice .close").click(function(){
        $(".footer-notice").css("display","none");
    })
});
