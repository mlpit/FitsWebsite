const orderApp = {};

orderApp.menChoices = {
    "model": {
        1: {
            "name":"Teenslipper",
            "imageUrl": "./assets/Men/Teenslipper.png"
        }, 
        2: {
            "name":"Tweeband Sandal",
            "imageUrl": "./assets/Men/Tweeband Sandal.png"
        },
        3: {
            "name":"Drieband Sandal",
            "imageUrl": "./assets/Men/Drieband Sandal.png"
        } 
    },
    "upper": {
        1: {
            "name":"Black Horse Leather",
            "imageUrl": "./assets/Uppers/Men/horse_black.png",
            "availableModel": ["Teenslipper", "Tweeband Sandal", "Drieband Sandal"]
        }, 
        2: {
            "name":"Brown Horse Leather",
            "imageUrl": "./assets/Uppers/Men/horse_brown.png",
            "availableModel": ["Teenslipper", "Tweeband Sandal", "Drieband Sandal"]
        },
        3: {
            "name":"Black Leather",
            "imageUrl": "./assets/Uppers/Men/leather_black.png",
            "availableModel": ["Teenslipper", "Tweeband Sandal", "Drieband Sandal"]
        },
        4: {
            "name":"Brown Leather",
            "imageUrl": "./assets/Uppers/Men/leather_brown.png",
            "availableModel": ["Teenslipper", "Tweeband Sandal", "Drieband Sandal"]
        },
        5: {
            "name":"Cognac Leather",
            "imageUrl": "./assets/Uppers/Men/leather_cognac.png",
            "availableModel": ["Teenslipper", "Tweeband Sandal", "Drieband Sandal"]
        },
        6: {
            "name":"Blue Leather",
            "imageUrl": "./assets/Uppers/Men/leather_darkblue.png",
            "availableModel": ["Teenslipper", "Tweeband Sandal", "Drieband Sandal"]
        },
        7: {
            "name":"Grey Leather",
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
            "name":"Black EVA",
            "imageUrl": "./assets/Footbed/eva_black.png"
        },
        2: {
            "name":"Cork EVA",
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

// orderApp.chosenStyle = "";
// orderApp.chosenUpper = "";
// orderApp.chosenTopCover = "";
// orderApp.chosenMidlayer = "";
// orderApp.chosenBlank = "";
// orderApp.chosenSole = "";

orderApp.choices = () => {
    const models = Object.values(orderApp.menChoices.model);

    models.forEach(model => {
        $('#modelSelection').append(`
            <label class="selectionLabel">${model.name}
                <input type="radio" name="model" value="${model.name}">
                <img class="radioImage" src="${model.imageUrl}" alt="image of ${model.name} style">
            </label>
        `);
    });

    const topCovers = Object.values(orderApp.generalChoices.topCover);

    topCovers.forEach(topCover => {
        $('#topCoverSelection').append(`
            <label class="selectionLabel">${topCover.name}
                <input type="radio" name="upper" value="${topCover.name}">
                <img class="radioImage" src="${topCover.imageUrl}" alt="${topCover.name} color sample">
            </label>
        `);
    });

    const midlayers = Object.values(orderApp.generalChoices.midlayer);

    midlayers.forEach(midlayer => {
        $('#midlayerSelection').append(`
            <label class="selectionLabel">${midlayer.name}
                <input type="radio" name="upper" value="${midlayer.name}">
                <img class="radioImage" src=${midlayer.imageUrl} alt="${midlayer.name} color sample">
            </label>
        `);
    });

    const blanks = Object.values(orderApp.generalChoices.blank);

    blanks.forEach(blank => {
        $('#blankSelection').append(`
            <label class="selectionLabel">${blank.name}
                <input type="radio" name="upper" value="${blank.name}">
                <img class="radioImage" src=${blank.imageUrl} alt="${blank.name} color sample">
            </label>
        `);
    });

    const bottomSoles = Object.values(orderApp.generalChoices.bottomSole);

    bottomSoles.forEach(bottomSole => {
        $('#soleSelection').append(`
            <label class="selectionLabel">${bottomSole.name}
                <input type="radio" name="upper" value="${bottomSole.name}">
                <img class="radioImage" src=${bottomSole.imageUrl} alt="${bottomSole.name} color sample">
            </label>
        `);
    });

}

orderApp.upperDisplay = () => {
    $("#modelSelection input").on('click', function() {

        $("#upperSelection").html('');

        const modelChoice = $('input[name="model"]:checked').val();

        const uppers = Object.values(orderApp.menChoices.upper);
        const uppersFiltered = uppers.filter(item => item.availableModel.indexOf(modelChoice) > -1);

        uppersFiltered.forEach(upper => {
            
            $('#upperSelection').append(`
                <label class="selectionLabel">${upper.name}
                    <input type="radio" name="upper" value="${upper.name}">
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
    $('.selectionLabel').on('click', function () {
        $('.nextBtn').removeAttr('disabled');
        $('.selectionLabel').css("background-color", "white");
        $(this).css("background-color", "rgba(211, 140, 106, 0.3)");
    });
}

orderApp.orderSummary = () => {
    $('#modelSelection input').on('click', function () {
        orderApp.chosenStyle = $(this).val();
        $('#selectedStyle').html(`${orderApp.chosenStyle}`)
    });

    $('#upperSelection input').on('click', function () {
        orderApp.chosenUpper = $(this).val();
        $('#selectedUpper').html(`${orderApp.chosenUpper}`)
    });

    $('#topCoverSelection input').on('click', function () {
        orderApp.chosenTopCover = $(this).val();
        $('#selectedTopCover').html(`${orderApp.chosenTopCover}`)
    });

    $('#midlayerSelection input').on('click', function () {
        orderApp.chosenMidlayer = $(this).val();
        $('#selectedMidlayer').html(`${orderApp.chosenMidlayer}`)
    });

    $('#blankSelection input').on('click', function () {
        orderApp.chosenBlank = $(this).val();
        $('#selectedBlank').html(`${orderApp.chosenBlank}`)
    });

    $('#soleSelection input').on('click', function () {
        orderApp.chosenSole = $(this).val();
        $('#selectedSole').html(`${orderApp.chosenSole}`)
    });
}

orderApp.preview = () => {
    
    $('#modelSelection').on('click', function() {
        $('#modelPreview').html(`<img src="./assets/Men/${orderApp.chosenStyle}.png" alt="">`);
    });

    $('#upperSelection').on('click', function () {
        $('#modelPreview').html(`<img src="./assets/Men/${orderApp.chosenStyle}/${orderApp.chosenUpper}/Black EVA.png" alt="">`);

        // if an image is jpg it won't work
    });

    $('#blankSelection').on('click', function () {
        $('#modelPreview').html(`<img src="./assets/Men/${orderApp.chosenStyle}/${orderApp.chosenUpper}/${orderApp.chosenBlank}.png" alt="">`);

        console.log();
    });

}

orderApp.init = () => {
    orderApp.choices();    
    orderApp.moveSections();
    orderApp.clearModelChoice();
    orderApp.upperDisplay();
    orderApp.highlightSelection();
    orderApp.preview();
    orderApp.orderSummary();
};

$(function () {
    orderApp.init();
});