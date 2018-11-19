<?php
header("content-type:text/html;charset=utf-8");
$sdn="mysql:host=localhost;dbname=ysl;charset=utf8";
$username="root";
$password="root";
try{
$pdo=new PDO($sdn,$username,$password);
$stmt=$pdo->prepare("INSERT INTO cart(phone,cartImg,cartDescription,cartPrice,cartCount) VALUES(?,?,?,?,?)");
$phone=$_GET['phone'];
$cartImg=$_GET['cartImg'];
$cartDescription=$_GET['cartDescription'];
$cartPrice=$_GET['cartPrice'];
$cartCount=$_GET['cartCount'];
$stmt->execute([$phone,$cartImg,$cartDescription,$cartPrice,$cartCount]);
var_dump($res);
}catch(PDOExecption $e){
}
?>