/* 
* @Author: Marte
* @Date:   2018-04-09 15:47:42
* @Last Modified by:   Marte
* @Last Modified time: 2018-04-09 19:51:07
*/

console.log('这里是列表页， 功能点击不同分类生成不同数据');

require(['config'], function(){
    require(['jquery'], function(){

    var $li = $('.zuo_t_ul').children('li');
       
      $li.click(function(){ 
       $ids = $li.index(this);
        console.log( $ids);
        
        pageLoad()

      }); 

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
                }
            });
        }

        function getHtml(val){
            return '<div class="gl_box fl" id="'+ val.id +'">'+
            '<a href="#"><img src="'+val.photo+'" width="230" height="268" class="pho" />' +
            '<a href="#"><span class="nam">'+val.username+'</span></a>' + 
            '<a href="#"><span class="z18 red z20">'+ "￥"+val.price+'</span></a>' +
                '<div class="duibi">'+
                    '<div class="jiaru fr red ">加入购物车</div>'+
                '</div>'
            +'</div>'

        }
    })

})
