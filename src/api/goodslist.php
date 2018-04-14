<?php
/**
 * @Author: Marte
 * @Date:   2018-04-09 17:04:35
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-04-11 08:37:55
 */

require('connect.php');

 $pageNo = isset($_GET['pageNo']) ? $_GET['pageNo'] : 1;
 $qty = isset($_GET['qty']) ? $_GET['qty'] : 6;


$sql = "select * from products";

$set = $conn->query($sql);

$data = $set->fetch_all(MYSQLI_ASSOC);

$res = array(
    'data'=>array_slice($data,($pageNo -1)*$qty,$qty),
    
);



echo json_encode($res,JSON_UNESCAPED_UNICODE);

$conn->close();



