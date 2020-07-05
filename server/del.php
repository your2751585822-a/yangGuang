<?php

include_once "./reg.php";
mysqli_set_charset($db,"utf8");
$btn_id = $_REQUEST['btn_id'];
$sql = "DELETE  FROM restt WHERE goodId=$btn_id";
$retult  = mysqli_query($db,$sql);
$sql1 = "SELECT * FROM restt WHERE goodId = $btn_id";
$retult1 = mysqli_query($db,$sql1);
$num = mysqli_num_rows($retult1);

if($num==1){
    echo '{"status":"error"}';
}elseif($num==0){
    echo '{"status":"success"}';
}
// $data = mysqli_fetch_all($retult,MYSQLI_ASSOC);
// echo json_encode($data);



    

?>