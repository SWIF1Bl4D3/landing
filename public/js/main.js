/* Olio Theme Scripts */

(function($){ 
    "use strict";
             
    $(window).on('load', function() {
        $('body').addClass('loaded');
    });
             
/*=========================================================================
    Sticky Header
=========================================================================*/ 
    $(function() {
        var header = $("#header"),
            yOffset = 0,
            triggerPoint = 80;
        $(window).on( 'scroll', function() {
            yOffset = $(window).scrollTop();

            if (yOffset >= triggerPoint) {
                header.addClass("navbar-fixed-top");
            } else {
                header.removeClass("navbar-fixed-top");
            }
        });
    });

/*=========================================================================
        Mobile Menu
=========================================================================*/  
    $('.menu-wrap ul.nav').slicknav({
        prependTo: '.header-section .navbar',
        label: '',
        allowParentLinks: true
    });          
/*=========================================================================
    Feature Carousel
=========================================================================*/
    $('#feature-carousel').owlCarousel({
        loop: true,
        margin: 15,
        autoplay: true,
        smartSpeed: 500,
        items: 1,
        nav: true,
        navText: ['<i class="arrow_carrot-left"></i>', '<i class="arrow_carrot-right"></i>'],
        dots: false,
        responsive : {
            0 : {
                items: 1,
            },
            480 : {
                items: 2,
            },
            768 : {
                items: 2,
            },
            992 : {
                items: 4
            }
        }
    }); 
/*=========================================================================
    Testimonial Carousel
=========================================================================*/
    $('#testimonial-carousel').owlCarousel({
        loop: true,
        margin: 15,
        autoplay: true,
        smartSpeed: 500,
        items: 1,
        nav: true,
        navText: ['<i class="arrow_carrot-left"></i>', '<i class="arrow_carrot-right"></i>'],
        dots: false,
        responsive : {
            0 : {
                items: 1,
            },
            480 : {
                items: 2,
            },
            768 : {
                items: 2
            },
            992 : {
                items: 3
            }
        }
    }); 

/*=========================================================================
    Screenshot Carousel
=========================================================================*/
    // 1. Auto-detect container name to support both older (v6-) and newer (v7+) Swiper versions
    var swiperSelector = $('.swiper').length > 0 ? '.swiper' : '.swiper-container';

    if ($(swiperSelector).length > 0) {
        var swiper = new Swiper(swiperSelector, {
            // Baseline settings for Mobile Viewports (< 992px)
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            centeredSlides: true,
            
            // Safer configuration format for Autoplay across library versions
            autoplay: {
                delay: 3500,
                disableOnInteraction: false,
            },
            
            navigation: {
                nextEl: '.swiper-next',
                prevEl: '.swiper-prev',
            },
            
            // Forces older Swiper engines (v4) to interpret breakpoints as min-width (mobile-first)
            breakpointsInverse: true, 
            
            // Desktop adjustments
            breakpoints: {
                // When viewport width is >= 992px (Tablets / Laptops)
                992: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                // When viewport width is >= 1200px (Large Screens)
                1200: {
                    slidesPerView: 5,
                    spaceBetween: 20
                }
            }
        });
    }
             
/*=========================================================================
    Active venobox
=========================================================================*/
    $('.img-popup').venobox({
        numeratio: true,
        infinigall: true
    });                 
              
/*=========================================================================
    Initialize smoothscroll plugin
=========================================================================*/
    smoothScroll.init({
        offset: 60
    });
     
/*=========================================================================
    Scroll To Top
=========================================================================*/ 
    $(window).on( 'scroll', function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll-to-top').fadeIn();
        } else {
            $('#scroll-to-top').fadeOut();
        }
    });
    
/*=========================================================================
    WOW Active
=========================================================================*/ 
   new WOW().init();
    
/*=========================================================================
    MAILCHIMP
=========================================================================*/
    if ($('.subscribe-form').length>0) {
        /* MAILCHIMP  */
        $('.subscribe-form').ajaxChimp({
            language: 'es',
            callback: mailchimpCallback,
            url: "//IconicThemes.us14.list-manage.com/subscribe/post?u=48e55a88ece7641124b31a029&amp;id=361ec5b369" 
        });
    }

    function mailchimpCallback(resp) {
        if (resp.result === 'success') {
            $('#subscribe-result').addClass('subs-result');
            $('.subscription-success').text(resp.msg).fadeIn();
            $('.subscription-error').fadeOut();

        } else if(resp.result === 'error') {
            $('#subscribe-result').addClass('subs-result');
            $('.subscription-error').text(resp.msg).fadeIn();
        }
    }
    $.ajaxChimp.translations.es = {
        'submit': 'Submitting...',
        0: 'We have sent you a confirmation email',
        1: 'Please enter your email',
        2: 'An email address must contain a single @',
        3: 'The domain portion of the email address is invalid (the portion after the @: )',
        4: 'The username portion of the email address is invalid (the portion before the @: )',
        5: 'This email address looks fake or invalid. Please enter a real email address'
    };   

})(jQuery);