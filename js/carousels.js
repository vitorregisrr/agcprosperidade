(function () {
    'use strict';

    // Home Carousel //
    const desafiosCarousel = $("#desafios-carousel");
    desafiosCarousel.owlCarousel({
        margin: 0,
        items: 1,
        loop: true,
        autoHeight: true,
        autoHeightClass: 'owl-height',
        center: true,
        nav: true,
        dots: false,
        startPosition: 0,
        animateOut: 'fadeOut',
        navText: [
            '', ''
        ],
        animateIn: 'fadeIn',
        dotsContainer: '#login-carousel-dots',
        onChange: function (e) {}
    });

    desafiosCarousel.on('changed.owl.carousel', function (event) {
        console.log(event.item.index - 2);

        if ($('.desafios-boxes__item').hasClass('active')) {
            $('.desafios-boxes__item.active').removeClass('active');
            $(`#desafio-box-${event.item.index - 2}`).addClass('active');
        };
    })

    // Como Trabalhamos Carousel
    const comoTrabCarousel = $("#como-trabalhamos-carousel");
    comoTrabCarousel.owlCarousel({
        dots: true,
        infinite: true,
        nav: true,
        navText: [
            '', '<div class="line wow fadeIn" data-wow-delay="2s"><span class="wow"></span></div>'
        ],
        center: true,
        slideTransition: 'ease-in-out',
        dragEndSpeed: 1000,
        items: 1,
        responsive: {
            992: {
                items: 3
            }
        }
    });
    // Clientes Brands Carousel
    const clientesBrands = $("#clientes-brands-carousel");
    clientesBrands.owlCarousel({
        autoplay: true,
        dots: false,
        loop: true,
        navigation: true,
        center: true,
        dragEndSpeed: 300,
        autoplayTimeout: 2200,
        slideTransition: 'ease-in-out',
        items: 7,
        startPosition: 3,
        responsive: {
            0: {
                items: 2,
                startPosition: 5
            },
            778: {
                center: true,
                items: 4,
                startPosition: 3
            },
            1098: {
                items: 7
            },
            2000: {
                items: 9
            }
        }
    });

    // Como Trabalhamos Carousel
    const clientesDepoimentos = $("#clientes-depoimentos-carousel");
    clientesDepoimentos.owlCarousel({
        autoplay: true,
        dots: true,
        infinite: true,
        center: true,
        slideTransition: 'ease-in-out',
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        dragEndSpeed: 1000,
        items: 1,
        autoHeight: true
    });

    // BLOG CAROUSEL
    function nextBlogItem() {
        var old = parseInt($('#direto-blog').attr('data-current'));
        var current = old === $('.direto-blog__item').length - 1
            ? 0
            : old + 1;
        $('#direto-blog').attr('data-current', current);
        $('.direto-blog__item')
            .find('.wow')
            .attr('data-wow-delay', '0.2s');
        $('.direto-blog__item')
            .find('.wow')
            .css('animation-delay', '0.2s');
        $('.direto-blog__item')
            .find('.wow')
            .removeClass('.wow')
        $('.direto-blog__item')
            .siblings()
            .removeClass('active');
        $('.direto-blog__item')
            .eq(current)
            .addClass('active');
        $('html, body').animate({
            scrollTop: $(window).scrollTop() + 2
        }, '300');
        $('.direto-blog__title .lg')
            .find('.stroked')
            .removeClass('fill');
        $('.direto-blog__title .lg')
            .find('.stroked')
            .eq(current)
            .addClass('fill');
    }

    $('.direto-blog__next').click(function (e) {
        e.preventDefault();
        nextBlogItem()
    });

    window.dispatchEvent(new Event('resize'));
})();