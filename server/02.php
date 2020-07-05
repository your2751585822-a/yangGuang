<?php
include_once "./reg.php";
$good_id = $_REQUEST['good_id'];

$sql = "SELECT * FROM goods  WHERE good_id = $good_id";
$result = mysqli_query($db,$sql);
$num = mysqli_num_rows($result);

if($num==1){
    echo '{"status":"success"}';
}else{
    echo '{"status":"error"}';
}
?>