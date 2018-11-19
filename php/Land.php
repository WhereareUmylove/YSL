<?php
header('content-type:text/html;charset=utf-8');
$connection = mysqli_connect('127.0.0.1','root','','ysl');
/* 
mysqli_connect(host,username,password,dbname,port,socket);
参数	描述
host	可选。规定主机名或 IP 地址。
username	可选。规定 MySQL 用户名。
password	可选。规定 MySQL 密码。
dbname	可选。规定默认使用的数据库。
port	可选。规定尝试连接到 MySQL 服务器的端口号。
socket	可选。规定 socket 或要使用的已命名 pipe。
*/
function doRember(){
	session_start();
	$name = $_REQUEST["name"] ;
	$password = $_REQUEST["password"] ;
	if($_REQUEST["remPwd"]=="true"){
		if(!isset($_SESSION[$name])){
			$user = array("name"=>$name,"password"=>$password);
			$_SESSION[$name] = $user ;
		}
	}else if($_REQUEST["remPwd"]=="false"){
		if(isset($_SESSION[$name])){
			unset($_SESSION[$name]);
		}
	}
}

mysqli_set_charset($connection, 'utf8');
if(!$connection){
	echo "<h1>连接数据库失败！</h1>";
}

$count = 0 ;
$query_length = 0 ;
$query = mysqli_query($connection, 'select * from ysl_user;');
foreach($query as $everyone){
	$array[] = [$everyone["id"]];
}
foreach($query as $everyone){
	$count++;
	//var_dump($everyone);
	if($_REQUEST['name']==$everyone["NAME"]){
		if($_REQUEST['password']==$everyone["password"]){
			doRember();
			echo "YSL.html";
			return ;
		}else{
			echo "fail";
			return ;
		}
	}
		if($count==count($array)){
		echo "notexist";
		return;
	}
}
mysqli_close($connection);
?>


