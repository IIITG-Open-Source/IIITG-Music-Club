// Transition effect for navbar 
$(window).scroll(function() {
    if($(this).scrollTop() > 748) { 
        $('.navbar').addClass('solid');
    } else {
        $('.navbar').removeClass('solid');
    }
});
