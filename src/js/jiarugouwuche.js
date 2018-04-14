/* 
* @Author: Marte
* @Date:   2018-04-11 19:10:29
* @Last Modified by:   Marte
* @Last Modified time: 2018-04-12 13:41:55
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
                alert('加入购物车成功');
            }else{
                alert('加入购物车失败');
            }
            
            }
        })
})