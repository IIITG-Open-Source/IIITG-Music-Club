// Transition effect for navbar 
$(window).scroll(function() {
    if($(this).scrollTop() > 748) { 
        $('.navbar').addClass('solid');
    } else {
        $('.navbar').removeClass('solid');
    }
});
$(function() {
    $('.navbar-nav a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
});
