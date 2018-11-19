<?php
header("content-type:text/html;charset=utf-8");
$dsn = "mysql:host=localhost;dbname=ysl;charset=UTF8";
$username="root";
$password="root";
$arr=[];
try{
    $pdo=new PDO($dsn,$username,$password);
    $stmt = $pdo->prepare("select * from product where productClass=?");
    $class=$_GET["class"];
    $stmt->execute(array($class));
    while($row=$stmt->fetchAll()) {
          $arr[]=$row;
    }
    if($arr==null){
     echo 0;
    }else{
     $json=json_encode($arr);
     echo $json;
    }

}catch(PDOException $e){
}
?>
