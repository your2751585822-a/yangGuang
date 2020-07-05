<?php
$username = $_REQUEST['username'];
$userpass = $_REQUEST['userpass'];

include_once "./reg.php";

$sql = "SELECT * FROM `user` WHERE username ='$username' AND userpass='$userpass'";
// $result = mysqli_query($db,$sql);
// $res = mysqli_fetch_all($result, MYSQLI_ASSOC)[0];
// echo $res;
// // $ret = json_encode($res);
// var_dump($ret);
$r = mysqli_query($db,$sql);

$num = mysqli_num_rows($r);

$data = array("status"=>"","data"=>array("msg"=>"1"));
// var_dump($num);
if($num==1){
    // echo'{"status":"success"}';
    $data["status"] ="success";
    $data["data"]["userpass"] = $userpass;
    $data["data"]["username"] = $username;
    echo json_encode($data,true);
}else{
    echo '{"status":"error"}';
    // $data["data"]["msg"] = "登录失败，密码不正确！！！";
}

# (1) 先链接数据库
// $db = mysqli_connect("127.0.0.1", "root", "", "LILI");

// $username = $_REQUEST["username"];
// $userpass = $_REQUEST["userpass"];

// # (2) 去数据库中查询看指定的用户名是否存在
// $sql = "SELECT * FROM user WHERE username='$username'" ;
// $result = mysqli_query($db,$sql);

// $data = array("status"=>"","data"=>array("msg"=>""));
// if(mysqli_num_rows($result) == 0)
// {
//   # (2-1) 如果不存在，那么就返回数据(登录失败，用户名不存在)
//   $data["status"] = "error";
//   $data["data"]["msg"] = "登录失败，用户名不存在";
// }else{
//   # (2-2) 如果用户名存在，接着检查密码
//   $sql2 = "SELECT * FROM user WHERE username='$username'";
//   $result = mysqli_query($db,$sql2);
//   $res = mysqli_fetch_all($result, MYSQLI_ASSOC)[0];
//   // $res = json_encode($res);
//   // var_dump($res);
//   $pwd = $res["userpass"];
//   if($userpass !=  $pwd)
//   {
//     # (2-2-1) 密码不正确，那么就返回数据(登录失败，密码错误)
//     $data["status"] = "error";
//     $data["data"]["msg"] = "登录失败，密码不正确！！！";
//   }else
//   {
//     # (2-2-2) 密码正确，那么就返回数据(登录成功)
//     $userId = $res["id"];
//     $data["status"] = "success";
//     $data["data"]["msg"] = "恭喜你，登录成功";
//     $data["data"]["userId"] = $userId;
//     $data["data"]["userpass"] = $userpass;
//     $data["data"]["username"] = $username;
//   }
// }

// # 最后，需要把结果以JSON数据的方式返回
// echo json_encode($data,true);




?>