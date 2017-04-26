<?php
header("Access-Control-Allow-Origin: *");
require_once('controller/databaseconnect.php');
$conn = db_connect();
if ($conn->connect_error) {
	echo("error");
	die("Connection failed: " . $conn->connect_error);
}

	$sql = "SELECT name,category,address,nearCity,rating,discription,photopath FROM places WHERE nearCity='colombo'";
	$result = $conn->query($sql);
	$outp = "";

	while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
	if ($outp != "") {$outp .= ",";}
	$outp .= '{"name":"' . $rs["name"] . '",';
	$outp .= '"category":"' . $rs["category"] .'",';
	$outp .= '"nearCity":"' . $rs["nearCity"] .'",';
	$outp .= '"discription":"' . $rs["discription"] .'",';
	
	$outp .= '"photopath":"' . $rs["photopath"] . '"}';

}
	$outp ='{ "records":[ '.$outp.' ]}';
	$conn->close();
	echo($outp);
?>
