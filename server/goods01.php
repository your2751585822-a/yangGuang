<?php

include_once "./reg.php";
mysqli_set_charset($db,"utf8");
$sql = "SELECT * FROM goods";
$retult  = mysqli_query($db,$sql);

$data = mysqli_fetch_all($retult,MYSQLI_ASSOC);
echo json_encode($data);





?>