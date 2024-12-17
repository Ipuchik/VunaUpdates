<?php
    header('Access-Control-Allow-Origin:*');
    include('connect.php');
    $json = file_get_contents('php://input');
    $data = json_decode($json,true);
    $username = isset($data['username']) ? $data['username'] : '';
    $email = isset( $data['email'] ) ? $data['email'] : '';
    $password = isset( $data['password'] ) ? $data['password'] : '';
    $age = isset( $data['age'] ) ? $data['age'] : '';
 
     if( ! filter_var( $email, FILTER_VALIDATE_EMAIL ) ){
         echo json_encode("Invalidemail");
         exit;
     }
     $submit = "insert into register(username, email, password, age) values ('$username','$email','$password','$age')";
     $submit = mysqli_query($connection, $submit);
     if($submit){
        
        $code = substr( time(), -6 );
        $otp_query = "INSERT into otp (email, code) VALUES('$email', '$code')";

        if( mysqli_query( $connection, $otp_query ) ){
            //mail( $email, "Verify Email", "Dear $username, Your OTP code is $code.\n" );
            $msg = "Submitted successfully";
     }else{
            $msg = "An error occured";
        }
    }
    else{
        $msg = "Not submitted";
    }
    $data = array(
        'email'=>$email,
        'msg'=>$msg
    );

    echo json_encode($data);
?>