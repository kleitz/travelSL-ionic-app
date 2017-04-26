<?php

require_once('controller/databaseconnect.php');
$conn = db_connect();
if ($conn->connect_error) {
	echo("error");
	die("Connection failed: " . $conn->connect_error);
}

	$sql = "SELECT place,user FROM wishlist WHERE user='namal'";
	$result = $conn->query($sql);
	$outp = "";

	while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
		echo  $rs["place"];
		echo $rs["user"];
	

}
	
?>
