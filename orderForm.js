const orderApp = {};

orderApp.menSandals = {
    "model": {
        1: {
            "name":"Teenslipper",
            "imageUrl": "./assets/Men/Teenslipper/therapeutische_teenslipper_blauwleercognacaccent_1.png"
        }, 
        2: {
            "name":"Tweeband",
            "imageUrl": "./assets/Men/Tweeband_sandaal/therapeutische_tweeband_sandaal_blauwleer_1.png"
        },
        3: {
            "name":"Drieband Sandal",
            "imageUrl": "./assets/Men/Drieband_sandaal/therapeutische_drieband_sandaal_zwartcrazyhorseleer_1.png"
        } 
    },
    "upper": {
        1: {
            "name":"Horse Black",
            "imageUrl": "./assets/Uppers/Men/horse_black.png"
        }, 
        2: {
            "name":"Horse Brown",
            "imageUrl": "./assets/Uppers/Men/horse_brown.png"
        },
        3: {
            "name":"Leather Black",
            "imageUrl": "./assets/Uppers/Men/leather_black.png"
        },
        4: {
            "name":"Leather Brown",
            "imageUrl": "./assets/Uppers/Men/leather_brown.png"
        },
        5: {
            "name":"Leather Cognac",
            "imageUrl": "./assets/Uppers/Men/leather_cognac.png"
        },
        6: {
            "name":"Leather Darkblue",
            "imageUrl": "./assets/Uppers/Men/leather_darkblue.png"
        },
        7: {
            "name":"Leather Grey",
            "imageUrl": "./assets/Uppers/Men/leather_grey.png"
        }
    },
    "topCover": {
        1: {
            "name":"Flexline Black",
            "imageUrl": "./assets/Uppers/Men/leather_grey.png"
        },
        2: {
            "name":"Leather Grey",
            "imageUrl": "./assets/Uppers/Men/leather_grey.png"
        },
    }
}

orderApp.choices = () => {
    const models = Object.values(orderApp.menSandals.model);

    models.forEach(model => {
        $('#modelSelection').append(`
        <div>
            <label>${model.name}
                <input type="radio" name="model" value=${model.name}>
                <img class="radioImage" src=${model.imageUrl} alt="${model.name} sandal">
            </label>
        </div>
        `);
    });
    
    const uppers = Object.values(orderApp.menSandals.upper);

    uppers.forEach(upper => {
        $('#upperSelection').append(`
        <div>
            <label>${upper.name}
                <input type="radio" name="upper" value=${upper.name}>
                <img class="radioImage" src=${upper.imageUrl} alt="${upper.name} color sample">
            </label>
        </div>
        `);
    });

}

orderApp.moveSections = () => {

    $("#orderSections section").each(function(e) {
        if (e != 0)
            $(this).hide();
    });
    
    $(".nextBtn").on('click', function(){
        if ($("#orderSections section:visible").next().length != 0)
            $("#orderSections section:visible").next().show().prev().hide();
        else {
            $("#orderSections section:visible").hide();
            $("#orderSections section:first").show();
        }
        return false;
    });

    $(".prevBtn").on('click', function(){
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
    orderApp.choices();
    orderApp.moveSections();
    // orderApp.submitHandler();
};

$(function () {
    orderApp.init();
});