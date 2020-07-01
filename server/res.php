<?php
include_once "./reg.php";

$username = $_REQUEST['username'];
$userpass = $_REQUEST['userpass'];
$userphone = $_REQUEST['userphone'];

$sql = "SELECT * FROM `user` WHERE username = '$username'";
$r = mysqli_query($db,$sql);
$num = mysqli_num_rows($r);
if($num==1){
    echo"用户名已被占用！";
}elseif($num==0){
    $sql = "INSERT INTO user " .
    "(id,username,userpass,userphone)" .
    "VALUES " .
    "(NULL,'$username','$userpass',$userphone)";
    $retval = mysqli_query($db,$sql);
    
    if(!$retval){
        die("无法插入数据！". mysqli_error($conn));
    }
    echo'{"status":"success"}';
}
?>