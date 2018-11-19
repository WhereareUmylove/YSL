 function queryAjax(type,url,data) {
    var nothing=document.querySelector(".cart-content");
    var number=document.querySelector(".number");
    var noneShopping=document.querySelector(".none_shopping");
    var shopcartAdd=document.querySelector(".shopcart");

    var ajax=new XMLHttpRequest();
    var have=true;
    if(data){
        ajax.open(type,url+"?"+data);
    }else{
        ajax.open(type,url);
    }
    ajax.send();
    ajax.onreadystatechange=function () {
        if(ajax.readyState==4 && ajax.status==200){
            if(ajax.responseText=="0"){
                have=false;
            }
            if(have){
                nothing.style.display="none";
                shopcartAdd.style.display="block";
                noneShopping.innerHTML="立即购买";
                have=false;
            }else{
                nothing.style.display="block";
                shopcartAdd.style.display="none";
            }

            var json=JSON.parse(ajax.responseText);
            // console.log(json);
            console.log(json[0]);

            number.innerHTML=json[0].length;

            var obj={
                data:json[0]
            };
            var html = template("template",obj);
            document.querySelector(".shopcart_add").innerHTML = html;
            deleteData();
            addPrice();
            updateData();
        }
    }
}
function deleteAjax(type,url,data) {
    var nothing=document.querySelector(".cart-content");
    var shopcartAdd=document.querySelector(".shopcart");
    var ajax=new XMLHttpRequest();
    if(data){
        ajax.open(type,url+"?"+data);
    }else{
        ajax.open(type,url);
    }
    ajax.send();
    ajax.onreadystatechange=function () {
        if(ajax.readyState==4 && ajax.status==200){
            console.log(ajax.responseText);
            if(ajax.responseText){
                var phone=window.sessionStorage.getItem("phone");
                console.log(phone);
                var data="phone="+phone;
                queryAjax("get","php/cart.php",data);
            }
        }
    }
}

function updateAjax(type,url,data) {
    var ajax=new XMLHttpRequest();
    ajax.open(type,url+"?"+data);
    ajax.send();
    ajax.onreadystatechange=function () {
        if(ajax.readyState==4 && ajax.status==200){
            console.log(ajax.responseText);
            if(ajax.responseText){
                var phone=window.sessionStorage.getItem("phone");
                console.log(phone);
                var data="phone="+phone;
                queryAjax("get","php/cart.php",data);
            }
        }
    }
}



function updateData(){
    var changeCount=1;
    var selectArr=document.querySelectorAll("select");
    var totalButton=document.querySelector(".totalButton");
    var totalPrice=document.querySelectorAll(".total_price");
    for(var i=0;i<selectArr.length;i++){
        selectArr[i].onchange=function (){
            changeCount=this.value;
            console.log(changeCount);
        }
    }
    var updateButtonArr=document.querySelectorAll(".update");
    for(var i=0;i<updateButtonArr.length;i++){
        updateButtonArr[i].onclick=function (){
            var cartId=this.dataset["value"];
            var data="id="+cartId+"&"+"count="+changeCount;
            updateAjax("get","php/update.php",data);
            totalButton.checked=false;
            totalPrice[1].innerHTML=0;
        }
    }
    for(var i=0;i<selectArr.length;i++){
        var selected=selectArr[i].dataset["count"];
        var optionArr=selectArr[i].children;
        optionArr[selected-1].selected=true;
    }


}
function deleteData() {
    var totalButton=document.querySelector(".totalButton");
    var totalPrice=document.querySelectorAll(".total_price");
    setTimeout(function(){
        var deleteData=document.querySelectorAll(".delete");
        var length=deleteData.length;
        for(var i=0;i<length;i++){
            deleteData[i].onclick=function () {
                var cartId=this.dataset["value"];
                deleteAjax("get","php/deleteCart.php","id="+cartId);
                totalButton.checked=false;
                totalPrice[1].innerHTML=0;
            }
        }
    },1000)

}
function addPrice() {
    var totalButton=document.querySelector(".totalButton");
    var aloneButton=document.querySelectorAll(".aloneButton");
    var totalPrice=document.querySelectorAll(".total_price");
    var productPrice=document.querySelector(".productPrice");
    var select=document.querySelectorAll("select");
    var totalCount=0;
    var count=0;
    var money=0;
    var totalMoney=0;
    totalButton.onclick=function (){
        if(totalButton.checked){
            for(var i=0;i<aloneButton.length;i++){
                var aloneCount=select[i].dataset['count'];
                aloneButton[i].checked="checked";
                totalMoney+=parseInt(aloneButton[i].dataset['price'])*aloneCount;
                count=aloneButton.length;
                // console.log("total"+count);
            }

        }else{
            for(var i=0;i<aloneButton.length;i++){
                aloneButton[i].checked=false;
                totalMoney=0;
                count=0;
            }
        }
        money=totalMoney;
        productPrice.innerHTML=totalMoney;
        totalPrice[0].innerHTML=totalMoney;
        totalPrice[1].innerHTML=totalMoney;
    }
    var selectCount=0;

    for(var i=0;i<aloneButton.length;i++){
        aloneButton[i].onclick=function (){
            var x=this.dataset['id'];
            for(var i=0;i<select.length;i++){
                if(select[i].dataset['id']==x){
                    var aloneCount=select[i].dataset['count'];
                }
            }
            // var aloneCount=select[x].dataset['count'];
            if(this.checked){
                count++;
                // console.log("+:"+count);
                money+=parseInt(this.dataset['price'])*aloneCount;

            }else{
                count--;
                // console.log("-:"+count);
                money-=parseInt(this.dataset['price'])*aloneCount;
            }
            if(count==aloneButton.length){
                totalButton.checked="checked";
            }else{
                totalButton.checked=false;
                totalMoney=0;
            }
            productPrice.innerHTML=money;
            totalPrice[0].innerHTML=money;
            totalPrice[1].innerHTML=money;
        }
    }

}

window.onload=function () {
        var phone=window.sessionStorage.getItem("phone");
        console.log(phone);
        var data="phone="+phone;
        queryAjax("get","php/cart.php",data);
    }