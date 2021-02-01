const orderApp = {};

orderApp.womenChoices = {
    "model": {
        1: {
            "name":"Teenslipper",
            "imageUrl": "./assets/Ladies/Teenslipper/therapeutische_teenslipper_antracietleer_1.png"
        }, 
        // WHAT UPPERS ARE AVAILABLE WITH VEGAN VERSION??
        2: {
            "name":"Teenslipper Vegan",
            "imageUrl": "./assets/Ladies/Teenslipper_vegan/therapeutische_teenslipper_zwartveganleer_1.png"
        },
        3: {
            "name":"Tweeband Sandal",
            "imageUrl": "./assets/Ladies/Tweeband_sandaal/therapeutische_tweeband_sandaal_antracietleer_1.png"
        },
        4: {
            "name":"Drieband Sandal",
            "imageUrl": "./assets/Ladies/Drieband_sandaal/therapeutische_drieband_sandaal_antracietleer_1.png"
        } 
    },
    // some upper images names doesn't match excel sheet
    "upper": {
        1: {
            "name":"Leather Anthracite",
            "imageUrl": "./assets/Uppers/Women/leather_anthra.png",
            "availableModel": ["Teenslipper", "Teenslipper Vegan", "Tweeband Sandal",  "Drieband Sandal"]
        }, 
        2: {
            "name":"Leather Anthracite Snake Pattern",
            "imageUrl": "./assets/Uppers/Women/pattern_anthrasnake.png",
            "availableModel": ["Teenslipper", "Tweeband Sandal"]
        },
        3: {
            "name":"Leather Black",
            "imageUrl": "./assets/Uppers/Women/leather_black.png",
            "availableModel": ["Teenslipper", "Tweeband Sandal",  "Drieband Sandal"]
        },
        4: {
            "name":"Leather Blue",
            "imageUrl": "./assets/Uppers/Women/leather_blue.png",
            "availableModel": ["Teenslipper", "Tweeband Sandal",  "Drieband Sandal"]
        },
        5: {
            "name":"Leather Gold Flower Pattern",
            "imageUrl": "./assets/Uppers/Women/leather_goldflower.png",
            "availableModel": ["Teenslipper", "Tweeband Sandal"]
        },
        6: {
            "name":"Leather Salmon Pink",
            "imageUrl": "./assets/Uppers/Women/leather_salmon.png",
            "availableModel": ["Teenslipper", "Tweeband Sandal"]
        },
        7: {
            "name":"Leather White",
            "imageUrl": "./assets/Uppers/Women/leather_white.png",
            "availableModel": ["Teenslipper", "Tweeband Sandal",  "Drieband Sandal"]
        },
        8: {
            "name":"Linen Pattern Black",
            "imageUrl": "./assets/Uppers/Women/linen_black.png",
            "availableModel": ["Teenslipper", "Tweeband Sandal"]
        },
        9: {
            "name":"Nubuck Beige",
            "imageUrl": "./assets/Uppers/Women/nubuck_beige.png",
            "availableModel": ["Drieband Sandal"]
        },
        10: {
            "name":"Nubuck Beige Snake Pattern",
            "imageUrl": "./assets/Uppers/Women/nubuck_beigesnake.png",
            "availableModel": ["Teenslipper", "Tweeband Sandal"]
        },
        11: {
            "name":"Nubuck Grey",
            "imageUrl": "./assets/Uppers/Women/nubuck_grey.png",
            "availableModel": ["Drieband Sandal"]
        },
        12: {
            "name":"Nubuck Grey Snake Pattern",
            "imageUrl": "./assets/Uppers/Women/nubuck_greysnake.png",
            "availableModel": ["Teenslipper", "Tweeband Sandal"]
        },
        13: {
            "name":"Nubuck Red",
            "imageUrl": "./assets/Uppers/Women/nubuck_red.png",
            "availableModel": ["Drieband Sandal"]
        },
        14: {
            "name":"Nubuck Red Miami Croco Pattern",
            "imageUrl": "./assets/Uppers/Women/nubuck_redmiami.png",
            "availableModel": ["Teenslipper", "Tweeband Sandal"]
        },
        15: {
            "name":"Nubuck Yellow Miami Croco Pattern",
            "imageUrl": "./assets/Uppers/Women/nubuck_yellowmiami.png",
            "availableModel": ["Teenslipper"]
        },
        16: {
            "name":"Silver Printed Pattern",
            "imageUrl": "./assets/Uppers/Women/print_silver.png",
            "availableModel": ["Teenslipper"]
        },
        17: {
            "name":"Silver Printed Pattern with Flower",
            "imageUrl": "./assets/Uppers/Women/print_flower.png",
            "availableModel": ["Teenslipper"]
        }
    }
}

