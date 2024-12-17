<?php
header('Access-Control-Allow-Origin: *');
include('connect.php');
$json = file_get_contents('php://input');
$data = json_decode($json, true);

$email = $data['email'];

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode("Invalidemail");
    exit;
}

$select = "SELECT * FROM `register` WHERE `email` = '$email'";
$result = mysqli_query($connection, $select);

if (mysqli_num_rows($result) > 0) {
    $code = substr(time(), -6);
    $otp_query = "INSERT INTO pV (email, code) VALUES('$email', '$code')";
    if (mysqli_query($connection, $otp_query)) {
        //mail( $email, "Please use the code below to change your password", $code "\nIf you did not request to change your password, please ignore this message.\n" );
        $msg = "Sent_successfully";
    } else {
        $msg = "retype";
    }
} else {
    $msg = "Invalidemail";
}

$response = array(
    'email' => $email,
    'message' => $msg
);

echo json_encode($response);
?>
