jQuery(document).ready(function($) {
	
	//oculta parte de las noticias.
    $('.row').find(".col-md-6").slice(6, 24).hide();
    var lengthArticles = $('.row').find(".col-md-6").length;

    if (lengthArticles === 24) {
        $('#k2_ver_mas').on('click', function(e) {
            e.preventDefault();

            var buttonText = $(this).text();

            var existClassFirstGroup = $('.row').find(".col-md-6").slice(6, 12).hasClass("superclass");
            var existClassSecondGroup = $('.row').find(".col-md-6").slice(12, 16).hasClass("superclass");

            if (existClassFirstGroup === false) {
                $('.row').find(".col-md-6").slice(6, 12).addClass('superclass');
                $('.row').find(".col-md-6").slice(6, 12).show('slow');
            }

            if (existClassSecondGroup === false) {
                if (existClassFirstGroup === true)
                {
                    $('.row').find(".col-md-6").slice(12, 18).addClass('superclass');
                    $('.row').find(".col-md-6").slice(12, 18).show('slow');
                }
            }
            if (existClassSecondGroup === true) {
                $('.row').find(".col-md-6").slice(18, 24).addClass('superclass');
                $('.row').find(".col-md-6").slice(18, 24).show('slow');
                $('#k2_ver_mas').text('Ver Menos');
                if (buttonText === 'Ver Menos') {
                    $('.row').find(".col-md-6").removeClass('superclass');
                    $('.row').find(".col-md-6").slice(6, 24).hide();
                    $('#k2_ver_mas').text('Ver Mas');
                    scrollTopArticles();
                }
            }
        });

    } // end length articles.
    else {
        $('#k2_ver_mas').text('El numero de artículos en el K2 deber ser igual a 24');
    }


    $('.home-social-tabs .tabs-container ul.tabs li:nth-child(1) .tab').click(function() {
        $(this).css('background', '#55ACEE');
        default_color_buttons();
        change_color_buttons_twitter();
        $('.home-social-tabs .tabs-container ul.tabs li').css('border-bottom', '3px solid #55ACEE');
        $('.home-social-tabs .tabs-container ul.tabs li:nth-child(2) .tab').css('background', '#919396');
    });
    $('.home-social-tabs .tabs-container ul.tabs li:nth-child(2) .tab').click(function() {
        $(this).css('background', '#506DBA');
        default_color_buttons();
        change_color_buttons_facebook();
        $('.home-social-tabs .tabs-container ul.tabs li').css('border-bottom', '3px solid #506DBA');
        $('.home-social-tabs .tabs-container ul.tabs li:nth-child(1) .tab').css('background', '#919396');
    });
    
    function change_color_buttons_twitter() {
        $('.home-social-tabs .bx-wrapper .bx-prev').hover(function() {
            $('.home-social-tabs .bx-wrapper .bx-prev').css("background", "#55ACEE url(images/home-social-prev.png) center center no-repeat");
            $('.home-social-tabs .bx-wrapper .bx-next').css('background', '#919396 url(images/home-social-next.png) center center no-repeat');
        });

        $('.home-social-tabs .bx-wrapper .bx-next').hover(function() {
            $('.home-social-tabs .bx-wrapper .bx-next').css("background", "#55ACEE url(images/home-social-next.png) center center no-repeat");
            $('.home-social-tabs .bx-wrapper .bx-prev').css('background', '#919396 url(images/home-social-prev.png) center center no-repeat');
        });
    }

    function change_color_buttons_facebook() {
        $('.home-social-tabs .bx-wrapper .bx-prev').hover(function() {
            $('.home-social-tabs .bx-wrapper .bx-prev').css("background", "#506DBA url(images/home-social-prev.png) center center no-repeat");
            $('.home-social-tabs .bx-wrapper .bx-next').css('background', '#919396 url(images/home-social-next.png) center center no-repeat');
        });

        $('.home-social-tabs .bx-wrapper .bx-next').hover(function() {
            $('.home-social-tabs .bx-wrapper .bx-next').css("background", "#506DBA url(images/home-social-next.png) center center no-repeat");
            $('.home-social-tabs .bx-wrapper .bx-prev').css('background', '#919396 url(images/home-social-prev.png) center center no-repeat');
        });
    }

    function default_color_buttons() {
        $('.home-social-tabs .bx-wrapper .bx-prev').css('background', '#919396 url(images/home-social-prev.png) center center no-repeat');
        $('.home-social-tabs .bx-wrapper .bx-next').css('background', '#919396 url(images/home-social-next.png) center center no-repeat');
    }
});