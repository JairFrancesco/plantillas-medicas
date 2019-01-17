/*

Medinic - Medical, Health, Pharmacy HTML Template
Author: iqonicthemes.in
Version: 1.0
Design and Developed by: iqonicthemes.in

*/
/*================================================
[  Table of contents  ]
================================================

1.Page Loader
2.Back To Top
3.Slick Slider
4.Rangslider
5.Product Add
6.Cart
7.Tooltip
8.Jarallax
9.Searchstyle Bar
10.Mega Menu
11.Sidebar Menu
12.Counters
13.CountdownTimer
14.Isotope
15.Portfolio Move
16.Progress Bar
17.Audio Video
18.Accordion
19.Owl Carousel
20.Wow Animation
21.Magnific Popup
22.Timebox
23.Contact From


======================================
[ End table content ]
======================================*/

"use strict";

/*------------------------
Page Loader
--------------------------*/
jQuery("#load").fadeOut();
jQuery("#loading").delay(0).fadeOut("slow");


/*------------------------
Back To Top
--------------------------*/
// hide #back-to-top first
$("#back-to-top").fadeOut();
// fade in #back-to-top
$(function() {
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 200) {
            $('#back-to-top').fadeIn(1500);
        } else {
            $('#back-to-top').fadeOut(500);
        }
    });

    // scroll body to 0px on click
    $('#back-to-top a').on('click', function() {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});

/*------------------------
Slick Slider
--------------------------*/
if ($('div').hasClass('slider-for')) {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
}
if ($('div').hasClass('slider-nav')) {
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });
}
if ($('div').hasClass('responsive')) {
    $('.responsive').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });
}



