/**
 * Created by student on 2018/11/15.
 */
function queryData() {
    queryAjax("get","php/ysl.php","class=banner");
    queryAjax2("get","php/ysl.php","class=content");
}

function queryAjax(type,url,data) {
    var ul=document.querySelector(".banner ul");
    var ajax=new XMLHttpRequest();
    if(data){
        ajax.open(type,url+"?"+data);
    }else{
        ajax.open(type,url);
    }
    ajax.send();
    ajax.onreadystatechange=function () {
        if(ajax.readyState==4 && ajax.status==200){
            // console.log(ajax.responseText);
            var json=JSON.parse(ajax.responseText);
            // console.log("template"+json);
            var jsonOne=json[0];
            var obj={
                data:jsonOne
            }
            var html=template("template",obj);
            ul.innerHTML=html;

        }
    }
}
function queryAjax2(type,url,data) {
    var ul=document.querySelector(".swiper-wrap");
    var ajax=new XMLHttpRequest();
    if(data){
        ajax.open(type,url+"?"+data);
    }else{
        ajax.open(type,url);
    }
    ajax.send();
    ajax.onreadystatechange=function () {
        if(ajax.readyState==4 && ajax.status==200){
            // console.log(ajax.responseText);
            var json=JSON.parse(ajax.responseText);
            // console.log(json);
            var jsonOne=json[0];
            var obj={
                data:jsonOne
            }
            var html=template("template2",obj);
            ul.innerHTML=html;
        }
    }
}
