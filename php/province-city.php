<?php
	header("Content-type:application/json");
	include "selectdata.php";
	if(!isset($_REQUEST['godv'])){
		exit;
	}
	$Godv = $_REQUEST['godv'];
	if($Godv==1){
		$province=$provinceJson;
	    echo json_encode($province);
	}
	else if($Godv==2){
		$city=$cityJson;
		$id=$_REQUEST['id'];
		if($id==-1){
			exit;
		}
		$selectedcity=[];
		foreach($city as $value){
			if($value->id == $id){
				$selectedcity[]=$value;
				break;
			}
			if($value->parent==$id){
				$selectedcity[]=$value;
			}
		}
		echo json_encode($selectedcity);
	}
	else if($Godv==3){
		$country=$countyJson;
		$id=$_REQUEST['id'];
		if($id==-1){
			exit;
		}
		$selectedcountry=[];
		foreach($country as $value){
			if($value->parent==$id){
				$selectedcountry[]=$value;
			}
		}
		echo json_encode($selectedcountry);
	}
?>