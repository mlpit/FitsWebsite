const orderApp = {};

orderApp.menChoices = {
    "model": {
        1: {
            "name":"Thong",
            "imageUrl": "./assets/Mens/Thong.png"
        }, 
        2: {
            "name":"Twoband",
            "imageUrl": "./assets/Mens/Twoband.png"
        },
        3: {
            "name":"Threeband",
            "imageUrl": "./assets/Mens/Threeband.png"
        } 
    },
    "upper": {
        1: {
            "name":"Black Horse Leather",
            "imageUrl": "./assets/Uppers/Men/horse_black.png",
            "availableModel": ["Thong", "Twoband", "Threeband"]
        }, 
        2: {
            "name":"Brown Horse Leather",
            "imageUrl": "./assets/Uppers/Men/horse_brown.png",
            "availableModel": ["Thong", "Twoband", "Threeband"]
        },
        3: {
            "name":"Black Leather",
            "imageUrl": "./assets/Uppers/Men/leather_black.png",
            "availableModel": ["Thong", "Twoband", "Threeband"]
        },
        4: {
            "name":"Brown Leather",
            "imageUrl": "./assets/Uppers/Men/leather_brown.png",
            "availableModel": ["Thong", "Twoband", "Threeband"]
        },
        5: {
            "name":"Cognac Leather",
            "imageUrl": "./assets/Uppers/Men/leather_cognac.png",
            "availableModel": ["Thong", "Twoband", "Threeband"]
        },
        6: {
            "name":"Blue Leather",
            "imageUrl": "./assets/Uppers/Men/leather_darkblue.png",
            "availableModel": ["Thong", "Twoband", "Threeband"]
        },
        7: {
            "name":"Grey Leather",
            "imageUrl": "./assets/Uppers/Men/leather_grey.png",
            "availableModel": ["Thong", "Twoband", "Threeband"]
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
                <img class="radioImage modelImage" src="${model.imageUrl}" alt="image of ${model.name} style">
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
        $('.selectionLabel').css({ "border": "3px solid transparent", "box-shadow": "2px 2px 5px rgba(0,0,0, 0)" });
        $(this).css({ "border": "3px solid #c31727", "box-shadow": "2px 2px 5px rgba(0,0,0, 0.2)" });
    });
}

orderApp.orderSummary = () => {
    $('#modelSelection input').on('click', function () {
        orderApp.chosenStyle = $(this).val();

        $('#modelPreview').html(`
        <h3>Mens's ${orderApp.chosenStyle} Sandal</h3>
        <img src="./assets/Mens/${orderApp.chosenStyle}.png" alt="">
        `);
    });

    $('#upperSelection label').on('click', function () {
        orderApp.chosenUpper = $('input', this).val();
        orderApp.chosenUpperUrl = $('img', this).attr('src');

        $('#modelPreview').html(`
        <h3>Men's ${orderApp.chosenStyle} Sandal</h3>
        <p>Upper: ${orderApp.chosenUpper}</p>
        <img src="./assets/Mens/${orderApp.chosenStyle}/${orderApp.chosenUpper}/Black EVA.png" alt="">
        `);

        $('#selectedUpper').html(`
        <p>Upper: ${orderApp.chosenUpper}</p>
        <img class="radioImage" src="${orderApp.chosenUpperUrl}" alt="">
        `);
    });

    $('#topCoverSelection label').on('click', function () {
        orderApp.chosenTopCover = $('input', this).val();
        orderApp.chosenTopCoverUrl = $('img', this).attr('src');

        $('#topCoverHidden').show();

        $('#modelPreview').html(`
        <h3>Men's ${orderApp.chosenStyle} Sandal</h3>
        <p>Upper: ${orderApp.chosenUpper}</p>
        <p>Top Cover: ${orderApp.chosenTopCover} (not in preview)</p>
        <img src="./assets/Mens/${orderApp.chosenStyle}/${orderApp.chosenUpper}/Black EVA.png" alt="">
        `);

        $('#selectedTopCover').html(`
        <p>Top Cover: ${orderApp.chosenTopCover}</p>
        <img class="radioImage" src="${orderApp.chosenTopCoverUrl}" alt="${orderApp.chosenTopCover} color sample">
        `);
    });

    $('#blankSelection label').on('click', function () {
        orderApp.chosenBlank = $('input', this).val();
        orderApp.chosenBlankUrl = $('img', this).attr('src');

        $('#modelPreview').html(`
        <h3>Men's ${orderApp.chosenStyle} Sandal</h3>
        <p>Upper: ${orderApp.chosenUpper}</p>
        <p>Top Cover: ${orderApp.chosenTopCover} (not in preview)</p>
        <p>Foodbed: ${orderApp.chosenBlank}</p>
        <img src="./assets/Mens/${orderApp.chosenStyle}/${orderApp.chosenUpper}/${orderApp.chosenBlank}.png" alt="">
        `);

        $('#selectedBlank').html(`
        <p>Footbed: ${orderApp.chosenBlank}</p>
        <img class="radioImage" src="${orderApp.chosenBlankUrl}" alt="${orderApp.chosenBlank} color sample">
        `);
    });

    $('#soleSelection label').on('click', function () {
        orderApp.chosenSole = $('input', this).val();
        orderApp.chosenSoleUrl = $('img', this).attr('src');

        $('#bottomSoleHidden').show();

        $('#modelPreview').html(`
        <h3>Men's ${orderApp.chosenStyle} Sandal</h3>
        <p>Upper: ${orderApp.chosenUpper}</p>
        <p>Top Cover: ${orderApp.chosenTopCover} (not in preview)</p>
        <p>Footbed: ${orderApp.chosenBlank}</p>
        <p>Sole: ${orderApp.chosenSole} (not in preview)</p>
        <img src="./assets/Mens/${orderApp.chosenStyle}/${orderApp.chosenUpper}/${orderApp.chosenBlank}.png" alt="">
        `);

        $('#selectedSole').html(`
        <p>Bottom Sole: ${orderApp.chosenSole}</p>
        <img class="radioImage" src="${orderApp.chosenSoleUrl}" alt="${orderApp.chosenSole} color sample">
        `);
    });

    $('#midlayerSelection label').on('click', function () {
        orderApp.chosenMidlayer = $('input', this).val();
        orderApp.chosenMidlayerUrl = $('img', this).attr('src');

        $('#selectedMidlayer').html(`
        <p>Extra Cushion: ${orderApp.chosenMidlayer}</p>
        <img class="radioImage" src="${orderApp.chosenMidlayerUrl}" alt="${orderApp.chosenMidlayer} color sample">
        `);
    });

    $('input[value="Black Cushion 3mm"]').on('click', function () {
        $('#midlayerHidden').show();
    });
}

orderApp.startOver = () => {
    $('.startOverBtn').on('click', function () {
        location.reload();
    });
}

orderApp.readyBtn = () => {
    $('#readyBtn').on('click', function () {
        $('#modelPreview').html(`
        <h3>Men's ${orderApp.chosenStyle} Sandal</h3>
        <img src="./assets/Mens/${orderApp.chosenStyle}/${orderApp.chosenUpper}/${orderApp.chosenBlank}.png" alt="">
        <p>Top Cover, Bottom Sole, Extra Cushion not in preview.</p>
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