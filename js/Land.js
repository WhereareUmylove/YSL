var Land_text = document.getElementById("Land_text");
var Land_password = document.getElementById("Land_password");
var succeed = document.getElementById("succeed");

//----正则判断----
function reg_text(){
	var Land_text_val = Land_text.value;
	var Land_tel_email = /^1\d{10}$|^\w+@\w+\.com$/;
	if(!Land_tel_email.test(Land_text_val)){
		document.getElementById("inner_Land_text").innerText = "请输入有效的邮箱或者电话号码！"
	}else{
		document.getElementById("inner_Land_text").innerText = "";
	}
}
function reg_password(){
	var Land_password_val = Land_password.value;
	var Land_pwd = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
	if(!Land_pwd.test(Land_password_val)){
		document.getElementById("inner_Land_password").innerText = "密码必须由6-16位大或小写字母加数字！";
	}else{
		document.getElementById("inner_Land_password").innerText = "";
	}
	succeed.innerText = "";
}
Land_text.onblur = function(){
	reg_text();
}
Land_password.onblur = function(){
	reg_text();
	reg_password();
}
Land_password.onfocus = function(){
	Remember();
}

//----登陆-----
var Land_PHP = document.getElementById("Land_PHP");

Land_PHP.onclick = function(){
	//var a=theRequest();

	var name = document.getElementById("Land_text").value;
	var pwd = document.getElementById("Land_password").value;
	var remPwd = document.getElementById("changestyle").checked;
	var AjaxRequest = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
	
	AjaxRequest.open("POST","php/Land.php");
	
	AjaxRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	AjaxRequest.send("name="+name+"&password="+pwd+"&remPwd="+remPwd);
	
	AjaxRequest.onreadystatechange = function(){
		if(this.readyState == 4){
			if(this.responseText == "fail"){
				succeed.innerText = "密码错误！";
			}else if(this.responseText == "notexist"){
				succeed.innerText = "账户不存在！";
			}else{
				window.location.href = this.responseText;
				//window.sessionStorage.setItem("phone",phone);
				//succeed.innerText = this.responseText ;
/*				if(a.html==null){
					window.location.href = this.responseText;
				}else{
					window.location.href = a.html+"?productId="+a.productId;
				}*/
				
			}
		}
	}
}


function Remember(){
	var AjaxRequest_rem = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
	AjaxRequest_rem.open("POST","php/Session.php");
	AjaxRequest_rem.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	
	var name = document.getElementById("Land_text").value;
	var remPwd = document.getElementById("changestyle").checked;
	
	AjaxRequest_rem.send("name="+name+"&remPwd="+remPwd);
	
	AjaxRequest_rem.onreadystatechange = function(){
		if(this.readyState == 4){
			if(this.responseText){
				document.getElementById("Land_password").value = this.responseText;
			}else{
				document.getElementById("Land_password").value = "";
			}
		}
	}
}



function theRequest(){
	var url=location.search;
	console.log(url);
	var request=new Object();
	if(url.indexOf("?")!=-1){
		var str=url.substr(1);
		var strs=str.split("&");
		for(var i=0;i<strs.length;i++){
			request[strs[i].split("=")[0]]=decodeURIComponent(strs[i].split("=")[1]);

		}
	}
	return request;

}


