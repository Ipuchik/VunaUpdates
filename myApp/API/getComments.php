<?php
header('Access-Control-Allow-Origin: *');
include('connect.php');
$json=file_get_contents('php://input');
$data = json_decode($json,true);

$post_id = $data['post_id'];

$submit = "SELECT * FROM comments WHERE post_id = '$post_id'";
$result = mysqli_query($connection, $submit);

if ($result) {
    $posts = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $content = $row['comments'];
        $id = $row['id'];
        $post_id = $row['post_id'];
//making an array to store it
        $post = array(
            'post' => $content,
            'id' => $id
        );
        //adding the array inside another array that will be sent//necessary so that all the data will be fetched into one array
        $posts[] = $post;
    }

    $response = array(
        'msg' => 'Successful',
        'post' => $posts,
        
    );
} else {
    $response = array(
        'msg' => 'Failed'
    );
}

echo json_encode($response);
?>
