/**
 * Created by student on 2018/11/16.
 */

window.onload=function(){
    var productId=7;
    // var a2=theRequest2();
    // console.log("html:"+a.productId);
    var a=GetRequest();
    productId=a['id'];
    var  productId2=a['productId'];
    console.log(productId2);
    if(productId==null){
        queryData(productId2);

    }else{
        queryData(productId);
    }

    
}


function  selectClass() {
    var classArr=document.querySelectorAll(".product-class ul li");
    for (var i=0;i<classArr.length;i++){
        classArr[i].onclick=function () {
            for (var j=0;j<classArr.length;j++){
                classArr[j].className="";
            }
            this.className="active";
        }
    }
}
function addCart(obj){
    var addbutton=document.querySelector(".add-cart");
    var select=document.querySelector(".select-count");
    var selectCount=1;
    var body=document.querySelector("body");
    var addSuccess=document.querySelector(".add-font")
    // console.log(obj[0]);
    select.onchange=function () {
        selectCount=select.value;
        console.log("selectValue"+selectCount);
    }
    addbutton.onclick=function () {
        var phone=window.sessionStorage.getItem("phone");
        console.log(phone);
        if (phone==null){
            window.location.href="Land.html?html=Description.html&productId="+obj[0].productId;
        }else{
            var data="phone="+phone+"&cartImg="+obj[0].productImg+"&"+"cartDescription="+obj[0].productDescription+"&"+"cartPrice="+obj[0].productPrices+"&"+"cartCount="+selectCount;
            insetAjax("get","php/descriptionInsert.php",data);

            body.style.backgroundColor="#000";
            body.style.opacity="0.5";
            addSuccess.style.display="block";
            setTimeout(function () {
                body.style.backgroundColor="#fff";
                body.style.opacity="1";

                addbutton.style.backgroundColor="#fff";
                addbutton.style.color="#000";
                addbutton.style.border="1px solid #000";
                addSuccess.style.display="none";
            },2000)

        }
    }
}

function GetRequest(){
    var url=location.search;//获取urlz中？后面的字符串-------?id=7
    var theRequest=new Object();
    if(url.indexOf("?")!=-1){
        var str=url.substr(1);// str-----id=7&name="张三"
        strs=str.split("&");
        console.log(strs);//strs------["id=7","name=张三"]
        for (var i=0;i<strs.length;i++){
            theRequest[strs[i].split("=")[0]]=decodeURIComponent(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}
function  queryData(id) {
    var data="productId="+id;
   queryAjax("get","php/description.php",data);
}
function queryAjax(type,url,data){
    var main=document.querySelector(".main");
    var ajax=new XMLHttpRequest();
    if(data){
        ajax.open(type,url+"?"+data);
    }else{
        ajax.open(type,url);
    }
    ajax.send();
    ajax.onreadystatechange=function(){
        if(ajax.readyState==4 && ajax.status){
            // console.log("queryAjax"+ajax.responseText);
            var json=JSON.parse(ajax.responseText);
            var jsonOne=json[0];
            // console.log("queryAjax"+jsonOne);
            var obj={
                data:jsonOne
            }
            var html=template("template",obj);
            main.innerHTML=html;

            addCart(obj.data);
            selectClass();
        }
    }
}
function  insetAjax(type,url,data) {
    var ajax=new XMLHttpRequest();
    if(data){
        ajax.open(type,url+"?"+data);
    }else{
        ajax.open(type,url);
    }
    ajax.send();
    ajax.onreadystatechange=function(){
        if(ajax.readyState==4 && ajax.status) {
            console.log(ajax.responseText);
        }
     }

}