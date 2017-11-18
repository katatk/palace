function stickyNav() {

    var mn = $('.mainNav');
    // bootstrap's fixed top class
    fixed = 'fixed-top';
    // get scroll height to call sticky function
    mastheadHeight = $('.masthead').height();

    // add fixed class on scroll at larger screen sizes
    if ($(window).outerWidth() >= 992) {
        // if scrolled to the top of the menu (bottom of masthead)
        if ($(this).scrollTop() > mastheadHeight) {
            // if position is not fixed already, change position property
            if (mn.css('position') != 'fixed') {
                mn.css({
                    'position': 'fixed',
                    'top': 0
                }).addClass(fixed);
                $('.logo-container').addClass('shrink');
            }
        } else {
            // if position is not absolute already, change position property
            if (mn.css('position') != 'absolute') {
                mn.css({
                    'position': 'absolute',
                    'top': mastheadHeight
                }).removeClass(fixed);
                $('.logo-container').removeClass('shrink');
            }
        }

    }
    // else add a fixed class for mobile
    else {
        if (mn.css('position') != 'fixed') {
            mn.css({
                'position': 'fixed',
                'top': 0
            }).addClass(fixed);
        }
    }
}

$(document).ready(function () {

    // call when page loads    
    stickyNav();

    // call on resize
    $(window).resize(function () {
        stickyNav();
    });

    // call on scroll
    $(window).scroll(function () {
        stickyNav();
    })

    // mobile menu animate function
    $('.navbar-toggler-icon').click(function () {
        $(this).toggleClass('open');
    });

});
