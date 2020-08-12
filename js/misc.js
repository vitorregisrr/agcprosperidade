(function () {
    'use strict';

    //Init Libs
    new WOW().init();
    $('.lazy').lazyload();

    // Scroll top
    var scrollTopBtn = $('.scroll-top');
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            scrollTopBtn.addClass('show');
        } else {
            scrollTopBtn.removeClass('show');
        }
    });
    scrollTopBtn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });

    // Smooth Scrooling on anchor
    $('a[href*=\\#]:not([href$=\\#])').click(function () {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href'))
                .offset()
                .top - 80
        }, 500);
    });

    // Mobile navbar dinamic height
    const setMobileNavHeight = function(){
        if( window.innerWidth < 992){
            $('.main-nav__links').css('min-height', $('.home-tree__banner').height() + 2);
        }else{
            $('.main-nav__links').css('min-height', 0);
        }
    }
    setMobileNavHeight();
    window.addEventListener("resize", setMobileNavHeight);
})();