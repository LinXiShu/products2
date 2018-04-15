/* 
* @Author: Marte
* @Date:   2018-04-09 13:51:18
* @Last Modified by:   Marte
* @Last Modified time: 2018-04-15 16:36:31
*/

require(['config'], function(){
    require(['jquery'],function($,co){

// var _code = co.getCode().toLowerCase();

            var iii = 0;
            var ppp = 0;

            $('.shen_input').on('change','input',function(){
                var $p = $(this).next()
                console.log($p);

                if($(this)[0].id == 'tel'){
                    console.log('tel');
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
                var ePattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                    if(!ePattern.test($(this).val())){
                            $(this).val('');
                            $(this).attr('placeholder','    请输入 正确的邮箱!');
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
                    if(iii == 1 && ppp == 1){
                        alert('注册成功');
                         ajax_qingqiu();
                         location.href = '../html/login.html';
                    };
                    if((iii == 0 && ppp == 0) || iii == 0 || ppp == 0){
                        alert('注册失败');
                    }
            });


function ajax_qingqiu(e){
      

            var username = $('#tel').val();
            var password = $('#pwd1').val();
            // console.log(username);
            // console.log(password);

            if($('#isAgree')[0].checked){
                 $.ajax({
                    url: '../api/signin.php',
                    type: 'GET',
                    data: {
                        uname: username,
                        pwd: password,
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
                })   
            }else{
                alert('不清楚明白，你可以不注册好吧？')
            }
          
        };



    })
})