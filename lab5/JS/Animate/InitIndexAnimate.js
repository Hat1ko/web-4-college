"use strict";
import {animationForPhoto} from "./AnimatePhoto.js";
import {ColorList} from "./data/ColorList.js";
import {addFunctionForSlider} from "../Additional Function/Slider.js";

let colorList = new ColorList();

$(document).ready(function () {
    $("#btn1").css({backgroundColor: "#000"});
    animationForPhoto();
    swapColor();
    addFunctionForSlider();
});

function swapColor() {
    $("p").animate({color: colorList.getNextColor()}, 1000,);
    window.setTimeout(function () {
        swapColor()
    }, 1000);
}

