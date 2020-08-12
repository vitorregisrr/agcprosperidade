(function () {
    'use strict';

    $('[data-toggle="navbar"]').click(function () {
        const isExpanded = $(this).attr('aria-expanded') === 'false' ? false : true;

        $('#mobile-nav-content').toggleClass('active');

        $(this).attr('aria-expanded', !isExpanded);
    });
    
    window.dispatchEvent(new Event('resize'));
})();