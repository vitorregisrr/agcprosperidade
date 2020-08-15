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
        arrows: false,
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

    window.dispatchEvent(new Event('resize'));
})();