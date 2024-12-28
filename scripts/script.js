$(document).ready(function () {
    const slider = $("#main_banner_slider").owlCarousel({
        loop: true,
        margin: 100,
        nav: true,
        touchDrag: true,
        nav: false,
        dots: true,
        autoplay: false, //true
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 800,
        responsive: {
            0: {
                items: 1
            }
        }
    });
});