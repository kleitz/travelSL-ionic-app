<?php
header("Access-Control-Allow-Origin: *");
function db_connect(){
	$server_name = "localhost";
	$user_name = "root";
	$password = "namal@123";
	$db_name = "gproject";
	$conn = new mysqli($server_name, $user_name, $password, $db_name);
	if($conn->connect_errno > 0){
		die('Unable to connect to database [' . $conn->connect_error . ']');
	}

	return $conn;
}



?>