$('.hero-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
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


$('.customers-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
})


$('.brand-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})
$(".owl-prev").html('<i class="fa fa-chevron-left"></i>');
$(".owl-next").html('<i class="fa fa-chevron-right"></i>');


// scroll manu
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 60) {
            $(".navbar").addClass("scroll-add");
        } else {
            $(".navbar").removeClass("scroll-add");
        }
    })
})
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 60) {
            $(".s-top").addClass("s-top-show");
        } else {
            $(".s-top").removeClass("s-top-show");
        }
    })
})

// magnify popup

$(document).ready(function() {
    $('.img-gallery-row').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });
});