// owl carousel
$(document).ready(function(){
    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            items:1,
            loop:true,
            autoplay:true,
            autoplayTimeout:6000,
            autoplayHoverPause:false,
            nav:false,
            smartSpeed:1000,
            animateOut:'fadeOut',
            animateIn:'fadeIn',
        });
        
        });
});


// counterup js
$(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1500
    });
});



$(document).ready(function(){
    $(".toggler-icon").click(function(){
        $(".small-device-menu").slideToggle();
    });
    $(".search-icon").click(function(){
        $(".search-box").toggle();
    });
    $("nav .nav-links .main-ul li i ").click(function(){
        $(".search-box").toggle();
    });

});


// wow js
new WOW().init();