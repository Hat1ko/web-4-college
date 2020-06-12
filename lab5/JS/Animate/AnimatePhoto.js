"use strict";
let i = true;

export function animationForPhoto() {
    $(".mainImg").click(function () {
        if (i === true) {
            $(this).toggleClass("animate");
            i = false;
        } else {
            $(this).removeClass("animate");
            i = true;
        }
    });

    $(".additionalImg").hover(function () {
        $(this).toggleClass("animate");
    }, function () {
        $(this).removeClass("animate");
    });
}