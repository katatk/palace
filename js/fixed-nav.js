// add fixed class on scroll, only at larger screen sizes
/*function stickyNav() {

    // add clone of menu to prevent jumping on scroll
    var mn = $("#mainNav");
    fixed = "fixed-top";
    mastheadHeight = $('.masthead').height();

    // remove the fixed class if it has been resized from mobile
    if ($(window).outerWidth() >= 992) {
        if (mn.hasClass(fixed)) {
            mn.removeClass(fixed);
        }

        $(window).scroll(function () {
            if ($(this).scrollTop() > mastheadHeight) {
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

    // mobile menu animate function
    $('.navbar-toggler-icon').click(function () {
        $(this).toggleClass('open');
    });

});*/

var mn = $("#mainNav");
fixed = "fixed-top";

// Create a clone of the menu, right next to original.
mn.addClass('original').clone().insertAfter(mn).addClass('cloned').addClass(fixed).removeClass('original').hide();


function stickIt() {

    var orgElementPos = $('.original').offset().top;
    console.log(orgElementPos);

    $(window).scroll(function () {
        if ($(this).scrollTop() >= orgElementPos) {
            // scrolled past the original position; now only show the cloned, sticky element.

            // make logo smaller
            $(".cloned .logo-container").addClass('shrink');
            // Cloned element should always have same left position and width as original element.     
            orgElement = $('.original');
            clonedElement = $('.cloned');

            heightClonedElement = clonedElement.css('height');
            // get co-ordinates of original
            coordsOrgElement = orgElement.offset();
            leftOrgElement = coordsOrgElement.left;
            widthOrgElement = orgElement.css('width');
            heightOrgElement = orgElement.css('height');

            // updated left and width of cloned
            $('.cloned').css('left', leftOrgElement + 'px').css('top', 0).css('width', widthOrgElement).show();
            $('.original').css('visibility', 'hidden').css('height', heightClonedElement);



        } else {
            // make logo smaller
            $(".cloned .logo-container").removeClass('shrink');
            // not scrolled past the menu; only show the original menu.
            $('.cloned').hide();
            $('.original').css('visibility', 'visible').css('height', heightOrgElement);


        }
    });
}

$(document).ready(function () {
    stickIt();

    // call on resize
    $(window).resize(function () {
        stickIt();
    })

    $('.navbar-toggler-icon').click(function () {
        $(this).toggleClass('open');
    });
});
