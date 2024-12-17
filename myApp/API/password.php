<?php
header('Access-Control-Allow-Origin: *');
include('connect.php');
$json=file_get_contents('php://input');
$data = json_decode($json,true);
$email = $data['email'];
$n_password = $data['password'];
$update = "UPDATE register SET password = '$n_password' where email = '$email'";
$submit = $connection->query( $update );
if($submit){
    $select = "SELECT * FROM `register` WHERE `email` = '$email'";
    $submit = mysqli_query($connection, $select);
    $submit = mysqli_fetch_assoc($submit);
     $return = $submit;
     $return[ 'msg' ] = 'Updated Successfully';

}else{
    $return = array(
       'msg'=>'Error updating your password'
    );
}
echo json_encode($return);
?>