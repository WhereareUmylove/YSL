<?php
header("content-type:text/html;charset=utf-8");
$sdn="mysql:host=localhost;dbname=ysl;charset=utf8";
$username="root";
$password="root";
$arr=[];
try{
	$id=$_REQUEST['id'];
	$pdo=new PDO($sdn,$username,$password);
	$stmt=$pdo->prepare("select * from city where parent=?");
	$stmt->execute([$id]);
	while($row=$stmt->fetchAll()){
		$arr[]=$row;
		$jsonCity=json_encode($arr);
		echo $jsonCity;
	}
}catch(DPOException $e){
	
}
?>