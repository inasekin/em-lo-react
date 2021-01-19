jQuery(document).ready(function() {
    var contentmore_height = $('.content-more__content').outerHeight();
    $('.content-more__content').css('height','auto');
    $('.content-more__more').click(function() {
        var wrapper = $(this).closest('.content-more__wrapper');
        var content = wrapper.find('.content-more__content');
        if (wrapper.hasClass('content-more__wrapper--opened')) {
            content.animate({height: 'auto'},'fast','linear',function() {
                wrapper.removeClass('content-more__wrapper--opened');
            });
            
        } else {
            content.animate({height: (contentmore_height+'px')},'fast','linear',function() {
                wrapper.addClass('content-more__wrapper--opened');
            });
        }
    });
});