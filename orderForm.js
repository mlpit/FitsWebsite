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
    
    $(".nextBtn").click(function(){
        if ($("#orderSections section:visible").next().length != 0)
            $("#orderSections section:visible").next().show().prev().hide();
        else {
            $("#orderSections section:visible").hide();
            $("#orderSections section:first").show();
        }
        return false;
    });

    $(".prevBtn").click(function(){
        if ($("#orderSections section:visible").prev().length != 0)
            $("#orderSections section:visible").prev().show().next().hide();
        else {
            $("#orderSections section:visible").hide();
            $("#orderSections section:last").show();
        }
        return false;
    });
}

orderApp.submitHandler = () => {

}

orderApp.init = () => {
    orderApp.nextSection();
    orderApp.submitHandler();
};

$(function () {
    orderApp.init();
});