/* 
* @Author: Marte
* @Date:   2018-04-12 08:49:36
* @Last Modified by:   Marte
* @Last Modified time: 2018-04-13 15:31:46
*/

require(['config'], function(){
    require(['jquery'], function($){
        console.log(991);

        $.ajax({
            url: '../api/shopcar.php',
            dataType: 'json',
            data: 0,
            success:function(red){
                var html = '';
                var index = 0;
                console.log(red.data);
               
            
                $.each(red.data, function(index, red) {
                    console.log(red);
                     html += gwc_HQ(red);
                });
                 $('.gwc_b').html(html);

            }
        });


        function gwc_HQ(red){
            return  '<div class="Box">'+
            '<div class="gwc_box"> '
            +'<input type="checkbox" class=" cbox fl" id="'+ red.id +'"/>'+
            '<img class="photo fl" src="'+red.photo+'" width="80" height="80"/>'+
            '<div class="usname  fl">'+red.username+'</div>'+
            '<div class="price fl">'+red.price+'元</div>'+
            '<div class="qty fl">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+red.qty+'件</div>'+
            '<div class="xj fl" style="color: #EF3C79;">'+ red.xj + ' 元</div>'+
            '<div class="sc fl"><button class="btns" id="'+ red.id +'">取消订单</button></div>'+

            '</div>'
            +'</div>'
        };


setTimeout(function(){
var baocun;
// 全选   /  全不选 ;
var bigbox = $('.bigbox');

var cbox = $('.gwc_b').children('.Box').children('.gwc_box').children('.cbox');
        bigbox.click(function(){
            cbox.prop('checked',this.checked);
        })


// //  点击 结算  计算 总价钱
//     var ibt = $('.cbox');
//     ibt.click(function(){
// // 筛选出  选中的  checkbox  突破
// // console.log((($('input:checkbox:checked').attr('type')) == true).)
// console.log($('input[type=checkbox]:checked').length+$(this).attr('id'));
//     })

// 获取元素

   

       
       
var cbox2 = $('.cbox')
var idss ;
var annius = $('.btns');


//    点 击   按 钮
annius.click(function(){
// 获取点击是第几个  索引
idss = annius.index(this);

console.log(annius[idss].parentNode.parentNode.parentNode.remove())

// 获取 点击的 按钮 的 属性 id
var idxs = annius[idss].id



// ajax请求
    $.ajax({
        url: '../api/shopcar_sanchu.php',
        dataType: 'json',
        data: {id : idxs},
        success:function(idx){
            console.log(idx);
        }
    })

    
})


}, 200)
    


//////////////
// 删除 订单 /
//////////////    





    })
})