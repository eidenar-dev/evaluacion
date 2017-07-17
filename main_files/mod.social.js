(function($){
    $(document).ready(function($) {
        console.log('objItem');
        /*console.log(objItem);*/

        var sliderTwitter = $('.slider_twitter').bxSlider({
            slideWidth: 250,
            minSlides: 4,
            maxSlides: 8,
            moveSlides: 4,
            infiniteLoop: false,
            pager: false,
            responsive: false,
            mode: 'horizontal',
            hideControlOnEnd: false,
            nextSelector: '#slider-next-twitter',
            prevSelector: '#slider-prev-twitter',
            adaptiveHeight : true,
            nextText: '<div id="nextTweets" class="next-post color-twitter" ><div class="next-image"></div></div>',
            prevText: '<div class="prev-post color-twitter"><div class="prev-image"></div></div>'
        });

        var sliderFacebook = $('.slider_facebook').bxSlider({
            slideWidth: 250,
            minSlides: 4,
            maxSlides: 8,
            moveSlides: 4,
            pager: false,
            adaptiveHeight: true,
            infiniteLoop: false,
            mode: 'horizontal',
            hideControlOnEnd: false,
            nextSelector: '#slider-next-facebook',
            prevSelector: '#slider-prev-facebook',
            adaptiveHeight: true,
            nextText: '<div id="nextFacebookPost" class="next-post color-facebook"><div class="next-image"></div></div>',
            prevText: '<div class="prev-post color-facebook"><div class="prev-image"></div></div>'
        });

        $('body').on('click', '#nextTweets', function() {
            $.ajax({
                url : 'index.php?option=com_ajax&module=stream_social_media&method=getTweets&format=json&Itemid='+objItem.id,
                success : function(data, status, jq){
                    var addTweets = '';
                    var url = 'http://www.twitter.com/';
                    var addTweets = '';

                    if(data.data){
                            $.each(data.data, function(index, value){
                            urlTweet = url + value.user.screen_name;
                            addTweets += '<div class="slide"><ul><li class="tiempo_twitter">'+value.created_at+'</li><li class="usuario_twitter"><a href="'+urlTweet +'" target="_blank">'+value.user.screen_name+'</a></li><li class="contenido_twitter">'+value.text+'</li><li class="enlace_twitter"><a href="'+urlTweet+'/status/'+value.id_str+'" target="_blank">Ir al Tweet</a></li></ul></div>';
                        });

                        $('.slider_twitter').append(addTweets);
                        //Recarga el Slider
                        var currentSlide = sliderTwitter.getCurrentSlide();

                        sliderTwitter.reloadSlider({
                            startSlide: currentSlide,
                            slideWidth: 250,
                            minSlides: 4,
                            maxSlides: 8,
                            moveSlides: 4,
                            infiniteLoop: false,
                            pager: false,
                            responsive: false,
                            mode: 'horizontal',
                            hideControlOnEnd: false,
                            nextSelector: '#slider-next-twitter',
                            prevSelector: '#slider-prev-twitter',
                            adaptiveHeight : true,
                            nextText: '<div id="nextTweets" class="next-post color-twitter" ><div class="next-image"></div></div>',
                            prevText: '<div class="prev-post color-twitter"><div class="prev-image"></div></div>'
                        });
                    }else{
                        console.warn('Verificar conexion a internet, no se han podido recuperar posts');
                    }
                }
            });
        });

        $('body').on('click', '#nextFacebookPost', function() {
            $.ajax({
                url : 'index.php?option=com_ajax&module=stream_social_media&method=getFacebookPost&format=json&Itemid='+objItem.id,
                success : function(data, status, jq){
                    //Agrega los nuevos post al slider
                    if(data.data){
                        var datafa = JSON.parse(data.data);
                        if(datafa.posts){
                            var posts = datafa.posts;
                            var addPost = '';
                            $.each(posts, function(index, value){
                                var texto = '';
                                if(typeof(value.description) != "undefined"){
                                    texto = value.description;
                                }else{
                                    texto = value.story;
                                }
                                addPost += '<div class="slide" style="float: left; list-style: outside none none; position: relative; width: 250px;"><ul><li class="tiempo_facebook">'+value.created_time+'</li><li class="usuario_facebook"><a target="_blank" href="https://www.facebook.com/'+datafa.page+'"></a></li><li>'+texto+'</li><li class="enlace_facebook"><a target="_blank" href="https://www.facebook.com/'+datafa.page+'">Leer Mas..</a></li></ul></div>';
                            });

                            $('.slider_facebook').append(addPost);

                            //Recarga el Slider
                            var currentSlide = sliderFacebook.getCurrentSlide();
                            sliderFacebook.reloadSlider({
                                startSlide: currentSlide,
                                slideWidth: 250,
                                minSlides: 4,
                                maxSlides: 8,
                                moveSlides: 4,
                                pager: false,
                                adaptiveHeight: true,
                                infiniteLoop: false,
                                mode: 'horizontal',
                                hideControlOnEnd: false,
                                nextSelector: '#slider-next-facebook',
                                prevSelector: '#slider-prev-facebook',
                                adaptiveHeight: true,
                                nextText: '<div id="nextFacebookPost" class="next-post color-facebook"><div class="next-image"></div></div>',
                                prevText: '<div class="prev-post color-facebook"><div class="prev-image"></div></div>'
                            });
                        }
                    }else{
                        console.warn('Verificar conexion a internet, no se han podido recuperar posts');
                    }
                }
            });  
        });
        //cambia el borde inferior de los tabs de color (Hacer por CSS)
        $('body').on('click', '#tab-twitter', function() {
            $('#li-facebook').css('border-bottom', '2px solid #659FCB'); 
            $('#li-twitter').css('border-bottom', '2px solid #659FCB');
        });

        $('body').on('click', '#tab-facebook', function() {
            $('#li-facebook').css('border-bottom', '2px solid #506DB8'); 
            $('#li-twitter').css('border-bottom', '2px solid #506DB8');  
        });

        var init  = function(){
            $.ajax({
                url : 'index.php?option=com_ajax&module=stream_social_media&method=socialMediaInit&format=json&Itemid='+objItem.id,
                success : function(data, status, jq){                    
                    //Agrega los nuevos post al slider
                    var addPost = '';
                    if(data.data){
                        if(data.data.facebookActivado == 1){
                            $.each( data.data.facebookPost, function(index, value){
                                var texto = '';
                                if(typeof(value.description) != "undefined"){
                                    texto = value.description;
                                }else{
                                    texto = value.story;
                                }
                                addPost += '<div class="slide" style="float: left; list-style: outside none none; position: relative; width: 250px;"><ul><li class="tiempo_facebook">'+value.created_time+'</li><li class="usuario_facebook"><a target="_blank" href="https://www.facebook.com/'+data.data.page+'"></a></li><li>'+texto+'</li><li class="enlace_facebook"><a target="_blank" href="https://www.facebook.com/'+data.data.page+'">Leer Mas..</a></li></ul></div>';
                            });

                            $('.slider_facebook').append(addPost);
                            //Recarga el Slider
                            var currentSlide = sliderFacebook.getCurrentSlide();
                            sliderFacebook.reloadSlider({
                                startSlide: currentSlide,
                                slideWidth: 250,
                                minSlides: 4,
                                maxSlides: 8,
                                moveSlides: 4,
                                pager: false,
                                adaptiveHeight: true,
                                infiniteLoop: false,
                                mode: 'horizontal',
                                hideControlOnEnd: false,
                                nextSelector: '#slider-next-facebook',
                                prevSelector: '#slider-prev-facebook',
                                adaptiveHeight: true,
                                nextText: '<div id="nextFacebookPost" class="next-post color-facebook"><div class="next-image"></div></div>',
                                prevText: '<div class="prev-post color-facebook"><div class="prev-image"></div></div>'
                            });
                        }
                        
                        if(data.data.twitterActivado == 1){
                            var addTweets = '';
                            var url = 'http://www.twitter.com/';
                            var addTweets = '';
                            //Agrega los nuevos post al slider
                            $.each(data.data.tweets, function(index, value){
                                urlTweet = url + value.user.screen_name;
                                addTweets += '<div class="slide"><ul><li class="tiempo_twitter">'+value.created_at+'</li><li class="usuario_twitter"><a href="'+urlTweet +'" target="_blank">'+value.user.screen_name+'</a></li><li class="contenido_twitter">'+value.text+'</li><li class="enlace_twitter"><a href="'+urlTweet+'/status/'+value.id_str+'" target="_blank">Ir al Tweet</a></li></ul></div>';
                            });
                            
                            $('.slider_twitter').append(addTweets);
                            //Recarga el Slider
                            var currentSlide = sliderTwitter.getCurrentSlide();
                            sliderTwitter.reloadSlider({
                                startSlide: currentSlide,
                                slideWidth: 250,
                                minSlides: 4,
                                maxSlides: 8,
                                moveSlides: 4,
                                infiniteLoop: false,
                                pager: false,
                                responsive: false,
                                mode: 'horizontal',
                                hideControlOnEnd: false,
                                nextSelector: '#slider-next-twitter',
                                prevSelector: '#slider-prev-twitter',
                                adaptiveHeight : true,
                                nextText: '<div id="nextTweets" class="next-post color-twitter" ><div class="next-image"></div></div>',
                                prevText: '<div class="prev-post color-twitter"><div class="prev-image"></div></div>'
                            });
                        }

                    }else{
                        console.warn('Verificar conexion a internet, no se han podido recuperar posts');
                    }
                }
            });
        };
        init();
    });
})(jQuery);


