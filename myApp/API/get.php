<?php
header('Access-Control-Allow-Origin: *');
include('connect.php');
$json = file_get_contents('php://input');
$data = json_decode($json, true);

$submit = "SELECT * FROM posts";
$result = mysqli_query($connection, $submit);

if ($result) {
    $posts = array();
    while ($row = mysqli_fetch_assoc($result)) {
        //this while loops helps us to get each post and id on every row of the table and store it... in posts
        $content = $row['post'];
        $id = $row['id'];
        $image = $row['imageURL'];
//making an array to store it
        $post = array(
            'post' => $content,
            'id' => $id,
            'image'=>$image
        );
        //adding the array inside another array that will be sent//necessary so that all the rows will be gotten
        $posts[] = $post;
    }

    $response = array(
        'msg' => 'Successful',
        'post' => $posts,

    );
} else {
    $response = array(
        'msg' => 'Please check your Internet connection'
    );
}

echo json_encode($response);
?>
