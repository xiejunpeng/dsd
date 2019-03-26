<?php
	/*
	 	接收前端传过来的用户名和密码,将两个数据插入到数据表里面
	
	 */
	
	//连接数据库
	include 'connect.php';
	
	//接收数据
	$name=isset($_POST['tel']) ? $_POST['tel'] : '11';
	$psw=isset($_POST['psw']) ? $_POST['psw'] : '22';
	
//	echo $name;//成功接收了

	//写sql语句
	$sql="INSERT INTO tel(number,PASSWORD) VALUES('$name','$psw')";
	
	//执行语句
	$res=$conn->query($sql);//返回布尔值，插入成功返回true，否则返回false
	
	if($res){
		//注册成功返回yes否则返回no
		echo 'yes';
	}else{
		echo 'no';
	}
	
	//关闭数据库
	$conn->close();
?>