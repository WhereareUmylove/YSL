<?php
header("content-type:text/html;charset=utf-8");
$sdn="mysql:host=localhost;dbname=ysl;charset=utf8";
$username="root";
$password="root";
$arr=[];
try{
	$pdo=new PDO($sdn,$username,$password);
	$stmt=$pdo->prepare("select * from province");
	$stmt->execute();
	while($row=$stmt->fetchAll()){
		$arr[]=$row;
		$jsonProvice=json_encode($arr);
		echo $jsonProvice;
	}
	
}catch(DPOException $e){
	
}
?>