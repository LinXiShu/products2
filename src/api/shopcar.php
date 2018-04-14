<?php
/**
 * @Author: Marte
 * @Date:   2018-04-12 10:01:06
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-04-12 12:55:59
 */

require('connect.php');


$sql = "select * from goodslist";

$set = $conn->query($sql);

$data = $set->fetch_all(MYSQLI_ASSOC);

$res = array(
    'data'=>array_slice($data,0),
    
);



echo json_encode($res,JSON_UNESCAPED_UNICODE);

$conn->close();





