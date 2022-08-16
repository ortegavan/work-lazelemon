window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'UA-134237019-3');

$(function () {
    AOS.init();

    $(document).scroll(function () {
        const nav = $(".fixed-top");
        const logo = $("#logo");

        if ($(this).scrollTop() > nav.height() && !nav.hasClass('scrolled')) {
            nav.addClass('scrolled');
            logo.attr("src", "img/logo-white.png");

        } else if ($(this).scrollTop() <= nav.height() && nav.hasClass('scrolled')) {
            nav.removeClass('scrolled');
            logo.attr("src", "img/logo.png");
        }
    });
});