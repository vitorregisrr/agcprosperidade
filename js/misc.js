(function () {
    'use strict';

      // Mobile navbar dinamic height
      const replaceStyles = function(){
        if( window.innerWidth < 992){
            $('.main-nav__content .overlay').css('min-height', $('.home-tree__banner').height() + 6);
        }else{
            $('.main-nav__content .overlay').css('min-height', 0);
        }
        
        if(window.innerWidth < 992){
            $('.nossas-solucoes__item').attr('data-wow-delay', '0.8s');
            $('.nossas-solucoes__item .line').attr('data-wow-delay', '1s');
            $('.nossas-solucoes__item .desc').attr('data-wow-delay', '1.4s');
        }
        
        $('#newsletter-line').css('width', $('#newsletter-form').width() + 0);
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

    // Womman banner effects
    var womanImage = document.getElementById('womanImage');
    new simpleParallax(womanImage, {
        overflow: true,
        orientation: 'left',
        transition: 'ease-in-out',
        scale: 1.1
    });

    $('[data-toggle="desafio"]').click( function(){
        $('#desafios-boxes').show();
        var target = $(this).attr('data-target');
        $(target).addClass('active');

        if(window.innerWidth < 992){
            $(target).siblings().removeClass('active');
        }
    });

    window.addEventListener("resize", replaceStyles);
})();