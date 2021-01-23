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

app.init = () => {
    app.scrollDown();
    app.navSlide();
    setInterval('app.swapImagesWomen()', 3000);
    setInterval('app.swapImagesMen()', 3000);
};

$(function () {
    app.init();
});