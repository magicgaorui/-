<?php
	$data = $_GET['name'];	//接收发送过来的数据
	header("Access-Control-Allow-Origin:*");
	header("Access-Control-Allow-Method:GET");
	$url = $data;
	$html = file_get_contents($url);
	echo $html;
?>