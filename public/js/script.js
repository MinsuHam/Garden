$(function() {
    
    //float_banner
	var floatPosition = parseInt($(".float_banner").css('top'));
	// 250px 이런식으로 가져오므로 여기서 숫자만 가져온다. parseInt( 값 );

	$(window).scroll(function() {
		// 현재 스크롤 위치를 가져온다.
		var scrollTop = $(window).scrollTop();
		var newPosition = scrollTop + floatPosition + "px";

		$(".float_banner").stop().animate({
			"top" : newPosition
		}, 800);
	}).scroll();

    
    //nav hover 
    $('.nav_bar_menu > ul > li').mouseover(function() {
        $(this).find('a').addClass('on');
    }); 
    $('.nav_bar_menu > ul > li').mouseout(function() {
        $(this).find('a').removeClass('on');
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
    let navBtn = $('.two_display_nav > li');
    let navCont = $('.two_display_imgbox > div');

    navBtn.click(function() {
        const index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');

        navCont.eq(index).show().siblings().hide();
        navCont.focus();
    });
    
    

});//jQuery