/* 
* @Author: Marte
* @Date:   2018-04-09 13:51:18
* @Last Modified by:   Marte
* @Last Modified time: 2018-04-16 16:06:19
*/

require(['config'], function(){
    require(['jquery'],function($,co){

// var _code = co.getCode().toLowerCase();
            var ddd = 0;
            var iii = 0;
            var ppp = 0;

            $('.shen_input').on('change','input',function(){
                var $p = $(this).next()
                console.log($p);

                if($(this)[0].id == 'tel'){
                    var idd = /^[a-zA-Z0-9_-]{4,16}$/;
                    if(!idd.test($(this).val())){
                        $(this).val('');
                        $(this).attr('placeholder','   4到16位（字母，数字，下划线，减号）!');
                // 密码 边框 变色 右边没有
                        $(this)[0].previousSibling.previousSibling.style = 'border: 1px solid red;border-right: none;';
                // 密码 输入框边框 变色；
                        $(this)[0].style = 'border: 1px solid red; border-left: none;'
                        ddd = 0;
                        console.log(ddd);
                    }else{
                        console.log('ok!')
                        $(this)[0].previousSibling.previousSibling.style = 'border: 1px solid #d0d0d0; border-right: none;';
                         $(this)[0].style = 'border: 1px solid #d0d0d0; border-left: none;' 
                        ddd = 1;
                        console.log(ddd);
                    }
                };
                if($(this)[0].id == 'pwd1'){
                    var reg = /[a-z0-9A-Z]{6,16}/
                    if(!reg.test($(this).val())){
                        $(this).val('');
                        $(this).attr('placeholder','    密码不小于 6 位！');
                // 密码 边框 变色 右边没有
                        $(this)[0].previousSibling.previousSibling.style = 'border: 1px solid red;border-right: none;';
                // 密码 输入框边框 变色；
                        $(this)[0].style = 'border: 1px solid red; border-left: none;'
                        iii = 0;
                        console.log(iii);
                    }else{
                        console.log('ok!')
                        $(this)[0].previousSibling.previousSibling.style = 'border: 1px solid #d0d0d0; border-right: none;';
                         $(this)[0].style = 'border: 1px solid #d0d0d0; border-left: none;' 
                        iii = 1;
                        console.log(iii);
                    }
                };
                if($(this)[0].id == 'Email'){
                var ePattern = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
                    if(!ePattern.test($(this).val())){
                            $(this).val('');
                            $(this).attr('placeholder','    请输入 正确手机 !');
                    // 密码 边框 变色 右边没有
                            $(this)[0].previousSibling.previousSibling .style = 'border: 1px solid red;border-right: none;';
                    // 密码 输入框边框 变色；
                            $(this)[0].style = 'border: 1px solid red; border-left: none;'
                        ppp = 0;
                        console.log(ppp);
                        }else{
                            console.log('ok!')
                            $(this)[0].previousSibling.previousSibling .style = 'border: 1px solid #d0d0d0; border-right: none;';
                             $(this)[0].style = 'border: 1px solid #d0d0d0; border-left: none;' ;
                        ppp = 1 ;
                        console.log(ppp);
                        }
                }

    });




  $('.btn_reg').on('click',function(e){
                console.log('aaa');
                console.log(iii);
                console.log(ppp);
                    if(iii == 1 && ppp == 1 && ddd == 1){
                        alert('注册成功');
                         ajax_qingqiu();
                         location.href = '../html/login.html';
                    };
                    if((iii == 0 && ppp == 0) || iii == 0 || ppp == 0 || ddd == 0 || (iii == 0 && ddd == 0) || (ppp == 0 && ddd == 0)){
                        alert('注册失败');
                    }
            });


function ajax_qingqiu(e){
        


            var username = $('#tel').val();
            var password = $('#pwd1').val();
            var Email    = $('Email').val();
            // console.log(username);
            // console.log(password);

            if($('#isAgree')[0].checked){
                
            }else{
                alert('不清楚明白，你可以不注册好吧？');
  
            }
          
        
         $.ajax({
            url: '../api/signin.php',
            type: 'GET',
            data: {
                uname: username,
                pwd: password,
                Email: Email,
            },
            success:function(data){console.log(data)
                if(data == 'success'){
                    // location.href = '../html/login.html';
                    // console.log('0k')
                }else if(data == 'fail'){
                    // $('#tel').next().text('用户名已经存在');
                    console.log('用户已经存在');
                }
            }
        });   
};

    })
})