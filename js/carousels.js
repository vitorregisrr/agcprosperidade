(function () {
    'use strict';
    
    // Home Carousel //
    const loginCarousel = $("#desafios-carousel");
    loginCarousel.owlCarousel({
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
        navText: ['',''],
        animateIn: 'fadeIn',
        dotsContainer: '#login-carousel-dots',
        onChange: function(e){

        },
    });
    
    window.dispatchEvent(new Event('resize'));
})();