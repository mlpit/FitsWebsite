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
            "name": "Black Flexline",
            "imageUrl": "./assets/Top_Cover/Black Flexline.png"
        },
        2: {
            "name": "Beige Leather",
            "imageUrl": "./assets/Top_Cover/Beige Leather.png"
        },
        3: {
            "name": "Brown Leather",
            "imageUrl": "./assets/Top_Cover/Brown Leather.png"
        },
        4: {
            "name": "Grey Leather",
            "imageUrl": "./assets/Top_Cover/Grey Leather.png"
        },
        5: {
            "name": "Beige Microfiber",
            "imageUrl": "./assets/Top_Cover/Beige Microfiber.png"
        },
        6: {
            "name": "Black Microfiber",
            "imageUrl": "./assets/Top_Cover/Black Microfiber.png"
        },
        7: {
            "name": "Brown Microfiber",
            "imageUrl": "./assets/Top_Cover/Brown Microfiber.png"
        },
        8: {
            "name": "Grey Microfiber",
            "imageUrl": "./assets/Top_Cover/Grey Microfiber.png"
        },
        9: {
            "name": "Beige Suede",
            "imageUrl": "./assets/Top_Cover/Beige Suede.png"
        },
        10: {
            "name": "Black Suede",
            "imageUrl": "./assets/Top_Cover/Black Suede.png"
        },
        11: {
            "name": "Brown Suede",
            "imageUrl": "./assets/Top_Cover/Brown Suede.png"
        },
        12: {
            "name": "Grey Suede",
            "imageUrl": "./assets/Top_Cover/Grey Suede.png"
        }
    },
    "midlayer": {
        1: {
            "name":"None",
            "imageUrl": "./assets/Cushion/none.jpg"
        },
        2: {
            "name":"Black Cushion 3mm",
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
                <img class="radioImage" src="${midlayer.imageUrl}" alt="${midlayer.name} color sample">
            </label>
        `);
    });

    const blanks = Object.values(orderApp.generalChoices.blank);

    blanks.forEach(blank => {
        $('#blankSelection').append(`
            <label class="selectionLabel">${blank.name}
                <input type="radio" name="upper" value="${blank.name}">
                <img class="radioImage" src="${blank.imageUrl}" alt="${blank.name} color sample">
            </label>
        `);
    });

    const bottomSoles = Object.values(orderApp.generalChoices.bottomSole);

    bottomSoles.forEach(bottomSole => {
        $('#soleSelection').append(`
            <label class="selectionLabel">${bottomSole.name}
                <input type="radio" name="upper" value="${bottomSole.name}">
                <img class="radioImage" src="${bottomSole.imageUrl}" alt="${bottomSole.name} color sample">
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
                    <img class="radioImage" src="${upper.imageUrl}" alt="${upper.name} color sample">
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
            $('.hiddenText').hide();
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
        if ($("#orderSections section:visible").prev().length != 0) {
            $("#orderSections section:visible").prev().show().next().hide();
            $('.hiddenText').hide();
        }
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
        $('#modelPreview').html(`<img src="./assets/Men/${orderApp.chosenStyle}.png" alt="">`);
        $('#selectedStyle').html(`${orderApp.chosenStyle}`)
    });

    $('#upperSelection input').on('click', function () {
        orderApp.chosenUpper = $(this).val();
        $('#modelPreview').html(`<img src="./assets/Men/${orderApp.chosenStyle}/${orderApp.chosenUpper}/Black EVA.png" alt="">`);
        $('#selectedUpper').html(`${orderApp.chosenUpper}`)
    });

    $('#topCoverSelection input').on('click', function () {
        orderApp.chosenTopCover = $(this).val();
        $('#topCoverHidden').show();
        $('#selectedTopCover').html(`${orderApp.chosenTopCover}`);
        $('#topCoverSummary').html(`
        <h3>${orderApp.chosenTopCover} Top Cover</h3>
        <img src="./assets/Top_Cover/${orderApp.chosenTopCover}.png" alt="${orderApp.chosenTopCover} color sample">
        `);
    });

    $('#midlayerSelection input').on('click', function () {
        orderApp.chosenMidlayer = $(this).val();
        $('#selectedMidlayer').html(`${orderApp.chosenMidlayer}`)
    });

    $('input[value="Black Cushion 3mm"]').on('click', function () {
        $('#midlayerHidden').show();
    });

    $('#blankSelection input').on('click', function () {
        orderApp.chosenBlank = $(this).val();
        $('#modelPreview').html(`<img src="./assets/Men/${orderApp.chosenStyle}/${orderApp.chosenUpper}/${orderApp.chosenBlank}.png" alt="">`);
        $('#selectedBlank').html(`${orderApp.chosenBlank}`)
    });

    $('#soleSelection input').on('click', function () {
        orderApp.chosenSole = $(this).val();
        $('#bottomSoleHidden').show();
        $('#selectedSole').html(`${orderApp.chosenSole}`);
        $('#soleSummary').html(`
        <h3>${orderApp.chosenSole} Sole</h3>
        <img src="./assets/Bottom_Sole/${orderApp.chosenSole}.png" alt="${orderApp.chosenSole} color sample">
        `);
    });

}


orderApp.init = () => {
    orderApp.choices();    
    orderApp.moveSections();
    orderApp.clearModelChoice();
    orderApp.upperDisplay();
    orderApp.highlightSelection();
    orderApp.orderSummary();
};

$(function () {
    orderApp.init();
});