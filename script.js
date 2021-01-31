const app = {};

app.scrollDown = () => {
    $('#downBtn').on('click', function () {
        $('html').animate({
            scrollTop: $('#sampleStyles').offset().top
        }, 1000);
    })
}

app.navSlide = () => {
    $('#mobileMenu').on('click', function () {
        $('#navLinks').toggleClass('navOpen');
        $('#mobileMenu').toggleClass('close');
    })
}

// app.clickHandler = () => {
//     $('a[href^="#"]s').on('click', function (e) {
//         e.preventDefault();
//         let target = this.hash;
//         let $target = $(target);
//         let scroll;

//         if ($(window).scrollTop() == 0) {
//             scroll = ($target.offset().top) - 160
//         } else {
//             scroll = ($target.offset().top) - 60
//         }
//         $('html, body').animate({
//             'scrollTop': scroll
//         }, 900, function () {
//             window.location.hash = target;
//         });

//         app.navSlide();
//     })
    
// }

app.swapImagesWomen = () => {
    let $active = $('#womenStyles .active');
    let $next = ($('#womenStyles .active').next().length > 0) ? $('#womenStyles .active').next() : $('#womenStyles img:first');
    $active.fadeOut(function () {
        $active.removeClass('active');
        $next.fadeIn(2000).addClass('active');
    });
}

app.swapImagesMen = () => {
    let $active = $('#menStyles .active');
    let $next = ($('#menStyles .active').next().length > 0) ? $('#menStyles .active').next() : $('#menStyles img:first');
    $active.fadeOut(function () {
        $active.removeClass('active');
        $next.fadeIn(2000).addClass('active');
    });
}

app.videoPlay = () => {
    $('video').mouseover(function() {
        $('video').get(0).play();
    })
}

app.carousel = () => {
    $('.main-gallery').flickity({
        // options
        cellAlign: 'left',
        contain: true
    });
}

app.init = () => {
    app.scrollDown();
    app.navSlide();
    app.carousel();
    // app.clickHandler();
    setInterval('app.swapImagesWomen()', 4000);
    setInterval('app.swapImagesMen()', 4000);
    app.videoPlay();
};


$(function () {
    app.init();
});