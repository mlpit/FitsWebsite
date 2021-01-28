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
            "imageUrl": "./assets/Top_Cover/flexline_black.png"
        },
        2: {
            "name":"Leather Beige",
            "imageUrl": "./assets/Top_Cover/leather_beige.png"
        },
        3: {
            "name":"Leather Brown",
            "imageUrl": "./assets/Top_Cover/leather_brown.png"
        },
        4: {
            "name":"Leather Grey",
            "imageUrl": "./assets/Top_Cover/leather_grey.png"
        },
        5: {
            "name":"Microfiber Beige",
            "imageUrl": "./assets/Top_Cover/micro_beige.png"
        },
        6: {
            "name":"Microfiber Black",
            "imageUrl": "./assets/Top_Cover/micro_black.png"
        },
        7: {
            "name":"Microfiber Brown",
            "imageUrl": "./assets/Top_Cover/micro_brown.png"
        },
        8: {
            "name":"Microfiber Grey",
            "imageUrl": "./assets/Top_Cover/micro_grey.png"
        },
        9: {
            "name":"Suede Beige",
            "imageUrl": "./assets/Top_Cover/suede_beige.png"
        },
        10: {
            "name":"Suede Black",
            "imageUrl": "./assets/Top_Cover/suede_black.png"
        },
        11: {
            "name":"Suede Brown",
            "imageUrl": "./assets/Top_Cover/suede_brown.png"
        },
        12: {
            "name":"Suede Grey",
            "imageUrl": "./assets/Top_Cover/suede_grey.png"
        }
    },
    "bottomSole": {
        1: {
            "name":"Beige",
            "imageUrl": "./assets/Bottom_Sole/beige.png"
        },
        2: {
            "name":"Black",
            "imageUrl": "./assets/Bottom_Sole/black.png"
        },
        3: {
            "name":"Blue",
            "imageUrl": "./assets/Bottom_Sole/blue.png"
        },
        4: {
            "name":"Orange",
            "imageUrl": "./assets/Bottom_Sole/orange.png"
        },
        5: {
            "name":"Red",
            "imageUrl": "./assets/Bottom_Sole/red.png"
        },
        6: {
            "name":"White",
            "imageUrl": "./assets/Bottom_Sole/white.png"
        }
    }
}

orderApp.choices = () => {
    const models = Object.values(orderApp.menSandals.model);

    models.forEach(model => {
        $('#modelSelection').append(`
            <label>${model.name}
                <input type="radio" name="model" value=${model.name}>
                <img class="radioImage" src=${model.imageUrl} alt="${model.name} sandal">
            </label>
        `);
    });
    
    const uppers = Object.values(orderApp.menSandals.upper);

    uppers.forEach(upper => {
        $('#upperSelection').append(`
            <label>${upper.name}
                <input type="radio" name="upper" value=${upper.name}>
                <img class="radioImage" src=${upper.imageUrl} alt="${upper.name} color sample">
            </label>
        `);
    });

    const topCovers = Object.values(orderApp.menSandals.topCover);

    topCovers.forEach(topCover => {
        $('#topCoverSelection').append(`
            <label>${topCover.name}
                <input type="radio" name="upper" value=${topCover.name}>
                <img class="radioImage" src=${topCover.imageUrl} alt="${topCover.name} color sample">
            </label>
        `);
    });

    const bottomSoles = Object.values(orderApp.menSandals.bottomSole);

    bottomSoles.forEach(bottomSole => {
        $('#soleSelection').append(`
            <label>${bottomSole.name}
                <input type="radio" name="upper" value=${bottomSole.name}>
                <img class="radioImage" src=${bottomSole.imageUrl} alt="${bottomSole.name} color sample">
            </label>
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