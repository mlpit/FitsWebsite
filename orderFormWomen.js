const orderApp = {};

orderApp.womenChoices = {
    "model": {
        1: {
            "name":"Teenslipper",
            "imageUrl": "./assets/Womens/Teenslipper.png"
        }, 
        // WHAT UPPERS ARE AVAILABLE WITH VEGAN VERSION??
        // 2: {
        //     "name":"Teenslipper Vegan",
        //     "imageUrl": "./assets/Ladies/Teenslipper_vegan/therapeutische_teenslipper_zwartveganleer_1.png"
        // },
        3: {
            "name":"Tweeband Sandal",
            "imageUrl": "./assets/Womens/Tweeband Sandal.png"
        },
        4: {
            "name":"Drieband Sandal",
            "imageUrl": "./assets/Womens/Drieband Sandal.png"
        } 
    },
    // some upper images names doesn't match excel sheet
    "upper": {
        1: {
            "name":"Anthracite Leather",
            "imageUrl": "./assets/Uppers/Women/leather_anthra.png",
            "availableModel": ["Teenslipper", "Teenslipper Vegan", "Tweeband Sandal",  "Drieband Sandal"]
        }, 
        2: {
            "name":"Anthracite Snake Leather",
            "imageUrl": "./assets/Uppers/Women/pattern_anthrasnake.png",
            "availableModel": ["Teenslipper", "Tweeband Sandal"]
        },
        3: {
            "name":"Black Leather",
            "imageUrl": "./assets/Uppers/Women/leather_black.png",
            "availableModel": ["Teenslipper", "Tweeband Sandal",  "Drieband Sandal"]
        },
        18: {
            "name": "Blue Leather",
            "imageUrl": "./assets/Uppers/Women/leather_blue.png",
            "availableModel": ["Teenslipper", "Drieband Sandal"]
        },
        4: {
            "name":"Blue Fantasy Leather",
            "imageUrl": "./assets/Uppers/Women/pattern_bluefantasy.png",
            "availableModel": ["Teenslipper", "Tweeband Sandal"]
        },
        5: {
            "name":"Gold Leather",
            "imageUrl": "./assets/Uppers/Women/leather_goldflower.png",
            "availableModel": ["Teenslipper"]
        },
        6: {
            "name":"Salmon Leather",
            "imageUrl": "./assets/Uppers/Women/leather_salmon.png",
            "availableModel": ["Teenslipper"]
        },
        7: {
            "name":"White Leather",
            "imageUrl": "./assets/Uppers/Women/leather_white.png",
            "availableModel": ["Teenslipper", "Tweeband Sandal",  "Drieband Sandal"]
        },
        // 8: {
        //     "name":"Linen Pattern Black",
        //     "imageUrl": "./assets/Uppers/Women/linen_black.png",
        //     "availableModel": ["Teenslipper", "Tweeband Sandal"]
        // },
        9: {
            "name":"Beige Nubuck",
            "imageUrl": "./assets/Uppers/Women/nubuck_beige.png",
            "availableModel": ["Drieband Sandal"]
        },
        10: {
            "name":"Beige Snake Nubuck",
            "imageUrl": "./assets/Uppers/Women/nubuck_beigesnake.png",
            "availableModel": ["Teenslipper"]
        },
        11: {
            "name":"Grey Nubuck",
            "imageUrl": "./assets/Uppers/Women/nubuck_grey.png",
            "availableModel": ["Drieband Sandal"]
        },
        12: {
            "name":"Grey Snake Nubuck",
            "imageUrl": "./assets/Uppers/Women/nubuck_greysnake.png",
            "availableModel": ["Teenslipper"]
        },
        13: {
            "name":"Red Nubuck",
            "imageUrl": "./assets/Uppers/Women/nubuck_red.png",
            "availableModel": ["Drieband Sandal"]
        },
        14: {
            "name":"Red Miami Nubuck",
            "imageUrl": "./assets/Uppers/Women/nubuck_redmiami.png",
            "availableModel": ["Teenslipper", "Tweeband Sandal"]
        },
        15: {
            "name":"Yellow Miami Nubuck",
            "imageUrl": "./assets/Uppers/Women/nubuck_yellowmiami.png",
            "availableModel": ["Teenslipper"]
        },
        16: {
            "name":"Silver Print Leather",
            "imageUrl": "./assets/Uppers/Women/print_silver.png",
            "availableModel": ["Teenslipper"]
        },
        17: {
            "name":"Flower Print Leather",
            "imageUrl": "./assets/Uppers/Women/print_flower.png",
            "availableModel": ["Teenslipper"]
        }
    }
}

