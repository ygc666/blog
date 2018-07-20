$(function(){
    //加载数据
    load();

    //滚动条滚动控制 header 和页面初次加载
    headShow();
    function headShow(){
        if($(document).scrollTop() != 0){
            $('#header').css({
                'height':50,
                'background-color':"#fff",
                'box-shadow': '0 1px 3px rgba(26,26,26,.5)'
            });
            $('#header a').css('color','#000');
            $('#header button').css('background-image','url("./img/head/search1.svg")');
            $('#body .searchBtn .goToTop').css('display','block');
        }else{
            $('#header').css({
                'height':80,
                'background-color':"transparent",
                'box-shadow': 'none'
            });
            $('#header a').css('color','#f2f2f2');
            $('#header button').css('background-image','url("./img/head/search.svg")');
            $('#body .searchBtn .goToTop').css('display','none');
        }
    }
    $(window).scroll(function() {
        headShow();
    });
    //search
    $('#header button').click(function(){
        $('#searchDiv').css('top',0);
    });
    $('#body .searchBtn .search').click(function(){
        $('#searchDiv').css('top',0);
    });
    $('#searchDiv .close').click(function(){
        $('#searchDiv').css('top',-350);
    });
    //goToTop
    $('#body .searchBtn .goToTop').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }); 
        return false; 
    })

    // > 800 head
    $('#head > button').click(function(){
        $('#head #navBox').css('left',0);
    });
    $('#head #navBox > button').click(function(){
        $('#head #navBox').css('left',"-100%");
    });

    
});