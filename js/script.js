$(".search").click(function() {
    $("#search-part").slideDown()
})
$(".close").click(function() {
    $("#search-part").slideUp()
})

$('.venobox').venobox();

$('.service-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrow: true,
    prevArrow: '<i class="fa-solid fa-angle-left custom-prev"></i>',
    nextArrow: '<i class="fa-solid fa-angle-right custom-next"></i>',
    autoplay: false,
    focusOnSelect: true,
    vertical: true,
    centerMode: true,
    centerPadding: "0",
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                vertical: false,

            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                vertical: false,

            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                vertical: false,
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

$('.img-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrow: true,
    prevArrow: '<i class="fa-solid fa-angle-left custom-prev"></i>',
    nextArrow: '<i class="fa-solid fa-angle-right custom-next"></i>',
    autoplay: false,
    focusOnSelect: true,
    vertical: true,
    centerMode: true,
    centerPadding: "0",
    asNavFor: ".text-slider",
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                vertical: false,

            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                vertical: false,

            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                vertical: false,
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

$(".btt").click(function() {
    $("html,body").animate({
        scrollTop: 0,
    }, 100)
})

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        $(".menu").addClass("test")
    } else {
        $(".menu").removeClass("test")
    }
    if ($(window).scrollTop() > 600) {
        $(".btt").fadeIn()
    } else {
        $(".btt").fadeOut()

    }
})




$('.text-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: ".img-slider",

});

$('.counter').counterUp({
    delay: 10,
    time: 1000
});


$('.market-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    arrows: false,
    centerMode: true,
    centerPadding: '0px',
    focusOnSelect: true,
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }
    ]
})