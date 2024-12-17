<?php
header('Access-Control-Allow-Origin: *');
include('connect.php');
$json=file_get_contents('php://input');
$data = json_decode($json,true);

$email = $data['email'];
$password = $data['password'];

$submit = "SELECT * FROM adminr where email='$email' and password='$password'";
//this submit query will now contain the entire row e.g name , password, age..
$submit = mysqli_query($connection, $submit);
$count = mysqli_num_rows($submit);
if($count == 1){
     $submit = mysqli_fetch_array($submit);

     $username = $submit['username'];
     $email = $submit['email'];
     $password = $submit['password'];
     $id = $submit['id'];
     

     $Ibrahim=array(
         'msg'=>'Successful',
         'username'=>$username,
         'email'=>$email,
         'password'=>$password,
         'id' =>$id
    );
}else{
    $Ibrahim=array(
       'msg'=>'Invalid login details'
    );
}
echo json_encode($Ibrahim);

?>