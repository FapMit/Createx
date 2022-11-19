$(function () {

    var mixer = mixitup('.direction__list');

    $('.directions__filter-btn').on('click', function () {
        $('.directions__filter-btn').removeClass('directions__filter-btn--active')
        $(this).addClass('directions__filter-btn--active')
    })

    $('.team__slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        draggable: false,
        waitForAnimate: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    draggable: true,
                    dots: true,
                    appendDots: $('.team__dots'),
                }
            }
        ]
    })

    $('.team__slider-prev').on('click', function (e) {
        e.preventDefault()
        $('.team__slider').slick('slickPrev')
    })
    $('.team__slider-next').on('click', function (e) {
        e.preventDefault()
        $('.team__slider').slick('slickNext')
    })

    $('.testimonials__slider').slick({
        arrows: false,
        dots: true,
        appendDots: $('.testimonials__dots'),
        waitForAnimate: false,
        responsive: [
            {
                breakpoint: 800,
                settings: {

                }
            }
        ]
    })

    $('.testimonials__slider-prev').on('click', function (e) {
        e.preventDefault()
        $('.testimonials__slider').slick('slickPrev')
    })
    $('.testimonials__slider-next').on('click', function (e) {
        e.preventDefault()
        $('.testimonials__slider').slick('slickNext')
    })

    // $('.program__accordeon-link').on('click', function (e) {
    //     e.preventDefault()
    //     $(this).toggleClass('program__accordeon-link--active')
    //     $(this).children('.program__accordeon-text').slideToggle()
    //     })

    $('.program__accordeon-link').on('click', function (e) {
        e.preventDefault()
        if ($(this).hasClass('program__accordeon-link--active')) {
            $('.program__accordeon-link').removeClass('program__accordeon-link--active')
            $('.program__accordeon-text').slideUp()
        } else {
            $('.program__accordeon-link').removeClass('program__accordeon-link--active')
            $('.program__accordeon-text').slideUp()
            $(this).addClass('program__accordeon-link--active')
            $(this).children('.program__accordeon-text').slideDown()
        }
    })

    $(".nav").on("click","a", function (e) {
    e.preventDefault()
    var id  = $(this).attr('href'),
    top = $(id).offset().top
    $('body,html').animate({scrollTop: top}, 1000)
    })

    setInterval(() => {
        if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
            $('.burger').addClass('burger--follow')
        } else {
            $('.burger').removeClass('burger--follow')
        }
    }, 0)

    $('.header__nav-link, .header__top-btn').on('click', function () {
        if ($('.header__top').hasClass('header__top--open')) {
            $('.header__top').removeClass('header__top--open')
            $('.overlay').removeClass('overlay--show')
            $('.burger').removeClass('burger--close')
        }
    })

    $('.burger, .overlay').on('click', function (e) {
        e.preventDefault()
        $('.header__top').toggleClass('header__top--open')
        $('.overlay').toggleClass('overlay--show')
        $('.burger').toggleClass('burger--close')

        // if ($('.header__top').hasClass('header__top--open')) {
        //     $('.header__top').removeClass('header__top--open')
        // } else {
        //     $('.header__top').addClass('header__top--open')
        // }
    })

    $('.footer__list-title').on('click', function() {
        $(this).next().slideToggle()
        $(this).toggleClass('footer__list-title--closed')
        $(this).toggleClass('footer__list-title--open')
    }) 
})