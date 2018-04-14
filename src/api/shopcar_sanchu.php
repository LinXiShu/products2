<?php
/**
 * @Author: Marte
 * @Date:   2018-04-13 14:55:02
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-04-13 15:14:31
 */

require('connect.php');

$idx = isset($_GET['id']) ? $_GET['id'] : '';

$sql = "DELETE from goodslist where id='$idx' ";

$data = $conn->query($sql);

if($data){
    echo "yes";
}else{
    echo "no";
}





