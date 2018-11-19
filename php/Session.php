<?php
header('content-type:text/html;charset=utf-8');
session_start();
if(isset($_REQUEST["name"])){
	if($_REQUEST["remPwd"]=="true"){
		foreach($_SESSION as $sessions){
			if($_REQUEST["name"]==$sessions["name"]){
				echo $sessions["password"];
				return;
			}
		}
	}else if($_REQUEST["remPwd"]=="false"){
		unset($_SESSION[$_REQUEST["name"]]);
		echo "";
	}
}

?>