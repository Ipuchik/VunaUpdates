<?php
header('Access-Control-Allow-Origin:*');
include('connect.php');
$json = file_get_contents('php://input');
$data = json_decode($json,true);
$postId = isset($data['postId']) ? $data['postId'] : '';
$submit = "insert into savedposts(Sposts) values ('$postId')";
$submit = mysqli_query($connection, $submit);

if($submit){
    $response = array(
        'msg' => "Saved",
        //'Sposts' => $Savedposts
    );
}else{
    $response = array(
        'msg' => "Failed to save"
    );
}
echo json_encode($response);
?>