orderApp.menChoices = {
    "model": {
        1: {
            "name":"Teenslipper",
            "imageUrl": "./assets/Men/Teenslipper/therapeutische_teenslipper_blauwleercognacaccent_1.png"
        }, 
        2: {
            "name":"Tweeband Sandal",
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
            "imageUrl": "./assets/Uppers/Men/horse_black.png",
            "availableModel": ["Teenslipper", "Tweeband Sandal", "Drieband Sandal"]
        }, 
        2: {
            "name":"Horse Brown",
            "imageUrl": "./assets/Uppers/Men/horse_brown.png",
            "availableModel": ["Teenslipper", "Tweeband Sandal", "Drieband Sandal"]
        },
        3: {
            "name":"Leather Black",
            "imageUrl": "./assets/Uppers/Men/leather_black.png",
            "availableModel": ["Teenslipper", "Tweeband Sandal", "Drieband Sandal"]
        },
        4: {
            "name":"Leather Brown",
            "imageUrl": "./assets/Uppers/Men/leather_brown.png",
            "availableModel": ["Teenslipper", "Tweeband Sandal", "Drieband Sandal"]
        },
        5: {
            "name":"Leather Cognac",
            "imageUrl": "./assets/Uppers/Men/leather_cognac.png",
            "availableModel": ["Teenslipper", "Tweeband Sandal", "Drieband Sandal"]
        },
        6: {
            "name":"Leather Darkblue",
            "imageUrl": "./assets/Uppers/Men/leather_darkblue.png",
            "availableModel": ["Teenslipper", "Tweeband Sandal", "Drieband Sandal"]
        },
        7: {
            "name":"Leather Grey",
            "imageUrl": "./assets/Uppers/Men/leather_grey.png",
            "availableModel": ["Teenslipper", "Tweeband Sandal", "Drieband Sandal"]
        }
    }
}

