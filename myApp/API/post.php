<?php
    header('Access-Control-Allow-Origin:*');
    include('connect.php');
    $json = file_get_contents('php://input');
    $data = json_decode($json,true);
    $post = isset($data['post']) ? $data['post'] : '';
    $imageURL = isset($data['image']) ? $data['image'] : '';

$imageId = getDriveFileId($imageURL); // Extract the file ID from the Google Drive URL
        $imageDirect = "https://drive.google.com/uc?id={$imageId}"; // Construct a direct link to the image

$submit = "INSERT INTO posts (post, imageURL) VALUES ('$post', '$imageDirect')";
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

function getDriveFileId($url) {
    $pattern = '/[-\w]{25,}/';
    preg_match($pattern, $url, $matches);
    return $matches[0];
}
?>