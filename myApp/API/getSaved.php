<?php
header('Access-Control-Allow-Origin:*');
include('connect.php');

$result = "SELECT * FROM `posts` JOIN `savedposts` ON `posts`.`id` = `savedposts`.`Sposts`";
$result = mysqli_query($connection, $result);

if ($result) {
  $savedPosts = array();

  while ($row = mysqli_fetch_assoc($result)) {
    $content = $row['post'];
    $id = $row['id'];

    $post = array(
      'post' => $content,
      'id' => $id
    );

    $savedPosts[] = $post;
  }

  $response = array(
    'msg' => "Refreshed",
    'Spost' => $savedPosts
  );
} else {
  $response = array(
    'msg' => "Failed"
  );
}

echo json_encode($response);
?>
