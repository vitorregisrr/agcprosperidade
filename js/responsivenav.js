(function () {
    'use strict';

    $('[data-toggle="navbar"]').click(function () {
        $('.home-tree__cookies').addClass('hide');
        const isExpanded = $(this).attr('aria-expanded') === 'false' ? false : true;

        $('#mobile-nav-content').toggleClass('active');
        $(this).attr('aria-expanded', !isExpanded);
        $('.home-tree').removeClass('has-cookies');
    });
    
    window.dispatchEvent(new Event('resize'));
})();