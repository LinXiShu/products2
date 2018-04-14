<?php
/**
 * @Author: Marte
 * @Date:   2018-04-11 09:47:09
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-04-13 15:35:36
 */
require('connect.php');

$ip = isset($_GET['ip']) ? $_GET['ip'] : '1';

$sql2 = " select * from products where id= $ip ";

$data2 = $conn->query($sql2);

$res2 = $data2->fetch_assoc();

$ress =  json_encode($res2,JSON_UNESCAPED_UNICODE);

echo $ress;

// 把 获取 到的 数据 赋值 给  多个个变量

     $id = $res2['id'];
     $username = $res2['username'];
     $photo = $res2['photo'];
     $price = $res2['price'];
     $qty = 1;
     $xj = $qty*$price;

// echo $id, $username, $price, $qty,$photo;

$zong_sql = "insert into goodslist(id,photo,username, price, qty, xj) values ($id, '$photo' ,'$username' , $price, $qty, $xj);";

$res3 = $conn->query($zong_sql);


if($res3){
    // echo '加入购物车成功';
}else{

    $qty2 = "select * from goodslist where id='$id'";
    
    $res5 = $conn->query($qty2);

    $ress5 = $res5->fetch_assoc();


     $qty_xin = $ress5['qty'];
                $qty_xx = $qty_xin +1 ;
                $xj_xx = $qty_xx * $xj;
    
    $sql_update = "update goodsList set qty= $qty_xx , xj=$xj_xx where id='$id' ";

    // echo ' 商品+1';


    $res4 = $conn->query($sql_update);
    if($res4){
        // echo '购物车更新成功';
    }else{
        // echo '购物车更新失败';
    }
}








$conn->close();
