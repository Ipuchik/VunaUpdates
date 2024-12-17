<?php
header('Access-Control-Allow-Origin:*');
include('connect.php');
$json = file_get_contents('php://input');
$data = json_decode($json,true);
$postId = isset($data['postId']) ? $data['postId'] : '';
$submit = "DELETE FROM posts where id = '$postId'";
$submit = mysqli_query($connection, $submit);

if($submit){
    $response = array(
        'msg' => "Deleted",
    );
}else{
    $response = array(
        'msg' => "Failed to delete"
    );
}
echo json_encode($response);
?>