$(document).ready(function () {
    Pace.on("done", function () {
        $(".pre_loader").css("display", "none");
    });

    $(".hero_title").each(function (i) {
        var $current_element = $(this);
        setTimeout(function () {
            $current_element.addClass("reveal");
        }, i * 500)
    })

    $("#rotating-text").Morphext({
        // The [in] animation type. Refer to Animate.css for a list of available animations.
        animation: "bounceIn",
        // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
        separator: ",",
        // The delay between the changing of each phrase in milliseconds.
        speed: 3000,
        complete: function () {
            // Called after the entrance animation is executed.
        }
    });
    
        /* Owl arousel Starts */
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        animateOut: 'fadeOut'
    });
    /* Owl arousel Starts */
    
    

    // Reveal Text When In View Port
    
    $(".text_reveal:not(.in)").each(function(i) {
     var $current_element = $(this);
        $current_element.isInViewport(function(status){
            if (status === "entered") {
                setTimeout(function() {
                    $current_element.addClass("in");
                }, i * 100 );
            }
        });    
    });
    
    // Magnific Popuup Image Gallery
    
    $(".gallery").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

});

$(window).on("scroll", function() {
    if ($(window).scrollTop() > 0) {
        $(".navbar").addClass("nav-bg-black");
    }
    else {
        $(".navbar").removeClass("nav-bg-black");
    }
});