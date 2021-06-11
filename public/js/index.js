function scrollToContactUs (fromId) {
    jQuery(fromId).click(function () {
        jQuery("body,html").animate({
            scrollTop: $(document).height()-$(window).height(),
        }, 1400);
    });
}

