/** ===============

.. Preloader
.. header_search
.. Fixed-header
.. Menu
.. Number rotator
.. Skillbar
.. Tab
.. Accordion
.. Isotope
.. Prettyphoto
.. share-icon_btn
.. Slick_slider
.. Back to top 

 =============== */



jQuery(function ($) {

    "use strict";

    /*------------------------------------------------------------------------------*/

    $(window).scroll(function () {


        if (matchMedia('only screen and (min-width: 0px)').matches) {
            if ($(window).scrollTop() <= 200) {
                $('nav').addClass('transparent');
            }
            else {
                $('nav').removeClass('transparent');
            }
        }
    });

    /*------------------------------------------------------------------------------*/
    /* Accordion
    /*------------------------------------------------------------------------------*/

    var allPanels = $('.accordion > .toggle').children('.toggle-content').hide();

    $('.toggle-title').on('click', function (e) {

        e.preventDefault();
        var $this = $(this);
        $this.parent().parent().find('.toggle .toggle-title a').removeClass('active');

        if ($this.next().hasClass('show')) {

            $this.next().removeClass('show');
            $this.next().slideUp('easeInExpo');

        } else {
            $this.parent().parent().find('.toggle .toggle-content').removeClass('show');
            $this.parent().parent().find('.toggle .toggle-content').slideUp('easeInExpo');
            $this.next().toggleClass('show');
            $this.next().removeClass('show');
            $this.next().slideToggle('easeInExpo');
            $this.next().parent().children().children().addClass('active');

        }

    });


    /*------------------------------------------------------------------------------*/
    /* Isotope
    /*------------------------------------------------------------------------------*/

    $(function () {

        if ($().isotope) {
            var $container = $('.isotope-project');
            $container.imagesLoaded(function () {
                $container.isotope({
                    itemSelector: '.project_item',
                    transitionDuration: '1s',
                    layoutMode: 'fitRows'
                });
            });

            $('.filter-buttons button').on('click', function () {
                var selector = $(this).find("button").attr('data-filter');
                $('.filter-buttons button').removeClass('active');
                $(this).addClass('active');
                $container.isotope({ filter: selector });
                return false;
            });
        };

    });

    /*------------------------------------------------------------------------------*/
    /* Slick_slider
    /*------------------------------------------------------------------------------*/
    $(".slick_slider").slick({
        speed: 1000,
        infinite: true,
        arrows: false,
        dots: false,
        autoplay: false,
        centerMode: false,

        responsive: [{

            breakpoint: 1360,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {

            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {

            breakpoint: 680,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });




    /*------------------------------------------------------------------------------*/
    /* Back to top
    /*------------------------------------------------------------------------------*/

    // ===== Scroll to Top ==== 
    jQuery('#totop').hide();

    $(window).on("scroll", function () {
        if (jQuery(this).scrollTop() >= 500) {        // If page is scrolled more than 50px
            jQuery('#totop').fadeIn(200);    // Fade in the arrow
            jQuery('#totop').addClass('top-visible');
        } else {
            jQuery('#totop').fadeOut(200);   // Else fade out the arrow
            jQuery('#totop').removeClass('top-visible');
        }
    });

    jQuery('#totop').on("click", function () {      // When arrow is clicked
        jQuery('body,html').animate({
            scrollTop: 0                       // Scroll to top of body
        }, 500);
        return false;
    });

});


$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();
});

$(".typed").each(function () {
    var typed = new Typed('.typed', {
        stringsElement: '.typed-strings',
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1500,
    });
});

$(".project-carousel").slick({
    speed: 300,
    infinite: true,
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    pauseOnFocus: false,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-prev">&#10094;</button>',
    nextArrow: '<button class="slick-next">&#10095;</button>'
});



$('.brands-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                autoplay: true,
                autoplaySpeed: 2000,
                infinite: true,
                pauseOnHover: false,
                pauseOnFocus: false,
                slidesToShow: 4
            }
        },
        {
            breakpoint: 800,
            settings: {
                autoplay: true,
                autoplaySpeed: 2000,
                infinite: true,
                pauseOnHover: false,
                pauseOnFocus: false,
                slidesToShow: 3
            }
        },
        {
            breakpoint: 600,
            settings: {
                autoplay: true,
                autoplaySpeed: 2000,
                infinite: true,
                pauseOnHover: false,
                pauseOnFocus: false,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 400,
            settings: {
                autoplay: true,
                autoplaySpeed: 2000,
                infinite: true,
                pauseOnHover: false,
                pauseOnFocus: false,
                slidesToShow: 1
            }
        },
    ]
});