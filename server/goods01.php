<?php

include_once "./reg.php";
mysqli_set_charset($db,"utf8");
$res_id=$_REQUEST['res_id'];

if($res_id=="dt"){
    $sql = "SELECT * FROM goods";
}elseif($res_id=="de"){
    $sql = "SELECT * FROM goods ORDER BY good_price DESC";
}elseif($res_id=="ae"){
   $sql =  "SELECT * FROM goods ORDER BY good_price ASC";
}

$retult  = mysqli_query($db,$sql);

$data = mysqli_fetch_all($retult,MYSQLI_ASSOC);
echo json_encode($data);



    

?>