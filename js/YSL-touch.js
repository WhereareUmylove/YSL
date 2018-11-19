function touch1() {
    var ul=document.querySelector(".wrap ul");
    var wrap=document.querySelector(".wrap");
    var span=document.querySelector(".wrap span");
    var startX = 0;
    var moveX = 0;
    var distanceX = 0;
    var isEnd = true;
    var index=0;
    addEventListener(ul,"touchstart",function(e){
        console.log("xxx");
        var touch = e.targetTouches[0];
        startX = touch.clientX;
    })
    addEventListener(ul,"touchmove",function(e){
        if(isEnd == true){
            var touch = e.targetTouches[0];
            moveX = touch.clientX;
            distanceX = moveX - startX;
            ul.style.left=-index*wrap.offsetWidth+distanceX+"px";
            span.style.left=distanceX+"px";
        }
    })
    addEventListener(ul,"touchend",function(e){
        isEnd = false;
        if(Math.abs(distanceX) > 80){
            if(distanceX > 0){
                index=0;
                ul.style.left = -index*wrap.offsetWidth+ "px";
            }
            else{
                index=0.7;
                ul.style.left = -index*wrap.offsetWidth + "px";
            }
        }
        else{
            ul.style.left=0+"px";
        }
        startX = 0;
        moveX = 0;
        distanceX = 0;
    })
}
function touch2() {
    var a=document.querySelector(".nav .content .search");
    var searchbox=document.querySelector(".content .searchbox");
    var bars=document.querySelector(".bars");
    var content=document.querySelector(".nav-content");
    var top=document.querySelector(".top");

        addEventListener(a,"touchstart",function(){
            searchbox.style.display="block";
        })

    addEventListener(bars,"touchstart",function(){
        content.style.transition="all 0.5s";
        content.style.transform="translate(0%,0%)";
    })
}

function wrap() {
    var wrap=document.querySelector(".footer-wrap");
    var x=0;
    var timer=setInterval(function(){
             if(x>-126){
                 x=x-42;
                 wrap.style.transform="translate3d(0px,"+x+"px, 0px)";
             }
             else if(x==-126 && x<0){
                 x=x+42;
                 wrap.style.transform="translate3d(0px,"+x+"px, 0px)";
             }

    },2000)
}

function gotop() {
    var gotop=document.querySelector(".backbox .backtop");
    var box=document.querySelector(".backbox");
    var screen=window.screen.height;
    window.onscroll=function() {
        //console.log(screen);
        if(getScroll().scrollTop>screen){
              box.style.display="block";
        }
        else{
            box.style.display="none";
        }
    }
    gotop.onclick=function() {
        window.scrollTo(0,0);
    }
}