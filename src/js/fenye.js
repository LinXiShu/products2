/* 
* @Author: Marte
* @Date:   2018-04-14 10:39:08
* @Last Modified by:   Marte
* @Last Modified time: 2018-04-14 16:12:29
*/

////////////////////////////////////////////
//知识点 ：  1.获取点击 的 父亲们 （数据生成 一模一样的 div）    
//         2.获取 点击 的 父亲的 id / index.      
//                                        
//       3. 父亲 div[idx]  得到 点中 的 父亲div 节点 
////////////////////////////////////////////



// 点中 分类的 li 时 ，恢复 sz 原来 的 值 1， 
                    
var sz_update = $('.zuo_t_ul').children('li');
    // console.log(sz_update)
    
var span_sz = $('.span_sz');
var zuo_btn = $('.FY_zuo');
var you_btn = $('.FY_you');
var sz = 1;

// 跟新 一遍 获取节点 的 操作 ，因为 数据是 动态生成的
sz_update.click(function(){
    sz = 1;
    
})
// .........................

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

// ..........................
// 
// 
// 
zuo_btn.click(function(){
    
    if(sz > 1){
        sz -= 1;
        console.log(sz)
        $('.span_sz').html('');
        $('.span_sz').html(sz);

        $.ajax({
            url: '../api/goodslist.php',
            dataType: 'json',
            data: {pageNo: sz},
            success: function(res){

             var html = '';
             var FR_html = ''; 

                $.each(res.data, function(index, val) {

                     html += getHtml(val);
                });
                $('.you').html('');
                $('.you').html(html);
            }
        })
    }
flll();
});

you_btn.click(function(){

    if(sz > 0){
        sz += 1;
        console.log(sz)
        $('.span_sz').html('');
        $('.span_sz').html(sz);

        $.ajax({
            url: '../api/goodslist.php',
            dataType: 'json',
            data: {pageNo: sz},
            success: function(res){

             var html = '';
             var FR_html = ''; 

                $.each(res.data, function(index, val) {

                     html += getHtml(val);
                });
                $('.you').html('');
                $('.you').html(html);
            }
        })
    }
flll();
});

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