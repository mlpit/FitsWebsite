const orderApp = {};

// orderApp.menSandals = {
//     "model": {
//         1: "Teenslipper",
//         2: "Tweeband"
//     }
// }

orderApp.nextSection = () => {

    $("#orderSections section").each(function(e) {
        if (e != 0)
            $(this).hide();
    });
    
    $("#next").click(function(){
        if ($("#orderSections section:visible").next().length != 0)
            $("#orderSections section:visible").next().show().prev().hide();
        else {
            $("#orderSections section:visible").hide();
            $("#orderSections section:first").show();
        }
        return false;
    });

    $("#prev").click(function(){
        if ($("#orderSections section:visible").prev().length != 0)
            $("#orderSections section:visible").prev().show().next().hide();
        else {
            $("#orderSections section:visible").hide();
            $("#orderSections section:last").show();
        }
        return false;
    });
}

orderApp.init = () => {
    orderApp.nextSection();
};

$(function () {
    orderApp.init();
});