/*------------------------
Rangslider
--------------------------*/
if (document.getElementById("mySlider") != null) {

    $("#mySlider").slider({
        range: true,
        min: 10,
        max: 999,
        values: [200, 500],
        slide: function(event, ui) {
            $("#price").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });

    $("#price").val("$" + $("#mySlider").slider("values", 0) +
        " - $" + $("#mySlider").slider("values", 1));

}


/*------------------------
  Product Add
  --------------------------*/

$('.indc .increment, .indc1 .increment, .indc2 .increment, .indc3 .increment, .indc4 .increment, .indc5 .increment').on('click', function(e) {
    e.preventDefault();
    var radix = 10;
    var fieldName = $(this).attr('field');
    var currentVal = parseInt($(this).prev().val(), radix);
    if (!isNaN(currentVal)) {
        $(this).prev().val(currentVal + 1);
    } else {
        $(this).prev().val(0);
    }
});

$('.indc .decrement, .indc1 .decrement, .indc2 .decrement, .indc3 .decrement, .indc4 .decrement, .indc5 .decrement').on('click', function(e) {
    e.preventDefault();
    var radix = 10;
    var fieldName = $(this).attr('field');
    var currentVal = parseInt($(this).next().val(), radix);
    if (!isNaN(currentVal) && currentVal > 0) {
        $(this).next().val(currentVal - 1);
    } else {
        $(this).next().val(0);
    }
});



/*------------------------
Cart
--------------------------*/
$("#cart").on('click', function() {
    $(".cart-box").fadeToggle("fast");
});


/*------------------------
  Tooltip
  --------------------------*/
$('[data-toggle="tooltip"]').tooltip()


/*------------------------
Jarallax
--------------------------*/
$('.jarallax').jarallax({
    speed: 0.2
});


/*------------------------
  Searchstyle Bar
  --------------------------*/
if ($(".search__input").length > 0) {
    var openCtrl = document.getElementById('btn-search'),
        closeCtrl = document.getElementById('btn-search-close'),
        searchContainer = document.querySelector('.search'),
        inputSearch = searchContainer.querySelector('.search__input');

    function init() {
        initEvents();
    }

    function initEvents() {
        openCtrl.addEventListener('click', openSearch);
        closeCtrl.addEventListener('click', closeSearch);
        document.addEventListener('keyup', function(ev) {
            // escape key.
            if (ev.keyCode === 27) {
                closeSearch();
            }
        });
    }

    function openSearch() {
        searchContainer.classList.add('search--open');
        inputSearch.focus();
    }

    function closeSearch() {
        searchContainer.classList.remove('search--open');
        inputSearch.blur();
        inputSearch.value = '';
    }

    init();
}

// search 2
$(".iq-search").on('click', function() {
    $(".search-open").fadeIn(500);
});
$(".search-close").on('click', function() {
    $(".search-open").fadeOut(500);
});
// search-2
if (jQuery('.iq-search').size() > 0) {
    jQuery('.search-btn').on("click", function() {
        jQuery('.iq-search').toggleClass("search-open");
        return false;
    });
    jQuery("html, body").on('click', function(e) {
        if (!jQuery(e.target).hasClass("not-click")) {
            jQuery('.iq-search').removeClass("search-open");
        }
    });
}


/*------------------------
Mega Menu
--------------------------*/

jQuery('#menu-1').megaMenu({
    // DESKTOP MODE SETTINGS
    logo_align: 'left', // align the logo left or right. options (left) or (right)
    links_align: 'left', // align the links left or right. options (left) or (right)
    socialBar_align: 'left', // align the socialBar left or right. options (left) or (right)
    searchBar_align: 'right', // align the search bar left or right. options (left) or (right)
    trigger: 'hover', // show drop down using click or hover. options (hover) or (click)
    effect: 'fade', // drop down effects. options (fade), (scale), (expand-top), (expand-bottom), (expand-left), (expand-right)
    effect_speed: 400, // drop down show speed in milliseconds
    sibling: true, // hide the others showing drop downs if this option true. this option works on if the trigger option is "click". options (true) or (false)
    outside_click_close: true, // hide the showing drop downs when user click outside the menu. this option works if the trigger option is "click". options (true) or (false)
    top_fixed: false, // fixed the menu top of the screen. options (true) or (false)
    sticky_header: true, // menu fixed on top when scroll down down. options (true) or (false)
    sticky_header_height: 200, // sticky header height top of the screen. activate sticky header when meet the height. option change the height in px value.
    menu_position: 'horizontal', // change the menu position. options (horizontal), (vertical-left) or (vertical-right)
    full_width: true, // make menu full width. options (true) or (false)
    // MOBILE MODE SETTINGS
    mobile_settings: {
        collapse: true, // collapse the menu on click. options (true) or (false)
        sibling: true, // hide the others showing drop downs when click on current drop down. options (true) or (false)
        scrollBar: true, // enable the scroll bar. options (true) or (false)
        scrollBar_height: 400, // scroll bar height in px value. this option works if the scrollBar option true.
        top_fixed: false, // fixed menu top of the screen. options (true) or (false)
        sticky_header: true, // menu fixed on top when scroll down down. options (true) or (false)
        sticky_header_height: 200 // sticky header height top of the screen. activate sticky header when meet the height. option change the height in px value.
    }
});
$('#menu-2').megaMenu({
    // DESKTOP MODE SETTINGS
    logo_align: 'left', // align the logo left or right. options (left) or (right)
    links_align: 'left', // align the links left or right. options (left) or (right)
    socialBar_align: 'left', // align the socialBar left or right. options (left) or (right)
    searchBar_align: 'right', // align the search bar left or right. options (left) or (right)
    trigger: 'hover', // show drop down using click or hover. options (hover) or (click)
    effect: 'fade', // drop down effects. options (fade), (scale), (expand-top), (expand-bottom), (expand-left), (expand-right)
    effect_speed: 400, // drop down show speed in milliseconds
    sibling: true, // hide the others showing drop downs if this option true. this option works on if the trigger option is "click". options (true) or (false)
    outside_click_close: true, // hide the showing drop downs when user click outside the menu. this option works if the trigger option is "click". options (true) or (false)
    top_fixed: false, // fixed the menu top of the screen. options (true) or (false)
    sticky_header: false, // menu fixed on top when scroll down down. options (true) or (false)
    sticky_header_height: 200, // sticky header height top of the screen. activate sticky header when meet the height. option change the height in px value.
    menu_position: 'vertical-right', // change the menu position. options (horizontal), (vertical-left) or (vertical-right)
    full_width: false, // make menu full width. options (true) or (false)
    // MOBILE MODE SETTINGS
    mobile_settings: {
        collapse: true, // collapse the menu on click. options (true) or (false)
        sibling: true, // hide the others showing drop downs when click on current drop down. options (true) or (false)
        scrollBar: true, // enable the scroll bar. options (true) or (false)
        scrollBar_height: 400, // scroll bar height in px value. this option works if the scrollBar option true.
        top_fixed: false, // fixed menu top of the screen. options (true) or (false)
        sticky_header: false, // menu fixed on top when scroll down down. options (true) or (false)
        sticky_header_height: 200 // sticky header height top of the screen. activate sticky header when meet the height. option change the height in px value.
    }
});
$('#menu-3').megaMenu({
    // DESKTOP MODE SETTINGS
    logo_align: 'left', // align the logo left or right. options (left) or (right)
    links_align: 'left', // align the links left or right. options (left) or (right)
    socialBar_align: 'left', // align the socialBar left or right. options (left) or (right)
    searchBar_align: 'right', // align the search bar left or right. options (left) or (right)
    trigger: 'hover', // show drop down using click or hover. options (hover) or (click)
    effect: 'fade', // drop down effects. options (fade), (scale), (expand-top), (expand-bottom), (expand-left), (expand-right)
    effect_speed: 400, // drop down show speed in milliseconds
    sibling: true, // hide the others showing drop downs if this option true. this option works on if the trigger option is "click". options (true) or (false)
    outside_click_close: true, // hide the showing drop downs when user click outside the menu. this option works if the trigger option is "click". options (true) or (false)
    top_fixed: false, // fixed the menu top of the screen. options (true) or (false)
    sticky_header: false, // menu fixed on top when scroll down down. options (true) or (false)
    sticky_header_height: 200, // sticky header height top of the screen. activate sticky header when meet the height. option change the height in px value.
    menu_position: 'vertical-left', // change the menu position. options (horizontal), (vertical-left) or (vertical-right)
    full_width: false, // make menu full width. options (true) or (false)
    // MOBILE MODE SETTINGS
    mobile_settings: {
        collapse: true, // collapse the menu on click. options (true) or (false)
        sibling: true, // hide the others showing drop downs when click on current drop down. options (true) or (false)
        scrollBar: true, // enable the scroll bar. options (true) or (false)
        scrollBar_height: 400, // scroll bar height in px value. this option works if the scrollBar option true.
        top_fixed: false, // fixed menu top of the screen. options (true) or (false)
        sticky_header: false, // menu fixed on top when scroll down down. options (true) or (false)
        sticky_header_height: 200 // sticky header height top of the screen. activate sticky header when meet the height. option change the height in px value.
    }
});


/*------------------------
Sidebar Menu
--------------------------*/

$(".sider-bt").on("click", function() {
    $(".sider-bt").toggleClass("cross");
    $(".sidebar-menu").toggleClass("sidebar-open");
});


/*------------------------
Counters
--------------------------*/
$('.timer').countTo();



/*------------------------
CountdownTimer
--------------------------*/

$('#countdown').countdown({
    date: '10/01/2019 23:59:59',
    offset: -8,
    day: 'Day',
    days: 'Days'
});
$('#iq-countdown1').countdown({
    date: '10/01/2019 23:59:59',
    offset: -8,
    day: 'Day',
    days: 'Days'
});
$('#iq-countdown2').countdown({
    date: '10/01/2019 23:59:59',
    offset: -8,
    day: 'Day',
    days: 'Days'
});
$('#iq-countdown3').countdown({
    date: '10/01/2019 23:59:59',
    offset: -8,
    day: 'Day',
    days: 'Days'
});



/*------------------------
Isotope
--------------------------*/

var $isotope = $(".isotope"),
    $itemElement = '.iq-grid-item',
    $filters = $('.isotope-filters');
if ($isotope) {
    $isotope.isotope({
        resizable: true,
        itemSelector: $itemElement,
        masonry: {
            gutterWidth: 10
        }
    });
    $filters.on('click', 'button', function() {
        var $val = $(this).attr('data-filter');
        $isotope.isotope({
            filter: $val
        });
        $filters.find('.active').removeClass('active');
        $(this).addClass('active');
    });
}

/*------------------------
Portfolio Move
--------------------------*/

$('.iq-portfolio-05').each(function() {
    $(this).hoverdir({});
});



/*------------------------
Progress Bar
--------------------------*/
$('.progress-bar').each(function(i, e) {
    var progress_data = $(this);
    var delay_data = progress_data.attr('data-delay') || "100";
    var type_data = progress_data.attr('data-type') || "%";
    var percentage_data = progress_data.attr('data-percent') || "100";
    if (!progress_data.is('progress-animated')) {
        progress_data.css({
            'width': '0%'
        });
    }

    $(e).show(function() {
        setTimeout(function() {
            progress_data.animate({
                'width': percentage_data + '%'
            }, 'easeInOutCirc').addClass('progress-animated');

            progress_data.delay(delay_data).append('<span class="progress-type">' + type_data + '</span><span class="progress-number">' + percentage_data + '</span>');
        }, delay_data);
    });
});



/*------------------------
Audio Video
--------------------------*/

if ($(".audio-video").length != 0) {
    $('audio,video').mediaelementplayer();
}



/*------------------------
Accordion
--------------------------*/
$('.iq-accordion .iq-ad-block .ad-details').hide();
$('.iq-accordion .iq-ad-block:first').addClass('ad-active').children().slideDown('slow');
$('.iq-accordion .iq-ad-block').on("click", function() {
    if ($(this).children('div').is(':hidden')) {
        $('.iq-accordion .iq-ad-block').removeClass('ad-active').children('div').slideUp('slow');
        $(this).toggleClass('ad-active').children('div').slideDown('slow');
    }
});



/*------------------------
Owl Carousel
--------------------------*/
$('.owl-carousel').each(function() {
    var $carousel = $(this);
    $carousel.owlCarousel({
        items: $carousel.data("items"),
        loop: $carousel.data("loop"),
        margin: $carousel.data("margin"),
        nav: $carousel.data("nav"),
        dots: $carousel.data("dots"),
        autoplay: $carousel.data("autoplay"),
        autoplayTimeout: $carousel.data("autoplay-timeout"),
        navText: ['<i class="fa fa-angle-left fa-2x"></i>', '<i class="fa fa-angle-right fa-2x"></i>'],
        responsiveClass: true,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: $carousel.data("items-mobile-sm")
            },
            // breakpoint from 480 up
            480: {
                items: $carousel.data("items-mobile")
            },
            // breakpoint from 786 up
            786: {
                items: $carousel.data("items-tab")
            },
            // breakpoint from 1023 up
            1023: {
                items: $carousel.data("items-laptop")
            },
            1199: {
                items: $carousel.data("items")
            }
        }
    });
});


