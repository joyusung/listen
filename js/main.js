$(function(){
    $('a').click(function(e){
        e.preventDefault()
    });
    // 전체메뉴 클릭 이벤트
    $('.full_menu').click(function(){
        $('.full_page').fadeIn();
        $('body').addClass('active');
    });
    $('.full_page .menu .close').click(function(){
        $('.full_page').hide();
        $('body').removeClass('active');
        $('.full_page .menu .sub').stop().slideUp();
        $('.full_page .menu > ul > li').removeClass('active');
    });

    // 전체메뉴 nav 클릭 이벤트
    $('.full_page .menu > ul > li').click(function(){
        $('.full_page .menu .sub').stop().slideUp();
        $('.full_page .menu > ul > li').removeClass('active');
        $(this).find('.sub').stop().slideDown();
        $(this).addClass('active');
    });

    $('.popup_close').click(function(){
        $('.popup').fadeOut();
    });
});