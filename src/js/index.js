




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
// ...............................
            

        })
   
// --------------------------------------------------
$aa2.mouseover(function(){
    $idx2 =  $aa2.index(this);
    // console.log($idx2)

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
touMing1();
            })


$aa3.mouseover(function(){
   
    $idx3 =  $aa3.index(this);
    // console.log($idx3)

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
touMing2();
            })



$aa4.mouseover(function(){
    $idx4 =  $aa4.index(this);
    // console.log($idx4)

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
touMing3();
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
            return  '<div id="'+ val.id +'" class=" '+ val.id +' fl idxa" style="margin: 0px 2px 0px 0;border-right:1px solid #d0d0d0; border-bottom:1px solid #d0d0d0; width:180px;height:245px; position: relative;">' +
                '<a class="" href="../html/details.html?gid=' +val.id+'" >'+
                '<div class="pho_div" style="width:170px;height:179px;">'+ 
                    '<img src="'+ val.photo +'"  class="pho1" style="width: 100%; height: 100%;"/>'
                 +'</div>'+
                '<div class="data_name" style="font-size: 12px;">'+ val.username +'</div>'+
                '<div class="data_yuan" style="font-size: 12px; position:absolute;top:220px;color: #EF3C79 ; font-size: 16px;font-weight: bold; left:10px;">'+ "￥" +val.price +'</div><span style="position: absolute; top: 224px;left: 60px;font-size: 14px;text-decoration:line-through;">￥1123</span></a>'
            +'</div>'
        }

//   鼠标  移动 到商品 其他商品 半透明
touMing1();
function touMing1(){
  
    // 获取 节点
    setTimeout(function(){
        var F1 = $('.FFF1_box').children('.affa1').children('.idxa');
        // var F2 = $('.FFF2_box').children('.affa2').children('.idxa');
        // var F3 = $('.FFF3_box').children('.affa3').children('.idxa');

        F1.mouseover(function(){
            F1_this = F1.index(this);
            $(F1[F1_this]).siblings().stop().animate({opacity:'0.4'});
            // .siblings());
        })
        F1.mouseout(function(){
            F1_this = F1.index(this);
            $(F1[F1_this]).siblings().stop().animate({opacity:'1'});
        })

    }, 200)
};

touMing2();
function touMing2(){
   
    // 获取 节点
    setTimeout(function(){
        // var F1 = $('.FFF1_box').children('.affa1').children('.idxa');
        var F2 = $('.FFF2_box').children('.affa2').children('.idxa');
        // var F3 = $('.FFF3_box').children('.affa3').children('.idxa');

        F2.mouseover(function(){
            F2_this = F2.index(this);
            $(F2[F2_this]).siblings().stop().animate({opacity:'0.4'});
            // .siblings());
        })
        F2.mouseout(function(){
            F2_this = F2.index(this);
            $(F2[F2_this]).siblings().stop().animate({opacity:'1'});
        })

    }, 200)
};
touMing3();
function touMing3(){
   
    // 获取 节点
    setTimeout(function(){
        // var F1 = $('.FFF1_box').children('.affa1').children('.idxa');
        // var F2 = $('.FFF2_box').children('.affa2').children('.idxa');
        var F3 = $('.FFF3_box').children('.affa3').children('.idxa');

        F3.mouseover(function(){
            F3_this = F3.index(this);
            $(F3[F3_this]).siblings().stop().animate({opacity:'0.4'});
            // .siblings());
        })
        F3.mouseout(function(){
            F3_this = F3.index(this);
            $(F3[F3_this]).siblings().stop().animate({opacity:'1'});
        })

    }, 200)
};

    })
})