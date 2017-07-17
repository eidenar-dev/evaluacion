/*jQuery(document).ready(function($) {

//oculta parte de las noticias.
    $('.row').find(".escondeme").slice(3, 9).hide();
    var lengthArticles = $('.row').find(".escondeme").length;

    console.log(lengthArticles);

    if (lengthArticles === 9) {
        $('#k2_ver_mas').on('click', function(e) {
            e.preventDefault();

            var buttonText = $(this).text();

            var existClassFirstGroup = $('.row').find(".escondeme").slice(3, 6).hasClass("superclass");
            var existClassSecondGroup = $('.row').find(".escondeme").slice(6, 9).hasClass("superclass");

            if (existClassFirstGroup === false) {
                $('.row').find(".escondeme").slice(3, 6).addClass('superclass');
                $('.row').find(".escondeme").slice(3, 6).show('slow');
            }

            if (existClassSecondGroup === false) {
                if (existClassFirstGroup === true)
                {
                    $('.row').find(".escondeme").slice(6, 9).addClass('superclass');
                    $('.row').find(".escondeme").slice(6, 9).show('slow');
                    $('#k2_ver_mas').text('Ver Menos');
                }
            }
            if (buttonText === 'Ver Menos') {
                $('.row').find(".escondeme").removeClass('superclass');
                $('.row').find(".escondeme").slice(3, 9).hide();
                $('#k2_ver_mas').text('Ver Mas');
                scrollTopArticles();
            }
        });

    } // end length articles.
    else {
        $('#k2_ver_mas').text('El numero de artículos en el K2 deber ser igual a 24');
    }
    
    // up the window with scrolll
    function scrollTopArticles() {
        var duration = 500;
        jQuery('html, body').animate({scrollTop:$('#k2ModuleBox92').position().top}, duration);
        $('#k2ModuleBox92').focus();
    }
});*/