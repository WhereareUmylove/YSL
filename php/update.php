<?php
header("content-type:text/html;charset=utf-8");
$dsn = "mysql:host=localhost;dbname=ysl;charset=UTF8";
$username="root";
$password="root";

try{
$pdo=new PDO($dsn,$username,$password);
$stmt=$pdo->prepare("update cart set cartCount=? where cartId=?");
$count=$_GET['count'];
$id=$_GET['id'];
$stmt->execute(array($count,$id));
$aftect_row=$stmt->rowCount();
if($aftect_row){
   echo "1";
}else{
   echo "0";
}
}catch(PDOException $e){
}
?>