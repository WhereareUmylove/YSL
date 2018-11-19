window.onload = function(){
	$.ajax({
		type:"post",
		url:"php/pdoprovince.php",
		dataType:"json",
		success:function(res){
			var x=res[0];
			var html="";
			for(var i = 0;i<x.length;i++){
				var p = x[i];
				html +="<option value='"+p.id+"'>"+p.NAME+"</option>";
			}
			$("#province").html(html);
		}
	})
//	$("#province").change(function(){
//		$.post("pdocity.php",{"id":$("#province").val()},function(data){
//			console.log(data);
//			var html="";
//			for(var i = 0;i<data.length;i++){
//				html +="<option value='"+data.id+"'>"+data.NAME+"</option>";
//			}
//			$("#city").html(html);
//		});
//	})
	$("#province").change(function(){
		$.ajax({
		type:"post",
		dataType:"json",
		url:"php/pdocity.php",
		data:{"id":$("#province").val()},
		success:function(res){
			var x=res[0];
			var html="";
			for(var i = 0;i<x.length;i++){
				var p = x[i];
				html +="<option value='"+p.id+"'>"+p.NAME+"</option>";
			}
			$("#city").html(html);
		}
	    })
	})
	$("#city").change(function(){
		$.ajax({
		type:"post",
		dataType:"json",
		url:"php/pdocounty.php",
		data:{"id":$("#city").val()},
		success:function(res){
			console.log(res);
			var x=res[0];
			console.log(x);
			var html="";
			for(var i = 0;i<x.length;i++){
				var p = x[i];
				html +="<option id='"+p.id+"'>"+p.NAME+"</option>";
			}
			$("#area").html(html);
		}
	})
	})
	
	
    var map = new BMap.Map("allmap");
    var $zz=document.getElementById("zz");
    var point = new BMap.Point(116.331398,39.897445);
    //放大缩小
    map.centerAndZoom(point,11);
    setTimeout(function(){
		map.setZoom(14);  
		//移动地图
		map.panTo(new BMap.Point(116.331398,39.897445));
	}, 2000);  //2秒后放大到14级
	map.enableScrollWheelZoom(true);
    //显示详细信息
	var marker = new BMap.Marker(point);  // 创建标注
	map.addOverlay(marker);              // 将标注添加到地图中
	map.centerAndZoom(point, 15);
	var opts = {
	  width : 80,     // 信息窗口宽度
	  height: 40,     // 信息窗口高度
	  title : "海底捞王府井店" , // 信息窗口标题
	  enableMessage:true,//设置允许信息窗发送短息
	  message:"亲耐滴，晚上一起吃个饭吧？戳下面的链接看下地址喔~"
	}
	var infoWindow = new BMap.InfoWindow("地址：北京市东城区王府井大街88号乐天银泰百货八层", opts);  
	marker.addEventListener("click", function(){          
		map.openInfoWindow(infoWindow,point); //开启信息窗口
	});
	//绑定search1的点击事件
    var $search1=document.getElementById("search1");
    $search1.onclick=function () {
        var options1=$("#province option:selected").text();
        var options2=$("#city option:selected").text();
        var options3=$("#area option:selected").text();
        var str=options1+options2+options3;
        if(str != ""){
            map.centerAndZoom(str,11);
        }
    }
    //绑定search1的点击事件
    var $search2=document.getElementById("search2");
    $search2.onclick=function () {
        var city = document.getElementById("cityName").value;
        if(city != ""){
            map.centerAndZoom(city,11);
        }
        else {
            $zz.style.display="block";
        }
    }
    //页面js
    var $map = document.getElementById("map");
    var $list = document.getElementById("list");
    var $allmap = document.getElementById("allmap");
    var $alllist = document.getElementById("alllist");
    $map.onclick=function () {
        $map.style.backgroundColor="black";
        $map.style.color="white";
        $allmap.style.display="block";
        $alllist.style.display="none";
        $list.style.backgroundColor="white";
        $list.style.color="black";
    }
    $list.onclick=function () {
         $list.style.backgroundColor="black";
         $list.style.color="white";
         $alllist.style.display="block";
         $allmap.style.display="none";
         $map.style.backgroundColor="white";
        $map.style.color="black";
    }
}
