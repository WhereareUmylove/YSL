function toggleImage(){
    var ul = document.querySelector(".banner ul");
    var banner = document.querySelector(".banner");
    var indicators = document.querySelectorAll(".banner .indicators ol li");
    var bannerWidth = banner.offsetWidth;
    var bannerImglis = document.querySelectorAll(".banner ul li");
    var count = bannerImglis.length;
    var index = 1;
    var timerId = null;
    var startTime = function(){
        timerId = setInterval(function(){
            index++;
            ul.style.transition = "all 0.5s";
            ul.style.left = -index*bannerWidth + "px";
        },1000);
    }
    startTime();
    function setIndicator(index){
        for(var i=0;i<indicators.length;i++){
            indicators[i].classList.remove("active");
        }
        indicators[index-1].classList.add("active");
    }

    addEventListener(ul,"webkitTransitionEnd",function(){
        if(index >= count-1){
            index = 1;
            ul.style.transition = "none";
            ul.style.left = -index*bannerWidth + "px";
        }
        else if(index <= 0){
            index = count - 2;
            ul.style.transition = "none";
            ul.style.left = -index*bannerWidth + "px";
        }
        setIndicator(index);
        setTimeout(function(){
            isEnd = true;
            clearInterval(timerId);
            startTime();
        },100)
    })

    window.onresize = function(){
        bannerWidth = banner.offsetWidth;
        ul.style.width = bannerWidth*count + "px";
        ul.style.left = -bannerWidth*index + "px";
    }

    var startX = 0;
    var moveX = 0;
    var distanceX = 0;
    var isEnd = true;
    addEventListener(ul,"touchstart",function(e){
        clearInterval(timerId);
        var touch = e.targetTouches[0];
        startX = touch.clientX;
    })
    addEventListener(ul,"touchmove",function(e){
        if(isEnd == true){
            var touch = e.targetTouches[0];
            moveX = touch.clientX;
            distanceX = moveX - startX;
            ul.style.transition = "none";
            ul.style.left = -index*bannerWidth + distanceX + "px";
        }
    })
    addEventListener(ul,"touchend",function(e){
        isEnd = false;
        if(Math.abs(distanceX) > 100){
            if(distanceX > 0){
                index --;
                ul.style.transition = "all 0.5s";
                ul.style.left = -index*bannerWidth + "px";
            }
            else{
                index ++;
                ul.style.transition = "all 0.5s";
                ul.style.left = -index*bannerWidth + "px";
            }
        }
        else{
            ul.style.transition = "all 0.5s";
            ul.style.left = -index*bannerWidth + "px";
        }
        startX = 0;
        moveX = 0;
        distanceX = 0;
    })

}
