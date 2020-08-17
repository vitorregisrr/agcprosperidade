(function () {
    'use strict';

    // Home Carousel //
    const homeCarousel = $("#desafios-carousel");
    homeCarousel.owlCarousel({
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

    // Como Trabalhamos Carousel
    const comoTrabCarousel = $("#como-trabalhamos-carousel");
    comoTrabCarousel.owlCarousel({
        dots: true,
        infinite: true,
        nav: true,
        navText: ['', '<div class="line wow fadeIn" data-wow-delay="2s"><span class="wow"></span></div>'],
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
        navigation : true,
        center: true,
        dragEndSpeed: 300,
        autoplayTimeout: 2200,
        slideTransition: 'ease-in-out',
        items: 7,
        startPosition: 3,
        responsive:  {
            0:{
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

    window.dispatchEvent(new Event('resize'));
})();