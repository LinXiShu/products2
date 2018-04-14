<?php
/**
 * @Author: Marte
 * @Date:   2018-04-09 14:01:47
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-04-09 14:03:02
 */
    require('connect.php');
    
    $uname = isset($_GET['uname'])?$_GET['uname']:'';
    $pwd = isset($_GET['pwd'])?$_GET['pwd']:'';



    $data = $conn->query("select * from users where username='$uname'");
    
    // var_dump($data);
    if($data->num_rows == 0){
        // 密码md5加密  

        
        // 写入数据sql语句
        $sql = "insert into users(username,password) values('$uname','$pwd')";
    
        $res = $conn->query($sql);
    
        if($res){
            echo "success";
        }else{
            echo "fail";
        }
    }else{
        echo 'fail';
    }
$conn->close();