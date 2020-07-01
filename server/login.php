<?php
$username = $_REQUEST['username'];
$userpass = $_REQUEST['userpass'];

include_once "./reg.php";

$sql = "SELECT * FROM `user` WHERE username = 'lw'AND userpass=123";
$r = mysqli_query($db,$sql);

$num = mysqli_num_rows($r);

// var_dump($num);
if($num==1){
    echo'{"status":"success"}';
}else{
    echo '{"status":"error"}';
}



?>