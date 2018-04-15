/* 
* @Author: Marte
* @Date:   2018-04-11 19:10:29
* @Last Modified by:   Marte
* @Last Modified time: 2018-04-14 14:57:03
*/

    // console.log(gid)    

    console.log($('.jiarugouwuche'),999);
    $('.jiarugouwuche').click(function(){
        
        console.log(gid);

        $.ajax({
            url: '../api/details.php',
            dataType: 'json',
            data: {ip: gid},
            success:function(ress){

            if(ress){
                console.log('加入购物车成功');
                feiRuGouWuChe();
            }else{
                alert('加入购物车失败');
            }
            
            }
        })
})


    //    飞入   购物车
       
    // 点击按钮 触发 事件
            var jiarugouwuche_btn = $('.jiarugouwuche');
    // 起飞点
            var img_cs = $('.img_cs');
    // 落地点
            var dw_gwc = $('.dw_gwc'); 
            
            console.log(jiarugouwuche_btn, img_cs, dw_gwc,12345);
        
        
        function feiRuGouWuChe(){
    console.log(img_cs)
            var flyElm = img_cs.clone();

            $('body').append(flyElm);

            flyElm.css({
                'z-index': 9000,
                'display': 'block',
                'position': 'absolute',
                'top': img_cs.offset().top +'px',
                'left': img_cs.offset().left +'px',
                'width': img_cs.width() +'px',
                'height': img_cs.height() +'px'
            });
            flyElm.animate({
                top: dw_gwc.offset().top + 35,
                left: dw_gwc.offset().left,
                width: 10,
                height: 10
            }, 'slow', function() {
                flyElm.remove();
            });
        }