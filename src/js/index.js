




require(['config'], function(){
    require(['jquery','index','slide'],function(){


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


  $.ajax({
            url: '../api/index.php',
            dataType: 'json',
            data:  1,
            success:function(res){
                console.log(res);


// 获取到 相应的 点击 索引值
                var $idx1 ;
                    var $idx2;
                    var $idx3;
                    var $idx4;
                var $aa1 = $('.fenlei_t').children('span')
                var $aa2 = $('.FFF1').children('.FFFa')
                var $aa3 = $('.FFF2').children('.FFFa')
                var $aa4 = $('.FFF3').children('.FFFa')

// console.log($aa2)


// --------------------------
                     var html = '';
                        $.each(res.data1, function(index, val){
                            html += idx_FS(val)

                        });
                        $('.fenlei_b_b').html('');
                        $('.fenlei_b_b').html(html);
// ---------------------------
// 11111111111111111111
                     var html = '';
                        $.each(res.data1, function(index, val){
                            html += F_FS(val)
                        });
                        $('.affa1').html('');
                        $('.affa1').html(html);

// ---------------------------
// ---------------------------
// 2222222222222222222
                     var html = '';
                        $.each(res.data2, function(index, val){
                            html += F_FS(val)
                        });
                        $('.affa2').html('');
                        $('.affa2').html(html);

// ---------------------------
// 
// ---------------------------
// 3333333333333333333
                     var html = '';
                        $.each(res.data3, function(index, val){
                            html += F_FS(val)
                        });
                        $('.affa3').html('');
                        $('.affa3').html(html);



// ---------------------------
                $aa1.mouseover(function(){
                     $idx1 = $aa1.index(this);
                     // console.log($idx1)
// --------------------------------------------------
// 尝试 第   1  次 获取 数据
                    if($idx1 == 0){
                        var html = '';
                        $.each(res.data1, function(index,val){
                            html += idx_FS(val)
                        });
                           $('.fenlei_b_b').html('');
                           $('.fenlei_b_b').html(html);
                    }
// 尝试 第    2   次 获取 数据
                    else if($idx1 == 1){
                        var html = '';
                        $.each(res.data2, function(index,val){
                            html += idx_FS(val)
                        });
                           $('.fenlei_b_b').html('');
                           $('.fenlei_b_b').html(html);
                    }                    
// 尝试 第    3   次 获取 数据
                    else if($idx1 == 2){
                        var html = '';
                        $.each(res.data3, function(index,val){
                            html += idx_FS(val)
                        });
                           $('.fenlei_b_b').html('');
                           $('.fenlei_b_b').html(html);
                    }
// 尝试 第   4   次 获取 数据
                    else if($idx1 == 3){
                        var html = '';
                        $.each(res.data4, function(index,val){
                            html += idx_FS(val)
                        });
                           $('.fenlei_b_b').html('');
                           $('.fenlei_b_b').html(html);
                    }
// 尝试 第   5   次 获取 数据
                    else{
                        var html = '';
                        $.each(res.data5, function(index,val){
                            html += idx_FS(val)
                        });
                           $('.fenlei_b_b').html('');
                           $('.fenlei_b_b').html(html);
                    }


        })
   
// --------------------------------------------------
$aa2.mouseover(function(){
    $idx2 =  $aa2.index(this);
    console.log($idx2)

// 尝试 第   1  次 获取 数据
//
                    if($idx2 == 0){
                        var html = '';
                        $.each(res.data1, function(index,val){
                            html += F_FS(val)
                        });
                           $('.affa1').html('');
                           $('.affa1').html(html);
                    }
// 尝试 第    2   次 获取 数据
                    else if($idx2 == 1){
                        var html = '';
                        $.each(res.data2, function(index,val){
                            html += F_FS(val)
                        });
                           $('.affa1').html('');
                           $('.affa1').html(html);
                    }                    
// 尝试 第    3   次 获取 数据
                    else if($idx2 == 2){
                        var html = '';
                        $.each(res.data3, function(index,val){
                            html += F_FS(val)
                        });
                           $('.affa1').html('');
                           $('.affa1').html(html);
                    }
// 尝试 第   4   次 获取 数据
                    else if($idx2 == 3){
                        var html = '';
                        $.each(res.data4, function(index,val){
                            html += F_FS(val)
                        });
                           $('.affa1').html('');
                           $('.affa1').html(html);
                    }
// 尝试 第   5   次 获取 数据
                    else if($idx2 == 4){
                        var html = '';
                        $.each(res.data5, function(index,val){
                            html += F_FS(val)
                        });
                           $('.affa1').html('');
                           $('.affa1').html(html);
                    }

            })


$aa3.mouseover(function(){
    $idx3 =  $aa3.index(this);
    console.log($idx3)

// 尝试 第   1  次 获取 数据
//
                    if($idx3 == 0){
                        var html = '';
                        $.each(res.data1, function(index,val){
                            html += F_FS(val)
                        });
                           $('.affa2').html('');
                           $('.affa2').html(html);
                    }
// 尝试 第    2   次 获取 数据
                    else if($idx3 == 1){
                        var html = '';
                        $.each(res.data2, function(index,val){
                            html += F_FS(val)
                        });
                           $('.affa2').html('');
                           $('.affa2').html(html);
                    }                    
// 尝试 第    3   次 获取 数据
                    else if($idx3 == 2){
                        var html = '';
                        $.each(res.data3, function(index,val){
                            html += F_FS(val)
                        });
                           $('.affa2').html('');
                           $('.affa2').html(html);
                    }
// 尝试 第   4   次 获取 数据
                    else if($idx3 == 3){
                        var html = '';
                        $.each(res.data4, function(index,val){
                            html += F_FS(val)
                        });
                           $('.affa2').html('');
                           $('.affa2').html(html);
                    }
// 尝试 第   5   次 获取 数据
                    else if($idx3 == 4){
                        var html = '';
                        $.each(res.data5, function(index,val){
                            html += F_FS(val)
                        });
                           $('.affa2').html('');
                           $('.affa2').html(html);
                    }

            })



$aa4.mouseover(function(){
    $idx4 =  $aa4.index(this);
    console.log($idx4)

// 尝试 第   1  次 获取 数据
//
                    if($idx4 == 0){
                        var html = '';
                        $.each(res.data1, function(index,val){
                            html += F_FS(val)
                        });
                           $('.affa3').html('');
                           $('.affa3').html(html);
                    }
// 尝试 第    2   次 获取 数据
                    else if($idx4 == 1){
                        var html = '';
                        $.each(res.data2, function(index,val){
                            html += F_FS(val)
                        });
                           $('.affa3').html('');
                           $('.affa3').html(html);
                    }                    
// 尝试 第    3   次 获取 数据
                    else if($idx4 == 2){
                        var html = '';
                        $.each(res.data3, function(index,val){
                            html += F_FS(val)
                        });
                           $('.affa3').html('');
                           $('.affa3').html(html);
                    }
// 尝试 第   4   次 获取 数据
                    else if($idx4 == 3){
                        var html = '';
                        $.each(res.data4, function(index,val){
                            html += F_FS(val)
                        });
                           $('.affa3').html('');
                           $('.affa3').html(html);
                    }
// 尝试 第   5   次 获取 数据
                    else if($idx4 == 4){
                        var html = '';
                        $.each(res.data5, function(index,val){
                            html += F_FS(val)
                        });
                           $('.affa3').html('');
                           $('.affa3').html(html);
                    }

            })



    }
});


        function idx_FS(val){
            return  '<div class=" '+ val.id +' fl idxa">' +
                '<a class="" href="../html/details.html?gid='+ val.id+'">'+
                '<div class="pho_div">'+ 
                    '<img src="'+ val.photo +'"  class="pho1"/>'
                 +'</div>'+
                '<div class="data_name">'+ val.username +'</div>'+
                '<div class="data_yuan">'+ "￥" +val.price +'</div></a>'
            +'</div>'
        }


        function F_FS(val){
            return  '<div class=" '+ val.id +' fl idxa" style=" width:180px;height:230px; position: relative;">' +
                '<a class="" href="../html/details.html?gid=' +val.id+'" >'+
                '<div class="pho_div" style="width:185px;height:179px;">'+ 
                    '<img src="'+ val.photo +'"  class="pho1" style="width: 100%; height: 100%;"/>'
                 +'</div>'+
                '<div class="data_name" style="font-size: 12px;">'+ val.username +'</div>'+
                '<div class="data_yuan" style="font-size: 12px; position:absolute;top:205px;color: red; font-size: 16px;text-weight: bold; left:130px;">'+ "￥" +val.price +'</div></a>'
            +'</div>'
        }




    })
})