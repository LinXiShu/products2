<?php
/**
 * @Author: Marte
 * @Date:   2018-02-07 14:40:12
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-04-09 13:25:48
 */
require('connect.php');

$username = isset($_GET['username']) ? $_GET['username'] : '';
$password = isset($_GET['password']) ? $_GET['password'] : '';



// echo $password;
$sql = "select * from users where username='$username' and password='$password'";

$searchUser = "select * from users where username='$username'";

$data = $conn->query($sql);
// var_dump($data);
$isExist = $conn->query($searchUser);

if($isExist->num_rows == 0){
    echo 'unExist';
}else{
    if($data->num_rows == 0){
        echo 'fail';
    }else{
        echo 'success';
    }
}
