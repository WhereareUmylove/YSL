<?php
header("content-type:text/html;charset=utf-8");
$sdn="mysql:host=localhost;dbname=ysl;charset=UTF8";
$username="root";
$password="root";
$arr=[];
try{
    $pdo=new PDO($sdn,$username,$password);
    $stmt=$pdo->prepare("select * from product where productId=?");
    $id=$_GET['productId'];
    $stmt->execute(array($id));
    while($row=$stmt->fetchAll()){
        $arr[]=$row;
    }
    if($arr==null){
       echo 0;
    }else{
       $json=json_encode($arr);
       echo $json;
    }
}catch(PDOExecption $e){
}
?>


