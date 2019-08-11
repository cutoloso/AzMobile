$(document).ready(function () {

    $('.slider-content').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: [
            "<i class='fas fa-angle-left'></i>",
            "<i class='fas fa-angle-right'></i>"
        ],
        autoplay: false,
        autoplayHoverPause: true,
        items: 1
    });

    $('.list-product').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        navText: [
            "<i class='fas fa-angle-left'></i>",
            "<i class='fas fa-angle-right'></i>"
        ],
        autoplay: false,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            },
            1200: {
                items: 5,
            }
        }
    });

    $('.brand-content').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        navText: [
            "<i class='fas fa-angle-left'></i>",
            "<i class='fas fa-angle-right'></i>"
        ],
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            },
            1200: {
                items: 5,
            }
        }
    });

    $('.news-list').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        navText: [
            "<i class='fas fa-angle-left'></i>",
            "<i class='fas fa-angle-right'></i>"
        ],
        autoplay: false,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            991: {
                items: 2,
            }
        }

    });

    window.onscroll = function () {
        StickyFunction()
    };

    let navbar = document.getElementById("header3");
    let sticky = navbar.offsetTop;

    function StickyFunction() {
        if ( $( window ).width() > 575){
            if (window.pageYOffset >= sticky) {
                $('#backtotop').addClass('show');
            } else {
                $("#backtotop").removeClass("show");
            }
        }
    }
    // Button cart
    $('.cart-wrapper').click(function () {
        $('.mini-cart-content').toggleClass('show-mini-cart');
    });

    // Croll to top
    $('.backtotop').on('click', function (event) {
        event.preventDefault();
        $('body,html').animate({
                scrollTop: 0,
            }, 700
        );
    });

    $('.quantity-minus').click(function () {
        let value_min = parseInt($('.input-qty').data('min'));
        let value_step = parseInt($('.input-qty').data('step'));
        let value = parseInt($('.input-qty').val());
        if (value > value_min) {
            $('.input-qty').val(value - value_step);
        }
    });

    $('.quantity-plus').click(function () {
        let value_step = parseInt($('.input-qty').data('step'));
        let value = parseInt($('.input-qty').val());
        $('.input-qty').val(value + value_step);
    });

    var background_thumb = $("div.image-zoom:last div.thumbnail").css('background-image');
    $("div.image-zoom")
        .mouseenter(function (e) {
            $("div.image-zoom:last div.thumbnail").css('background-image', 'none')
        })
        .mouseleave(function () {
            $("div.image-zoom:last div.thumbnail").css('background-image', background_thumb);
        });

    $('.product-outer .owl-stage-outer').mouseenter(function () {
        $(this).css('padding', '0 0 150px 0');
        $(this).css('margin', '0 0 -150px 0');
    });

    // Menu mobile
    $('.menu-mb-icon').click(function () {
        $('#header').toggleClass('act-menu');
    });

    $('#compare-main .design-tag').click(function () {
        $('#compare-main .design-tag').removeClass('design-tag-active');
        $(this).addClass('design-tag-active');
    });

    // $('.xzoom5, .xzoom-gallery5').xzoom({tint: '#006699', Xoffset: 15});
    // $('.xzoom3, .xzoom-gallery3').xzoom({position: 'lens', lensShape: 'circle', sourceClass: 'xzoom-hidden'});
    $('.xzoom3, .xzoom-gallery3').xzoom({position: 'lens', lensShape: 'circle', bg:true, sourceClass: 'xzoom-hidden'});
});
