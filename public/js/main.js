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
    function getSlide() {
        var wW = $(window).width();
        if (wW < 991) {
            return 1;
        } else if (wW < 1170) {
            return 3;
        } else {
            return 5;
        }
    }
    function getSlideSpace(){
        var wW = $(window).width();
        if (wW < 991) {
            return 0;
        }
        return 20;
    }    
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: getSlide(),
        loop: true,
        autoplay: true,
        centeredSlides: true,
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },
        spaceBetween: getSlideSpace()
    });  
             
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
        /*  MAILCHIMP  */
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

// Locate your screenshots slider initialization and update it to match this:
var screenshotSwiper = new Swiper('.screenshots-section .swiper-container', {
    slidesPerView: 1, // Default constraint for mobile screens
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
    },
    // Add breakpoints configuration below to manage PC sizing
    breakpoints: {
        // When screen width is >= 576px (Tablets)
        576: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // When screen width is >= 992px (PC/Laptops)
        992: {
            slidesPerView: 4,   // Shows 4 screenshot columns side-by-side
            spaceBetween: 30    // Adds clean breathing room spacing between them
        }
    }
});
