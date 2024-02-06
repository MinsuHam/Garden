$(function() {
    //hamburger
    $('.resp_top_hamburger').mouseover(function() {
        $('.resp_top_hamburger > a').addClass('on');
    });
    $('.resp_top_hamburger').mouseout(function() {
        $('.resp_top_hamburger > a').removeClass('on');
    });

    //search_btn 
    $('.search_btn').click(function() {
        $('.nav_bar_right_container').hide();
        $('.search_new').stop().fadeIn(500);
    });
    $('.close').click(function() {
        $('.nav_bar_right_container').show();
        $('.search_new').stop().fadeOut(200);
    });

    //two_display_wrap .two_display_nav
    let tabBtn = $(".displayTabContainer > li");   
    let tabCont = $(".tab_cont > div");    
    tabCont.hide().eq(0).show();    
    tabBtn.click(function() {
        const index = $(this).index();  
        $(this).addClass("current").siblings().removeClass("current");    
        tabCont.eq(index).show().siblings().hide();
    });



});//jQuery