$(document).ready(function () {
    $('.poster').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    $('.product1').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            430: {
                items: 3
            },
            581: {
                items:4
            },
            640: {
                items: 5
            },
            991: {
                items: 6
            },
            1199: {
                items: 6
            }
        }
    })
    $('.product2').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            581: {
                items:3
            },
            640: {
                items: 3
            },
            991: {
                items: 4
            },
            1199: {
                items: 5
            }
        }
    })
    $('.client').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            640: {
                items: 2
            },
            991: {
                items: 2
            },
            1199: {
                items: 3
            }
        }
    })
    $('.info1').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            581: {
                items:2
            },
            640: {
                items: 3
            },
            991: {
                items: 3
            },
            1199: {
                items: 3
            }
        }
    })
    $('.brand').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 3
            },
            580: {
                items:4
            },
            640: {
                items: 4
            },
            767: {
                items: 4
            },
            1199: {
                items: 5
            }
        }
    })
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".scroll").fadeIn("slow");
        }
        else {
            $(".scroll").fadeOut("slow");
        }
    });
    $(".title").click(function () {
    if(!$(html).width(767)){
            var id = $(this).attr('data-id');
            $(id).slideToggle();
        }
        else{
            var id = $(this).attr('data-id');
            !$(id).slideToggle();
        }
    }
        );
    $(".nav-toggle").click(function(){
        if(!$("html").hasClass("nav-open")){
            $("html").addClass("nav-before-open");
            setTimeout(function()  {
                $("html").addClass("nav-open");
            }, 300);
        }
        else {
            $("html").removeClass("nav-open");
            setTimeout(function () {
                $("html").removeClass("nav-before-open");
            }, 300);
        }
    });
});
