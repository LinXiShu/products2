


require.config({
    paths: {
        'jquery' : '../lib/jquery-3.3.1',
        'carousel' : '../lib/jQuery.carousel/jQuery.zjfcarousel',
        'login' : '../js/login',
        'regist' : '../js/regist',
        'index' : '../js/index',
        'slide' : '../js/slide',
        'details' : '../js/details',
        'zjf_fdj' : '../js/zjf_fdj',
        'jiarugouwuche' : '../js/jiarugouwuche',
        'shopcar' : '../js/shopcar',
        'fenYe'  :  '../js/fenye',

    },
    shim: {
        'carousel' : ['jquery'],
        'index' : ['jquery'],
        'slide' : ['jquery'],
        'details' : ['jquery'],
        'zjf_fdj' : ['jquery'],
        'jiarugouwuche' : ['jquery'],
        'shopcar' : ['jquery'],
        'fenYe' : ['jquery'],
    }

});





