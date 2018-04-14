




<?php
/**
 * @Author: Marte
 * @Date:   2018-4-10 10:17:43
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-4-10 10:17:43
 */

require('connect.php');

//整个 商品表
$sql = "select * from products";

//分类 1
$sql1 = "select * from products where classes = 1";
//分类 2
$sql2 = "select * from products where classes = 2";
//分类 3
$sql3 = "select * from products where classes = 3";
//分类 4
$sql4 = "select * from products where classes = 4";
//分类 5
$sql5 = "select * from products where classes = 5";



$pro_sql = $conn->query($sql);
$pro_data1 = $conn->query($sql1);
$pro_data2 = $conn->query($sql2);
$pro_data3 = $conn->query($sql3);
$pro_data4 = $conn->query($sql4);
$pro_data5 = $conn->query($sql5);



$data1 = $pro_data1->fetch_all(MYSQLI_ASSOC);
$data2 = $pro_data2->fetch_all(MYSQLI_ASSOC);
$data3 = $pro_data3->fetch_all(MYSQLI_ASSOC);
$data4 = $pro_data4->fetch_all(MYSQLI_ASSOC);
$data5 = $pro_data5->fetch_all(MYSQLI_ASSOC);
$data6 = $pro_sql->fetch_all(MYSQLI_ASSOC);

$res = array(
    'data1'=>$data1,
    'data2'=>$data2,
    'data3'=>$data3,
    'data4'=>$data4,
    'data5'=>$data5,
    'data6'=>$data6,
);

// echo json_encode($res,JSON_UNESCAPED_UNICODE);
echo json_encode($res,JSON_UNESCAPED_UNICODE);


