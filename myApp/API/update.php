<?php
header('Access-Control-Allow-Origin: *');
include('connect.php');
$json=file_get_contents('php://input');
$data = json_decode($json,true);

$n_email = $data['email'];
$n_password = $data['password'];
$n_username = $data['username'];
$n_age = $data['age'];
$id = $data['id'];

$update = "UPDATE register SET username = '$n_username', password = '$n_password', email = '$n_email', age = '$n_age' where id = '$id' ";

$submit = $connection->query( $update );
// $count = mysqli_result($submit);


if($submit){
    $select = "SELECT * FROM `register` WHERE `id` = '$id';";
    $submit = mysqli_query($connection, $select);
    $submit = mysqli_fetch_assoc($submit);
     $return = $submit;
     $return[ 'msg' ] = 'Updated Successfully';

}else{
    $return = array(
       'msg'=>'Error updating your profile'
    );
}
echo json_encode($return);
?>