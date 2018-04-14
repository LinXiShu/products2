<?php
/**
 * @Author: Marte
 * @Date:   2018-02-07 09:45:57
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-04-10 21:30:39
 */


    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "pro2";

    $conn = new mysqli($servername,$username,$password,$dbname);

    if($conn->connect_error){
        die("连接失败：".$conn->connect_error);
    }

    $conn->set_charset('utf8');

?>