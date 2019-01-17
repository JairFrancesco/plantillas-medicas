(function($) {
    "use strict";


    /*===============================================
        preloader js
    ===============================================*/
    $(window).on('load', function() {
        $('#preloader').fadeOut('slow', function() { $(this).remove(); });
    });

    /*===============================================
        stickey menu
    ===============================================*/
    if ($('.header-bottom').length) {
        var headeBottomHeight = $('.header-bottom').innerHeight();
        document.getElementById("header_space").style.height = headeBottomHeight + "px";
        document.getElementById("header_bottom").style.bottom = "-" + headeBottomHeight + "px";
    }

    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();

        if ($('.header-bottom').length) {

            var meainHeader = $('.header-bottom'),
                headerSpaceOfssetTop = $('#header_space').offset().top;

            if (scroll >= headerSpaceOfssetTop) {
                meainHeader.addClass("sticky-header");
            } else {
                meainHeader.removeClass("sticky-header");
            }
        }

        if ($('.header-box-style').length) {
            var headerThree = $('.header-box-style');

            if (scroll >= 100) {
                headerThree.addClass("sticky-header");
            } else {
                headerThree.removeClass("sticky-header");
            }
        }
    });


    /*===============================================
        Swiper Slider
    ===============================================*/

    // Swiper Slider_active
    function slider_active() {
        var swiper = new Swiper('.slider_active', {
            loop: true,
            navigation: {
                nextEl: '.s-btn-next',
                prevEl: '.s-btn-prev',
            },
            speed: 500
        });
    }
    slider_active();

    // Swiper testimonial_carousel
    function testimonial_carousel() {
        var swiper = new Swiper('.testimonial_carousel', {
            slidesPerView: 2,
            grabCursor: true,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: '.testimonial-pagination',
                clickable: true,
            },
            // Responsive breakpoints
            breakpoints: {
                // when window width is <= 640px
                640: {
                    slidesPerView: 1,
                    spaceBetween: 0
                }
            }
        });
    }
    testimonial_carousel();

    // Swiper department_list
    function department_list() {
        var swiper = new Swiper('.department-list', {
            slidesPerView: 3,
            spaceBetween: 30,
            loop: true,
            navigation: {
                nextEl: '.d-btn-next',
                prevEl: '.d-btn-prev',
            },
            speed: 500,
            // Responsive breakpoints
            breakpoints: {
                // when window width is <= 640px
                640: {
                    slidesPerView: 1,
                    spaceBetween: 0
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 30
                }
            }
        });
    }
    department_list();

    // Swiper team-swiper-carousel
    function team_swiper_carousel() {
        var swiper = new Swiper('.team-swiper-carousel', {
            slidesPerView: 3,
            spaceBetween: 30,
            loop: true,
            speed: 500,
            pagination: {
                el: '.team-pagination',
                clickable: true,
            },
            // Responsive breakpoints
            breakpoints: {
                // when window width is <= 640px
                640: {
                    slidesPerView: 1,
                    spaceBetween: 0
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 30
                }
            }
        });
    }
    team_swiper_carousel();

    // Swiper client-carousel
    function client_carousel() {
        var swiper = new Swiper('.client-carousel', {
            slidesPerView: 4,
            spaceBetween: 30,
            loop: true,
            speed: 500,
            pagination: {
                el: '.team-pagination',
                clickable: true,
            },
            // Responsive breakpoints
            breakpoints: {
                // when window width is <= 640px
                640: {
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 20
                }
            }
        });
    }
    client_carousel();

    /*===============================================
        Background Paralax
    ===============================================*/
    function bgParallax() {
        if ($(".parallax").length) {
            $(".parallax").each(function() {
                var height = $(this).position().top;
                var resize = height - $(window).scrollTop();
                var parallaxSpeed = $(this).data("speed");
                var doParallax = -(resize / parallaxSpeed);
                var positionValue = doParallax + "px";
                var img = $(this).data("bg-image");

                $(this).css({
                    backgroundImage: "url(" + img + ")",
                    backgroundPosition: "50%" + positionValue,
                    backgroundSize: "cover",
                });

                if (window.innerWidth < 768) {
                    $(this).css({
                        backgroundPosition: "center center"
                    });
                }
            });
        }
    }
    bgParallax();
    $(window).on("scroll", function() {
        bgParallax();
    });


    /*===============================================
        Date Picker
    ===============================================*/
    $("#datepicker").datepicker();


    /*===============================================
        slicknav
    ===============================================*/
    $('#slick_nav').slicknav({
        prependTo: ".mobile_menu"
    });


    /*===============================================
        counter up
    ===============================================*/
    if ($('.counterup').length) {
        $('.counterup').counterUp({
            delay: 10,
            time: 1000
        });
    }

    /*===============================================
        Ajax MailChip
    ===============================================*/

    $('#mc-form').ajaxChimp({
        url: 'http://www.wpocean.us13.list-manage.com/subscribe/post?u=e9d729be03847d1a66b143bd2&amp;id=21ac2a3302', //Set Your Mailchamp URL
        callback: function(resp) {
            if (resp.result === 'success') {
                $('.sform input, .sform #subscribe-btn').fadeOut();
            }
        }
    });

    /*===============================================
        nice select active
    ===============================================*/
    if ($.fn.niceSelect) {
        $('.frm_select').niceSelect();
    }

    //slider-area background setting
    // function sliderBgSetting() {
    //     if ($(".slider-area2 .slider-items").length) {
    //         $(".slider-area2 .slider-items").each(function() {
    //             var $this = $(this);
    //             var img = $this.find(".slider").attr("src");

    //             $this.css({
    //                 backgroundImage: "url("+ img +")",
    //                 backgroundSize: "cover",
    //                 backgroundPosition: "center center"
    //             })
    //         });
    //     }
    // }

    /*==========================================================================
        WHEN DOCUMENT LOADING
    ==========================================================================*/
    // $(window).on('load', function() {
    //        sliderBgSetting()
    // });

    /*--------------------------
     scrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="icofont icofont-hand-drawn-alt-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

    /*----------------------
    Magnific Popup
    ------------------------*/
    $('.popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }

    });

    $('.video-popup').magnificPopup({
        type: 'iframe',
        gallery: {
            enabled: true
        }

    });



    /*----------------------
    Masonary
    ------------------------*/
    $('.gallery-list').imagesLoaded(function() {

        var $grid = $('.gallery-list').isotope({
            itemSelector: '.grid_item',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid_item',
            }
        });
    });

    // $('.project-menu button').on('click', function(event) {
    //     $(this).siblings('.active').removeClass('active');
    //     $(this).addClass('active');
    //     event.preventDefault();
    // });

    /*--------------------------------------------------------------
        14. Ajax Contact Form
    --------------------------------------------------------------*/

    $('.screen-reader-response').hide();
    $('.wpcf7 #default_contact_form #c_submit').on('click', function() {
        var c_name = $('#c_name').val();
        var c_email = $('#c_email').val();
        var c_phone = $('#c_phone').val();
        var c_address = $('#c_address').val();
        var c_subject = $('#c_subject').val();
        var c_msg = $('#c_msg').val();
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (!regex.test(c_email)) {
            alert('Please enter valid email');
            return false;
        }

        c_name = $.trim(c_name);
        c_email = $.trim(c_email);
        c_phone = $.trim(c_phone);
        c_address = $.trim(c_address);
        c_subject = $.trim(c_subject);
        c_msg = $.trim(c_msg);

        if (c_name != '' && c_email != '' && c_phone != '' && c_address != '' && c_subject != '' && c_msg != '') {
            var values = "&c_name=" + c_name + "&c_email=" + c_email + " &c_phone=" + c_phone + " &c_address=" + c_address + " &c_subject=" + c_subject + " &c_msg=" + c_msg;
            $.ajax({
                type: "POST",
                url: "mail.php",
                data: values,
                success: function() {
                    $('#c_name').val('');
                    $('#c_email').val('');
                    $('#c_phone').val('');
                    $('#c_address').val('');
                    $('#c_subject').val('');
                    $('#c_msg').val('');

                    $('.screen-reader-response').fadeIn().html('<div class="alert alert-success"><strong>Success!</strong> Email has been sent successfully.</div>');
                    setTimeout(function() {
                        $('.screen-reader-response').fadeOut('slow');
                    }, 4000);
                }
            });
        } else {
            $('.screen-reader-response').fadeIn().html('<div class="alert alert-danger"><strong>Warning!</strong> Please fillup the informations correctly.</div>')
        }
        return false;
    });

})(jQuery);

// google map activation
function initMap() {
    // Styles a map in night mode.
    var map = new google.maps.Map(document.getElementById('google_map'), {
        center: { lat: 40.674, lng: -73.945 },
        scrollwheel: false,
        zoom: 12,
        styles: [{
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f5f5f5"
                }]
            },
            {
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#616161"
                }]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#f5f5f5"
                }]
            },
            {
                "featureType": "administrative.land_parcel",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#bdbdbd"
                }]
            },
            {
                "featureType": "administrative.neighborhood",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#eeeeee"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            },
            {
                "featureType": "poi.business",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e5e5e5"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#ffffff"
                }]
            },
            {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "road.arterial",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#dadada"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#616161"
                }]
            },
            {
                "featureType": "road.local",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            },
            {
                "featureType": "transit",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e5e5e5"
                }]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#eeeeee"
                }]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#c9c9c9"
                }]
            },
            {
                "featureType": "water",
                "elementType": "labels.text",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            }
        ]
    });
    var marker = new google.maps.Marker({
        position: map.getCenter(),
        animation: google.maps.Animation.BOUNCE,
        icon: 'assets/img/icon/location.png',
        map: map
    });
}