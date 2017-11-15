// add fixed class on scroll, only at larger screen sizes
function stickyNav() {
    var mn = $("#mainNav");
    fixed = "fixed-top";
    masthead = $('.masthead').height();

    // remove the fixed class if it has been resized from mobile
    if ($(window).outerWidth() >= 992) {
        if (mn.hasClass(fixed)) {
             mn.removeClass(fixed);
        }
        
        $(window).scroll(function () {
            if ($(this).scrollTop() > masthead) {
                mn.addClass(fixed);
            } else {
                mn.removeClass(fixed);
            }
        });
    }
    // else add a fixed class for mobile
    else if ($(window).outerWidth() < 992) {
        mn.addClass(fixed);
    }
}

$(document).ready(function () {

    // call when page loads    
    stickyNav();

    // call on resize
    $(window).resize(function () {
        stickyNav();
    })

});
