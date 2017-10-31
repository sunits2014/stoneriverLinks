<?php
// Include config file
include_once('config.php');

$portal_id = isset($_GET['portal_id']) ? mysql_real_escape_string($_GET['portal_id']) :"";

if(!empty($portal_id)){
    $qur = mysql_query("select portal_id, portal_name from portals where portal_id = '$portal_id';");

    $result = array();

    while($r = mysql_fetch_array($qur)){
        extract($r);
        $result[] = array("portal_id" => $portal_id, "portal_name" => $portal_name);
    }
    $json = array("status" => 1, "info" => $result);
}else{
		$json = array("status" => 0, "msg" => "User ID not define");
}

@mysql_close($conn);

/* Output header */
	header('Content-type: application/json');
    echo json_encode($json);
    ?>