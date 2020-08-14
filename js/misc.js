(function () {
    'use strict';

      // Mobile navbar dinamic height
      const replaceStyles = function(){
        if( window.innerWidth < 992){
            $('.main-nav__links').css('min-height', $('.home-tree__banner').height() + 2);
        }else{
            $('.main-nav__links').css('min-height', 0);
        }

        if(window.innerWidth < 992){
            $('.nossas-solucoes__item').attr('data-wow-delay', '0.8s');
            $('.nossas-solucoes__item .line').attr('data-wow-delay', '1s');
            $('.nossas-solucoes__item .desc').attr('data-wow-delay', '1.4s');
        }
    }
    replaceStyles();
    
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

    window.addEventListener("resize", replaceStyles);
})();