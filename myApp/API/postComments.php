<?php
    header('Access-Control-Allow-Origin:*');
    include('connect.php');
    $json = file_get_contents('php://input');
    $data = json_decode($json,true);
    //$userinfo = isset($data['userinfo']) ? $data['userinfo'] : ''; 
    $post = isset($data['post']) ? $data['post'] : '';
    $post_id = isset($data['post_id']) ? $data['post_id'] : '';
$submit = "INSERT INTO comments (comments, post_id) VALUES ('$post', '$post_id')";
$submit = mysqli_query($connection, $submit);
if($submit){
    $msg = "Sent successfully";
}else{
    $msg = "Failed to send";
}
$array = array(
    'msg'=>$msg
);
echo json_encode($array);
?>