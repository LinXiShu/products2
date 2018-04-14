/* 
* @Author: Marte
* @Date:   2018-04-09 13:51:18
* @Last Modified by:   Marte
* @Last Modified time: 2018-04-09 14:46:46
*/

require(['config'], function(){
    require(['jquery'],function($,co){

        $('.btn_reg').on('click',function(e){
            

        $('.fc').on('change','input',function(){

            var $this = $(this); 
            var $p = $this.next(); 

            // console.log($this);

            if(this.id == 'pwd1'){
                var reg = /[a-z0-9A-Z]{6,16}/
                if(reg.test($this.val())){
                    // $p.text('密码格式不对');
                    console.log('密码格式不对好吧, 大哥..');
                    return 
                }else{
                    $p.text('');
                }
            }

    });

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
                console.log('不清楚明白，你可以不注册好吧？')
            }
            e.preventDefault();
        })
    })
})