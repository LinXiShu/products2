/* 
* @Author: Marte
* @Date:   2018-04-09 10:33:46
* @Last Modified by:   Marte
* @Last Modified time: 2018-04-09 13:27:03
*/

console.log(999);

require(['config'],function(){
    require(['jquery'],function($,co){
        
        var $uname = $('#uname');
        var $pwd = $('#pwd')
        var $error = $('#error_tip');

        $error.css('color','#f00');



        $('.btn-login').on('click',function(){
            var uname = $uname.val();
            var pwd = $pwd.val();

            console.log(uname);
            console.log(pwd);

            
            $.ajax({
                url: '../api/login.php',
                data: {
                    username:uname,
                    password:pwd,
                },
                success:function(data){

                    console.log(data)
                    if(data == 'success'){
                        console.log(9998);
                        location.href = '../index.html';
                    }else if(data == 'fail'){
                        $error.text('账户或用户不正确');
                    }else if(data == 'unExist'){
                        $error.text('账户不存在');
                    }
                }
            })   
// 
            
        })
    })
});
