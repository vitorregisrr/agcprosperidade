(function () {
    'use strict';

      // Mobile navbar dinamic height
      const replaceStyles = function(){
        if( window.innerWidth < 992){
            $('.main-nav__content .overlay').css('min-height', $('.home-tree__banner').height() + 50);
        }else{
            $('.main-nav__content .overlay').css('min-height', 0);
        }
        
        if(window.innerWidth < 992){
            $('.nossas-solucoes__item').attr('data-wow-delay', '0.8s');
            $('.nossas-solucoes__item .line').attr('data-wow-delay', '1s');
            $('.nossas-solucoes__item .desc').attr('data-wow-delay', '1.4s');
        }
        
    }
    replaceStyles();

    // IOS FIXIES
    function iOS() {
        return [
          'iPad Simulator',
          'iPhone Simulator',
          'iPod Simulator',
          'iPad',
          'iPhone',
          'iPod'
        ].includes(navigator.platform)
        // iPad on iOS 13 detection
        || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
      }

    if(IOS){
        $('.direto-blog__title').addClass('ios');
    }

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
        $(target).siblings().removeClass('active');
    });


    // Cookies tab function
    function acceptCookies(){
        $('.home-tree').removeClass('has-cookies');
        $('.home-tree__cookies').addClass('hide');

        // RESET WOW FROM HOME-TREE
        $('.home-tree .main-nav__links li').css({
            'visibility' : 'hidden',
            'animation-name' : 'none'
        }).removeClass('animated');

        $('.home-tree .main-nav__links li').css({
            'visibility' : 'visible',
            'animation-name' : 'fadeIn'
        }).addClass('animated');
        replaceStyles();


    }
    $('.home-tree__cookies .closee').click(acceptCookies);

    $(window).scroll(function () {
        var height = $('.home-tree').height() - 200;
        if ($(window).scrollTop() > height ) {
            acceptCookies();
        }
    });

     //Count up script
     function checkVisible(elm) {
        var rect = elm.getBoundingClientRect();
        var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
        return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
      }
     $(window).scroll(function () {
        $('.count').each(function () {
            if (checkVisible(this)) {
                
                const $this = $(this);
                if ($this.attr('data-counted') == 'false') {
                    $this.attr('data-counted', true);
        
                    setTimeout(function () {
                        jQuery({
                            Counter: 0
                        }).animate({
                            Counter: $this.text()
                        }, {
                            duration: parseInt($this.attr('data-duration')) || 2000,
                            easing: 'swing',
                            step: function () {
                                $this.text(Math.ceil(this.Counter));
                            }
                        });
                    }, $this.attr('data-delay') || 200);
                }
            }
        })
    })

    window.addEventListener("resize", replaceStyles);
})();