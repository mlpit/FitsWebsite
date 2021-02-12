const app = {};

app.dynamicContent = () => {
    // Parse the URL parameter
    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }
    // Give the parameter a variable name
    var dynamicContent = getParameterByName('dc');

    // Check if the URL parameter is apples
    if (dynamicContent == 'x') {
        $('#dynamicLogo').show();
    }
    // Check if the URL parameter is oranges
    else if (dynamicContent == 'y') {
        $('#y').show();
    }
    // Check if the URL parameter is bananas
    else if (dynamicContent == 'z') {
        $('#z').show();
    }
    // Check if the URL parmeter is empty or not defined, display default content
    else {
        $('#default-content').show();
    }
}

app.cookies = () => {
    // document.cookie = 'user='+JSON.stringify(user)+'; expires='+ new Date(2022, 01, 01).toUTCString();

    // console.log(document.cookie);

    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    function checkCookie() {
        var user = getCookie("username");
        if (user != "") {
            alert("Welcome again " + user);
        } else {
            user = prompt("Please enter your name:", "");
            if (user != "" && user != null) {
                setCookie("username", user, 365);
            }
        }
    }
}

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

// Women and Men buttons with alternating images
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

app.sendEmail = () => {
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://fitsfunction.azurewebsites.net/api/EmailOrder?code=ZNR7EUtipflirok2tNHP73O87oYKN0b7P/oXtpAt8fMv0195mW6Fnw==",
        "method": "POST",
        "headers": {
            "authorization": "Bearer XXXXXXXXXXXXX",
            "content-type": "application/json"
        },
        "processData": false,
        "data": {
            "CompanyName": "Johnson Bros Shoes",
            "CompanyEmail": "bsmith@pedbasis.com",
            "PatientName": "Joe Blowe",
            "Address": "123 Main St",
            "City": "Toronto",
            "Prov": "ON",
            "Postal": "M1M1A1",
            "Email": "bsmith@mlpgroup.org",
            "Phone": "5555555555",
            "DOB": "1977-09-15",
            "ShoeLeft": "13",
            "ShoeRight": "13",
            "Model": "Teenslipper",
            "Upper": "Blue Fantasy Leather",
            "TopCover": "Grey Leather",
            "Cushion": "3mm",
            "Footbed": "EVA Black",
            "Elevation": "None",
            "Sole": "Black"
        }
    }

    $.ajax(settings).done(function (response) {
        console.log("SendGrid Response:", response);
    });
    
}

app.init = () => {
    app.dynamicContent();
    // app.cookies();
    app.scrollDown();
    app.navSlide();
    setInterval('app.swapImagesWomen()', 4000);
    setInterval('app.swapImagesMen()', 4000);
    // app.sendEmail();
};


$(function () {
    app.init();
});