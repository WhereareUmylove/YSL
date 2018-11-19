//----正则判断----
var Register_text = document.getElementById("Land_tel");
var Register_name = document.getElementById("Land_name");

var Register_password = document.getElementById("Land_password");
var Register_password2 = document.getElementById("Land_password2");

//用来判断是哪个input不符合规范。
var ISorNot_text=0;
var ISorNot_pwd=0;

function reg_text(){
	var Register_text_val = Register_text.value;
	var Land_tel_email = /^1\d{10}$|^\w+@\w+\.?\w+\.com$/;
	if(!Land_tel_email.test(Register_text_val)){
		document.getElementById("inner_Land_text").innerText = "请输入有效的邮箱或者电话号码！";
		ISorNot_text = 0 ;
	}else{
		document.getElementById("inner_Land_text").innerText = "";
		ISorNot_text = 1 ;
	}
}
function reg_password(){
	var Register_password_val = Register_password.value;
	var Land_pwd = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
	if(!Land_pwd.test(Register_password_val)){
		document.getElementById("inner_Land_password").innerText = "密码必须由6-16位大或小写字母加数字！";
	}else{
		document.getElementById("inner_Land_password").innerText = "";
	}
	//succeed.innerText = "";
}
function reg_password2(){
	var Register_password_val2 = Register_password2.value;
	var Land_pwd = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
	if(!Land_pwd.test(Register_password_val2)){
		document.getElementById("inner_Land_password2").innerText = "密码必须由6-16位大或小写字母加数字！";
	}else{
		document.getElementById("inner_Land_password2").innerText = "";
	}
	//succeed.innerText = "";
}
Register_text.onblur = function(){
	reg_text();
}
Register_password.onblur = function(){
	reg_text();
	reg_password();
}
Register_password2.onblur = function(){
	reg_text();
	reg_password();
	reg_password2();
}
Register_password2.onkeyup = function(){
	var len1 = document.getElementById("Land_password").value;
	var len2 = document.getElementById("Land_password2").value;
	if(len1!==len2){
		document.getElementById("same").innerText = "2次输入的密码长度不一样!";
	}else{
		ISorNot_pwd = 1 ;
		document.getElementById("same").innerText = "";
	}
}

//随机验证码。

function changeVerification(){
	var num = JSON.stringify(Math.random()*10000+1000).substr(0,4);
	document.getElementById("changeVerification").innerHTML = num ;
}
changeVerification();

//同意协议并且注册
var agreeYou = document.getElementById("agreeYou");
agreeYou.onclick = function(){
	var sameNum = document.getElementById("changeVerification").innerHTML;
	var verNum = document.getElementById("Land_verification").value;
	if((ISorNot_pwd+ISorNot_text)!=2){
		if(ISorNot_text==0){
			reg_text();
			window.location.href = "#anchor1";
		}else{
			reg_password();
			reg_password2();
			window.location.href = "#anchor2";
		}
	}else{
			if(parseInt(sameNum)==verNum){
				document.getElementById("Land_verification").value = "";
				DoAJAX();
			}else{
				alert("验证码错误!");
			}
	}
}
var AcceptAjax;
//将注册信息发送到服务器。
function DoAJAX(){
	var phone=Register_text.value;
	var name = Register_name.value;
	var password = Register_password.value;
	//var ChineseName = document.getElementById("Land_name").value;
	var sex = document.getElementById("sex1").checked==true?"女":(document.getElementById("sex2").checked==true?"男":"");
	
	var Ajax_Register = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
	Ajax_Register.open("POST","php/Register.php");

	Ajax_Register.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	Ajax_Register.send("phone="+phone+"&name="+name+"&password="+password+"&sex="+sex);
	
	Ajax_Register.onreadystatechange = function(){
		if(this.readyState == 4){
			    var a=this.responseText;
			    var x=a.substr(a.length-4);
				if(x=="true"){
					alert("感谢注册!您可以登录了!");
					//window.open("Register.html");
					window.location.href = "Land.html";
				}else if(this.responseText=="false"){
					alert("手机号或者邮箱已经被注册过!");
				}else{
					alert("未知错误!请重新注册!");
				}
		}
	}
}
