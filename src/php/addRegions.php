<?php 
// Include config.php
include_once('config.php');

if($_server['REQUEST_METHOD'] == "POST") {
    $portal_name = isset($_POST['portal_name']) ? mysql_real_escape_string($_POST['portal_name']):"";
    
    // insert data into Database
    $sql = "insert into Portals values ('$portal_name');";
    $qur = mysql_query($sql);

    if ($qur){
        $json = array("status "=> 1, "msg" => "Portal Added!");
    }
    else{
        $json = array("status "=> 0, "msg" => "Error while adding Portal");
    }
}
else{
	$json = array("status" => 0, "msg" => "Request method not accepted");
}

@mysql_close($conn);

/* Output header */
header('Content-type: application/json');
echo json_encode($json);
?>