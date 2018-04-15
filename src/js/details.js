/* 
* @Author: Marte
* @Date:   2018-04-11 09:12:12
* @Last Modified by:   Marte
* @Last Modified time: 2018-04-14 09:42:19
*/

// var gid = location.search.split('?')[1].split('=')[1];
var gid = location.search.split('?')[1].split('=')[1];

require(['config'], function(){
    require(['jquery','jiarugouwuche','zjf_fdj'], function($){

        console.log(gid, 999);

        $.ajax({
            url: '../api/details2.php',
            dataType: 'json',
            data: {id: gid},
            success:function(red){
            var html = '';
            var lbta = '';
            // console.log(red);

           html += xiangqingye(red);
           // console.log(999);
            $('.one1').html(html);

           // lbta += lbt(red);
            // $('.xq_zuo_z').html(lbta);

            // console.log(red.photo);


            var img_lj = $('.img_cs');
            img_lj.attr('src',red.photo);
            // console.log(img_lj);



             }
        });



        function lbt(red){
            return   

        }

        function xiangqingye(red){
            return '<div class="one2" data-id:"'+ red.id +'";>'+
                '<div style="line-height: 43px; color: purple; text-indent: 1em; background:url("../img/usa.png");" >美国</div>'+
                '<div style="line-height: 30px; width: 500px;height: 40px;font-size: 18px;text-weight: bold;text-indent: 1em; color: #2D00B2;">'+ red.username +'</div>'+
                '<div class=" z12" style=" color: #666; margin-left: 15px; width: 500px;height: 50px; "> 温馨提示：即日起因海关清关需要，收货人必须通过身份证验证，并与支付人的实名认证保持一致。天然植物提取、保护肝脏、呵护肾脏、 防止结石形成 缓解疼痛 </div>'+
                
                '<div style="width: 550px;height: 140px;background: #FCF1E4;"><br /><br /><div class="z14 " style=" margin-left: 20px; text-decoration:line-through; color: #666;">市场价格：￥300</div><div class=" fl z14" style="height: 40px; line-height:38px; margin-left: 20px; color: #666;">商城现价：</div><div class="z20 red fl" style="font-size: 30px;text-weight: bold;">￥'+ red.price +'</div><br /><br/><div class="" style="margin-left: 20px; color: #666;font-size:  14px;">商品评分：<i class="iconfont icon-favoritesfilling "style="color: #FFBF00;"></i><i class="iconfont icon-favoritesfilling "style="color: #FFBF00;"></i><i class="iconfont icon-favoritesfilling "style="color: #FFBF00;"></i><i class="iconfont icon-favoritesfilling "style="color: #FFBF00;"></i><i class="iconfont icon-favoritesfilling "style="color: #FFBF00;"></i> &nbsp;&nbsp;&nbsp;&nbsp;<a href="" class="" style="display: inline; text-decoration: underline;">总共有 0 条评论</a></div></div>'+
                '<div style="width: 550px;height: 246px;border-bottom: 1px solid #ddd;">'+
               
                
                
                '</div>'
            +'</div>'
        }

// ....................   点击 商品评价

        // $dianji = $('.ty_t').children('.z14');
        // console.log($dianji);
// ....................
// 鼠标 移入 定位 动画
        
       var cont2 =  $('.cont2')
       var cont2_dl = cont2.children('.dw_dl').children('.dw_dl_dc');

       // console.log(cont2_dl,988);
// 隐藏
            cont2_dl.hide();
// 显示
            cont2.children('.dw_dl').mouseover(function(){
                cont2_dl.show();
            })
// 鼠标移出  时候 再 隐藏
            cont2.children('.dw_dl').mouseout(function(){
                cont2_dl.hide();
            })

//   妈蛋 回顶 
    
    var huiding = cont2.children('.hd');
            $(huiding).click(function(){

                    $('html , body').animate({scrollTop: 0},'slow');
                
            });


       // console.log(huiding,987);




    })
})