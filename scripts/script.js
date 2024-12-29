$(document).ready(function () {
    const slider = $("#main_banner_slider").owlCarousel({
        loop: true,
        margin: 100,
        nav: true,
        touchDrag: true,
        nav: true,
        dots: true,
        autoplay: false,
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

$(document).ready(function () {
    const slider = $("#actions_slider").owlCarousel({
        loop: true,
        margin: 100,
        nav: true,
        touchDrag: true,
        nav: true,
        dots: true,
        autoplay: false,
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