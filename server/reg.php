<?php

$db = mysqli_connect("127.0.0.1","root","","LILI");
if(!$db){
    die("链接错误！".mysqli_error($db));
}
// echo"链接成功";



?>