/*------------------------
Wow Animation
--------------------------*/
var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: false,
    live: true
});
wow.init();

/*------------------------
Magnific Popup
--------------------------*/
$('.popup-gallery').magnificPopup({
    delegate: 'a.popup-img',
    tLoading: 'Loading image #%curr%...',
    type: 'image',
    mainClass: 'mfp-img-mobile',
    gallery: {
        navigateByImgClick: true,
        enabled: true,
        preload: [0, 1]
    },
    image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
});

$('.popup-youtube, .popup-vimeo, .popup-gmaps, .iq-video').magnificPopup({
    type: 'iframe',
    disableOn: 700,
    mainClass: 'mfp-fade',
    preloader: false,
    removalDelay: 160,
    fixedContentPos: false
});



/*------------------------
Timebox
--------------------------*/
if (document.getElementById("timelinebox") !== null) {
    timeline(document.querySelectorAll('.timeline'), {
        forceVerticalMode: 700,
        mode: 'horizontal',
        verticalStartPosition: 'left',
        visibleItems: 4
    });
}



/*------------------------
 Contact From
--------------------------*/

$('#contact').submit(function(e) {
    var flag = 0;
    e.preventDefault(); // Prevent Default Submission
    $('.require').each(function() {
        if ($.trim($(this).val()) == '') {
            $(this).css("border", "1px solid red");
            e.preventDefault(); // Prevent Default Submission
            flag = 1;
        } else {
            $(this).css("border", "1px solid grey");
            flag = 0;
        }
    });

    if (flag == 0) {
        $.ajax({
                url: 'contact-form.php',
                type: 'POST',
                data: $("#contact").serialize() // it will serialize the form data
            })
            .done(function(data) {
                $("#result").html('Form was successfully submitted.');
                $('#contact')[0].reset();
            })
            .fail(function() {
                alert('Ajax Submit Failed ...');
            });
    }

});