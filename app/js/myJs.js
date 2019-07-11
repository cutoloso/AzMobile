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
        if (window.pageYOffset >= sticky) {
            // $(".header3-form").css("display","flex");
            $("#header3").addClass("sticky");

            $('#backtotop').addClass('show');
        } else {
            // $(".header3-form").css("display","none");
            $("#header3").removeClass("sticky");

            $("#backtotop").removeClass("show");
        }
    }

    $('.backtotop').on('click', function (event) {
        event.preventDefault();
        $('body,html').animate({
                scrollTop: 0,
            }, 700
        );
    });

    $('.single-prouct .quantity-minus').click(function () {
        let value_min = parseInt($('.input-qty').data('min'));
        let value_step = parseInt($('.input-qty').data('step'));
        let value = parseInt($('.input-qty').val());
        if (value > value_min) {
            $('.input-qty').val(value - value_step);
        }
    });

    $('.single-prouct .quantity-plus').click(function () {
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
    $('.openbtn').click(function openNav() {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("wrapper-main").style.marginLeft = "250px";
    });

    $('.closebtn').click(function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("wrapper-main").style.marginLeft= "0";
    });
});
