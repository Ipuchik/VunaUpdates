<?php
include('connect.php');
header('Access-Control-Allow-Origin: *');
$json=file_get_contents('php://input');
$data = json_decode($json,true);
$code = $data['code'];
$email = $data['email'];
$submit = "SELECT * FROM pV where code='$code' AND email='$email'";
$submit = mysqli_query($connection, $submit);
$count = mysqli_num_rows($submit);
if($count == 1){
    $msg = "Verified";
}else{
    $msg = "Wrong Verification code";
}
echo json_encode($msg);
?>