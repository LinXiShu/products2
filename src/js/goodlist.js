/* 
* @Author: Marte
* @Date:   2018-04-09 15:47:42
* @Last Modified by:   Marte
* @Last Modified time: 2018-04-13 21:36:09
*/

console.log('这里是列表页， 功能:点击分类 动态生成不同商品 ( 类似于分页 )');

require(['config'], function(){
    require(['jquery'], function(){

        
        // 鼠标 移入 定位 动画
                
               var cont2 =  $('.cont2')
               var cont2_dl = cont2.children('.dw_dl').children('.dw_dl_dc');

               console.log(cont2_dl,988);
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

            

               console.log(huiding,987);




//   事先 获取第一个分类的 数据 、

        $.ajax({
            url: '../api/goodslist.php',
            dataType: 'json',
            data: {pageNo: 5},
            success:function(res){
                var html = '';
                var FR_html = ''; 

                $.each(res.data, function(index, val) {
//   每 条 值    val
                     html += getHtml(val);
                });
                $('.you').html('');
                $('.you').html(html);

// // 点击事件 飞入购物车  注 ：必须知道 点击的是哪一个图片
            
            }
        });

// ---------------------------------、

// 飞入购物车

function FR(){
    return '<div style=" position:absolute;z-index:10000;width:600px;height:600px; background:url("'+val.photo +'")no-repeat ">asd</div>'
}




// 找到 点击 的 li 的 index 值 ，对应 数据库的 分类  
//    
    var $li = $('.zuo_t_ul').children('li');
       
      $li.click(function(){ 

       $ids = $li.index(this);

        // console.log( $ids);

// 执行 封装好的 ajax 请求函数 以及 生成列表
        pageLoad();
       
      }); 

          var $li_2 = $('.aaa').children('.li_t');
             // console.log($li_2)
            $li_2.click(function(){ 
             $ids = $li_2.index(this);
              // console.log($ids,123);

              pageLoad();
           
            }); 
// 00000
    
        function pageLoad(){
            $.ajax({
                url: '../api/goodslist.php',
                dataType: 'json',
                data: {pageNo: $ids+1},
                success:function(res){
                    var html = '';
                    $.each(res.data, function(index, val) {
                         html += getHtml(val);
                    });
                    $('.you').html('');
                    $('.you').html(html);
flll();
                }
            });
        }


//                              在 下面 设置 了 传参 ↓↓↓
        function getHtml(val){
            return '<div class="gl_box fl" data-id="'+ val.id +'" style="margin: 10px 0 0 10px; border: 1px solid #f0f0f0;" >'+
            '<a href="../html/details.html'+'?gid='+ val.id +'" class="a_div" data-id="'+ val.id +'"><img src="'+val.photo+'" width="230" height="268" class="pho" /></a>' +
            '<a href="../html/details.html'+'?gid='+ val.id +'" data-id="'+ val.id +'"><span class="nam z12" style="">'+val.username+'</span></a>' + 
            '<span class="jiage z18 red z20">'+ "￥"+val.price+'</span>' +
                '<div class="duibi">'+
                    '<div class="jiaru fr red z12" id="' +val.id+ '" style="line-height:24px;text-align:center;" id="'+val.id+'">加入购物车</div>'+
                '</div>'
            +'</div> '

        }

    // var $you_s = $('.you');

    //     // console.log($you_s,'999');

    //     $you_s.on('click','.gl_box',function(){
    //         var $this = $(this);

    //     // console.log( $this.attr('data-id') );

    //         var id = $this.attr('data-id')

    //         var this_div = $this.children('.a_div')[0].href

    //         this_div += '?'+'gid='+id;

    //         console.log(this_div);

    //     })
    
flll();
function flll(){
setTimeout(function(){
    var jrgwc =  $('.jiaru');
    // console.log(jrgwc);
    
    jrgwc.click(function(){
        var jrgwc_idx = jrgwc.index(this);
        
        var jrgwc_tj = jrgwc[jrgwc_idx].id;

        // console.log(jrgwc_tj);
//  ajax 
        $.ajax({
            url: '../api/details.php',
            dataType: 'json',
            data: {ip: jrgwc_tj},
            success:function(ress){
                // console.log(ress);
// 加入成功
                if(ress){
                   alert('加入成功');
                }else{
                   alert('加入失败');

                }


            }
        });



    })

},300)
};


    })

})
