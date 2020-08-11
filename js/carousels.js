(function () {
    'use strict';
    
    // Home Carousel //
    const loginCarousel = $("#login-carousel");
    loginCarousel.owlCarousel({
        loop: true,
        autoplay: true,
        margin: 0,
        items: 1,
        autoHeight: true,
        autoHeightClass: 'owl-height',
        center: true,
        nav: false,
        dots: true,
        startPosition: 0,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        dotsContainer: '#login-carousel-dots',
        onChange: function(e){

        },
    });
    
    window.dispatchEvent(new Event('resize'));
})();