orderApp.generalChoices = {
    "topCover": {
        1: {
            "name":"Black Flexline",
            "imageUrl": "./assets/Top_Cover/Black Flexline.png"
        },
        2: {
            "name":"Beige Leather",
            "imageUrl": "./assets/Top_Cover/Beige Leather.png"
        },
        3: {
            "name":"Brown Leather",
            "imageUrl": "./assets/Top_Cover/Brown Leather.png"
        },
        4: {
            "name":"Grey Leather",
            "imageUrl": "./assets/Top_Cover/Grey Leather.png"
        },
        5: {
            "name":"Beige Microfiber",
            "imageUrl": "./assets/Top_Cover/Beige Microfiber.png"
        },
        6: {
            "name":"Black Microfiber",
            "imageUrl": "./assets/Top_Cover/Black Microfiber.png"
        },
        7: {
            "name":"Brown Microfiber",
            "imageUrl": "./assets/Top_Cover/Brown Microfiber.png"
        },
        8: {
            "name":"Grey Microfiber",
            "imageUrl": "./assets/Top_Cover/Grey Microfiber.png"
        },
        9: {
            "name":"Beige Suede",
            "imageUrl": "./assets/Top_Cover/Beige Suede.png"
        },
        10: {
            "name":"Black Suede",
            "imageUrl": "./assets/Top_Cover/Black Suede.png"
        },
        11: {
            "name":"Brown Suede",
            "imageUrl": "./assets/Top_Cover/Brown Suede.png"
        },
        12: {
            "name":"Grey Suede",
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
    const models = Object.values(orderApp.womenChoices.model);

    models.forEach(model => {
        $('#modelSelection').append(`
            <label class="selectionLabel">${model.name}
                <input type="radio" name="model" value="${model.name}">
                <img class="radioImage" src="${model.imageUrl}" alt="${model.name} sandal">
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

        const uppers = Object.values(orderApp.womenChoices.upper);
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
        $('.selectionLabel').css({ "border": "3px solid transparent", "box-shadow": "2px 2px 5px rgba(0,0,0, 0)" });
        $(this).css({ "border": "3px solid #c31727", "box-shadow": "2px 2px 5px rgba(0,0,0, 0.2)"});
    });
}

orderApp.orderSummary = () => {
    $('#modelSelection input').on('click', function () {
        orderApp.chosenStyle = $(this).val();
        $('#modelPreview').html(`
        <h3>${orderApp.chosenStyle}</h3>
        <img src="./assets/Womens/${orderApp.chosenStyle}.png" alt="">
        `);
        $('#selectedStyle').html(`${orderApp.chosenStyle}`);
    });

    $('#upperSelection input').on('click', function () {
        orderApp.chosenUpper = $(this).val();
        $('#modelPreview').html(`
        <h3>${orderApp.chosenStyle}</h3>
        <p>Upper: ${orderApp.chosenUpper}</p>
        <img src="./assets/Womens/${orderApp.chosenStyle}/${orderApp.chosenUpper}/Black EVA.png" alt="">
        `);
        $('#selectedUpper').html(`${orderApp.chosenUpper}`);
    });

    $('#topCoverSelection input').on('click', function () {
        orderApp.chosenTopCover = $(this).val();
        $('#topCoverHidden').show();
        $('#modelPreview').html(`
        <h3>${orderApp.chosenStyle}</h3>
        <p>Upper: ${orderApp.chosenUpper}</p>
        <p>Top Cover: ${orderApp.chosenTopCover} (not in preview)</p>
        <img src="./assets/Womens/${orderApp.chosenStyle}/${orderApp.chosenUpper}/Black EVA.png" alt="">
        `);
        $('#selectedTopCover').html(`${orderApp.chosenTopCover}`);
        $('#topCoverSummary').html(`
        <h3>${orderApp.chosenTopCover} Top Cover</h3>
        <img src="./assets/Top_Cover/${orderApp.chosenTopCover}.png" alt="${orderApp.chosenTopCover} color sample">
        `);
    });

    $('#midlayerSelection input').on('click', function () {
        orderApp.chosenMidlayer = $(this).val();
        $('#modelPreview').html(`
        <h3>${orderApp.chosenStyle}</h3>
        <p>Upper: ${orderApp.chosenUpper}</p>
        <p>Top Cover: ${orderApp.chosenTopCover} (not in preview)</p>
        <p>Midlayer: ${orderApp.chosenMidlayer}</p>
        <img src="./assets/Womens/${orderApp.chosenStyle}/${orderApp.chosenUpper}/Black EVA.png" alt="">
        `);
        $('#selectedMidlayer').html(`${orderApp.chosenMidlayer}`)
    });

    $('input[value="Black Cushion 3mm"]').on('click', function () {
        $('#midlayerHidden').show();
    });

    $('#blankSelection input').on('click', function () {
        orderApp.chosenBlank = $(this).val();
        $('#modelPreview').html(`
        <h3>${orderApp.chosenStyle}</h3>
        <p>Upper: ${orderApp.chosenUpper}</p>
        <p>Top Cover: ${orderApp.chosenTopCover} (not in preview)</p>
        <p>Midlayer: ${orderApp.chosenMidlayer}</p>
        <p>Blank: ${orderApp.chosenBlank}</p>
        <img src="./assets/Womens/${orderApp.chosenStyle}/${orderApp.chosenUpper}/${orderApp.chosenBlank}.png" alt="">
        `);
        $('#selectedBlank').html(`${orderApp.chosenBlank}`);
    });

    $('#soleSelection input').on('click', function () {
        orderApp.chosenSole = $(this).val();
        $('#bottomSoleHidden').show();
        $('#modelPreview').html(`
        <h3>${orderApp.chosenStyle}</h3>
        <p>Upper: ${orderApp.chosenUpper}</p>
        <p>Top Cover: ${orderApp.chosenTopCover} (not in preview)</p>
        <p>Midlayer: ${orderApp.chosenMidlayer}</p>
        <p>Blank: ${orderApp.chosenBlank}</p>
        <p>Sole: ${orderApp.chosenSole} (not in preview)</p>
        <img src="./assets/Womens/${orderApp.chosenStyle}/${orderApp.chosenUpper}/${orderApp.chosenBlank}.png" alt="">
        `);
        $('#selectedSole').html(`${orderApp.chosenSole}`);
        $('#soleSummary').html(`
        <h3>${orderApp.chosenSole} Top Cover</h3>
        <img src="./assets/Bottom_Sole/${orderApp.chosenSole}.png" alt="${orderApp.chosenSole} color sample">
        `);
    });
}

orderApp.startOver = () => {
    $('.startOverBtn').on('click', function() {
        location.reload();
    });
}

orderApp.readyBtn = () => {
    $('#readyBtn').on('click', function () {
        $('#modelPreview').html(`
        <img src="./assets/Womens/${orderApp.chosenStyle}/${orderApp.chosenUpper}/${orderApp.chosenBlank}.png" alt="">
        `);
    });
}

orderApp.init = () => {
    orderApp.choices();
    orderApp.moveSections();
    orderApp.startOver();
    orderApp.clearModelChoice();
    orderApp.upperDisplay();
    orderApp.highlightSelection();
    orderApp.orderSummary();
    orderApp.readyBtn();
};

$(function () {
    orderApp.init();
});