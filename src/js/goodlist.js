/* 
* @Author: Marte
* @Date:   2018-04-09 15:47:42
* @Last Modified by:   Marte
* @Last Modified time: 2018-04-14 16:22:07
*/

console.log('这里是列表页， 功能:点击分类 动态生成不同商品 ( 类似于分页 )');

require(['config'], function(){
    require(['jquery','fenYe'], function(){

    
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




// 找到 点击 的 li 的 index 值 ，对应 数据库的 分类  
//    
    var $li = $('.zuo_t_ul').children('li');
       
      $li.click(function(){ 

       $ids = $li.index(this);

        // console.log( $ids);

// 执行 封装好的 ajax 请求函数 以及 生成列表
        pageLoad();


// 点击 分类 后 分页 页数 跟新 为 原来 1
        var span_sz = $('.span_sz');
        var sz = 1;
        // console.log(span_sz);

        $('.span_sz').html('');
        $('.span_sz').html(sz);

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

//  ajax 
        $.ajax({
            url: '../api/details.php',
            dataType: 'json',
            data: {ip: jrgwc_tj},
            success:function(ress){
                // console.log(ress);
// 加入成功
                if(ress){
                  shoppingCartAnimate();
                }else{
                   alert('加入失败');

                }


            }
        });


////////////////////////////////////////////////
// 加入购物车 ，动画  在 加入购物车 ajax 成功 后执行，            
// 运用延时器 延时 ，解决 异步 问题 。                       
// 知识点：  js 获取的 Node 节点 ，转换成  数组形式            
// 方便 jq 使用：   good_frgwc  =  $( good_frgwc ) 
////////////////////////////////////////////////


function shoppingCartAnimate(){
//  飞入购物车 动画
// 获取 所点击 的 位置 对应的 照片  ----------------------
        var good_frgwc = jrgwc[jrgwc_idx].parentNode.previousSibling.previousSibling.previousSibling.childNodes[0];
        good_frgwc = $(good_frgwc);

        // console.log(good_frgwc);

        var good_gwc = $('.dw_gwc');
        
    var flyElm = good_frgwc.clone();

    $('body').append(flyElm);

    flyElm.css({
        'z-index': 9000,
        'display': 'block',
        'position': 'absolute',
        'top': good_frgwc.offset().top +'px',
        'left': good_frgwc.offset().left +'px',
        'width': good_frgwc.width() +'px',
        'height': good_frgwc.height() +'px'
    });
    flyElm.animate({
        top: good_gwc.offset().top + 40,
        left: good_gwc.offset().left,
        width: 10,
        height: 10
    }, 'slow', function() {
        flyElm.remove();
    });
}



    })


},300)
};


    })

})
