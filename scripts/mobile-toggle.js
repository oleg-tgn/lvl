$(document).ready(function() {
    var toggleOn = false;
    function hideContentOnMobile() {
        if ($(window).width() <= '1024') {
            if (!toggleOn) {
                $('.js-toggle-title').on('click',function() {
                    $(this).parents('.js-toggle').find('.js-toggle-body').slideToggle(300);
                    $(this).toggleClass('open');
                });
                toggleOn = true;
            }
        } else {
            $('.js-toggle-title').removeClass('open');
            $('.js-toggle-body').show();            
            $('.js-toggle-title').unbind();
            toggleOn = false;
        }
    }
    hideContentOnMobile();

    $(window).resize(function() {
        console.log("resize");
        hideContentOnMobile();
    });
 });


