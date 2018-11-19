/**
 * Created by student on 2018/11/15.
 */

window.onload=function () {
    var a=getRequest();
    console.log("class:"+a['class']);
    queryData(a);


}

function getRequest() {
    var url=location.search;
    var theRequest=new Object();
    if(url.indexOf("?")!=-1){
        var str=url.substr(1);
        strs=str.split("&");
        for(var i=0;i<strs.length;i++){
            theRequest[strs[i].split("=")[0]]=decodeURIComponent(strs[i].split("=")[1]);
        }

    }
    return theRequest;
}
function queryData(a) {
    queryAjax("get","php/Cosmetics.php","class="+a['class']);
}
function queryAjax(type,url,data) {
    var ul=document.querySelector(".list-product ul")
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

            sort(obj.data);
        }
    }
}


function  sort(data) {
    var ul=document.querySelector(".list-product ul")
    var select=document.querySelector("select");
    select.onchange=function () {
        var value=this.value;
        var arr=[];
        var sortArr=[];
        var temp=0;
        // console.log("select:"+value);
        if (value=="按价格从高到低"){
            // console.log("data:"+data);
            for(var i=0;i<data.length;i++){
                arr.push(data[i].productPrices);
            }
            for(var i=0;i<arr.length;i++){
              for(var j=i;j<arr.length;j++){
                  if(arr[i]<arr[j+1]){
                      temp=arr[i];
                      arr[i]=arr[j+1];
                      arr[j+1]=temp;
                  }
              }
            }
            console.log("arr:"+arr);
            for (var i=0;i<arr.length;i++){
                for(var j=0;j<data.length;j++){
                    if(arr[i]==data[j].productPrices){
                        sortArr.push(data[j]);
                    }
                }
            }
            // console.log(sortArr);
            var sortObj={
                data:sortArr
            }
            var html=template("template",sortObj);
            ul.innerHTML=html;
        }else if(value=="按价格从低到高"){
            for(var i=0;i<data.length;i++){
                arr.push(data[i].productPrices);
            }
            for(var i=0;i<arr.length;i++){
                for(var j=i;j<arr.length;j++){
                    if(arr[i]>arr[j+1]){
                        temp=arr[i];
                        arr[i]=arr[j+1];
                        arr[j+1]=temp;
                    }
                }
            }
            console.log("arr:"+arr);
            for (var i=0;i<arr.length;i++){
                for(var j=0;j<data.length;j++){
                    if(arr[i]==data[j].productPrices){
                        sortArr.push(data[j]);
                    }
                }
            }
            // console.log(sortArr);
            var sortObj={
                data:sortArr
            }
            var html=template("template",sortObj);
            ul.innerHTML=html;

        }

    }
}