orderApp.generalChoices = {
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
    "midlayer": {
        1: {
            "name":"None",
            "imageUrl": "./assets/Cushion/none.jpg"
        },
        2: {
            "name":"Cushion Black 3mm",
            "imageUrl": "./assets/Cushion/black.png"
        }
    },
    "blank": {
        1: {
            "name":"EVA Black",
            "imageUrl": "./assets/Footbed/eva_black.png"
        },
        2: {
            "name":"EVA Cork",
            "imageUrl": "./assets/Footbed/eva_cork.png"
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

orderApp.chosenStyle = "";
orderApp.chosenUpper = "";
orderApp.chosenTopCover = "";
orderApp.chosenMidlayer = "";
orderApp.chosenBlank = "";
orderApp.chosenSole = "";

orderApp.choices = () => {
    const models = Object.values(orderApp.menChoices.model);

    models.forEach(model => {
        $('#modelSelection').append(`
            <label>${model.name}
                <input type="radio" name="model" value="${model.name}">
                <img class="radioImage" src=${model.imageUrl} alt="image of ${model.name} style">
            </label>
        `);
    });

    const topCovers = Object.values(orderApp.generalChoices.topCover);

    topCovers.forEach(topCover => {
        $('#topCoverSelection').append(`
            <label>${topCover.name}
                <input type="radio" name="upper" value="${topCover.name}">
                <img class="radioImage" src=${topCover.imageUrl} alt="${topCover.name} color sample">
            </label>
        `);
    });

    const midlayers = Object.values(orderApp.generalChoices.midlayer);

    midlayers.forEach(midlayer => {
        $('#midlayerSelection').append(`
            <label>${midlayer.name}
                <input type="radio" name="upper" value="${midlayer.name}">
                <img class="radioImage" src=${midlayer.imageUrl} alt="${midlayer.name} color sample">
            </label>
        `);
    });

    const blanks = Object.values(orderApp.generalChoices.blank);

    blanks.forEach(blank => {
        $('#blankSelection').append(`
            <label>${blank.name}
                <input type="radio" name="upper" value="${blank.name}">
                <img class="radioImage" src=${blank.imageUrl} alt="${blank.name} color sample">
            </label>
        `);
    });

    const bottomSoles = Object.values(orderApp.generalChoices.bottomSole);

    bottomSoles.forEach(bottomSole => {
        $('#soleSelection').append(`
            <label>${bottomSole.name}
                <input type="radio" name="upper" value="${bottomSole.name}">
                <img class="radioImage" src=${bottomSole.imageUrl} alt="${bottomSole.name} color sample">
            </label>
        `);
    });

}

orderApp.upperDisplay = () => {
    $("#modelSelection input").on('click', function() {

        const modelChoice = $('input[name="model"]:checked').val();

        const uppers = Object.values(orderApp.menChoices.upper);
        const uppersFiltered = uppers.filter(item => item.availableModel.indexOf(modelChoice) > -1);

        uppersFiltered.forEach(upper => {
            
            $('#upperSelection').append(`
                <label>${upper.name}
                    <input type="radio" name="upper" value=${upper.name}>
                    <img class="radioImage" src=${upper.imageUrl} alt="${upper.name} color sample">
                </label>
            `);
        });
    });
    
}



orderApp.moveSections = () => {

    $("#orderSections section").each(function(e) {
        if (e != 0)
            $(this).hide();
    });

    $(".nextBtn").attr('disabled', 'disabled');
    
    $(".nextBtn").on('click', function(){

        if ($("#orderSections section:visible").next().length != 0) {
            orderApp.highlightSelection();
            orderApp.orderSummary();
            $("#orderSections section:visible").next().show().prev().hide();
            $(".nextBtn").attr('disabled', 'disabled');
        }
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

orderApp.clearModelChoice = () => {
    $('#upperPrevBtn').on('click', function () {
        $("#upperSelection").html('');
    });
}

orderApp.highlightSelection = () => {
    $('label').on('click', function () {
        $(".nextBtn").removeAttr('disabled');
        $('label').css("background-color", "transparent");
        $(this).css("background-color", "rgba(211, 140, 106, 0.2)");
    });
}



orderApp.orderSummary = () => {
    $('#modelSelection input').on('click', function () {
        orderApp.chosenStyle = $(this).val();
        $('#selectedStyle').html(`<input type="text" readonly="readonly" value="${orderApp.chosenStyle}"></input>`)
    });

    $('#upperSelection input').on('click', function () {
        chosenUpper = $(this).val();
        $('#selectedUpper').html(`<input type="text" readonly="readonly" value="${chosenUpper}"></input>`)
    });

    $('#topCoverSelection input').on('click', function () {
        chosenTopCover = $(this).val();
        $('#selectedTopCover').html(`<input type="text" readonly="readonly" value="${chosenTopCover}"></input>`)
    });

    $('#midlayerSelection input').on('click', function () {
        chosenMidlayer = $(this).val();
        $('#selectedMidlayer').html(`<input type="text" readonly="readonly" value="${chosenMidlayer}"></input>`)
    });

    $('#blankSelection input').on('click', function () {
        chosenBlank = $(this).val();
        $('#selectedBlank').html(`<input type="text" readonly="readonly" value="${chosenBlank}"></input>`)
    });

    $('#soleSelection input').on('click', function () {
        chosenSole = $(this).val();
        $('#selectedSole').html(`<input type="text" readonly="readonly" value="${chosenSole}"></input>`)
    });
}

orderApp.inputRequired = () => {
    // $(".nextBtn:first-of-type").on('click', function () {
    //     if (orderApp.chosenStyle === "") {
    //         alert("Please make a selection")
    //     } 
    // })
}

orderApp.submitHandler = () => {

}

orderApp.init = () => {
    orderApp.choices();
    
    orderApp.moveSections();
    orderApp.upperDisplay();
    orderApp.clearModelChoice();
    orderApp.highlightSelection();
    orderApp.orderSummary();
    orderApp.inputRequired();
    // orderApp.submitHandler();
};

$(function () {
    orderApp.init();
});