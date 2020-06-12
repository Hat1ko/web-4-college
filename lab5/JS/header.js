"use strict";

import {ArrayFontSize} from "./Animate/data/ArrayFontSize.js";

const headerHTML = "<ul id=\"menu\">\n" +
    "        <a href=\"index.html\">\n" +
    "            <li id=\"home\">Home</li>\n" +
    "        </a>\n" +
    "        <a href='#'>\n" +
    "            <li id=\"myMenu\">Menu\n" +
    "                <ul>\n" +
    "                    <a href='#'>\n" +
    "                        <li id=\"test1\">test1</li>\n" +
    "                    </a>\n" +
    "                    <a href='#'>\n" +
    "                        <li id=\"test2\">test2</li>\n" +
    "                    </a>\n" +
    "                </ul>\n" +
    "            </li>\n" +
    "        </a>\n" +
    "        <a href=\"test.html\">\n" +
    "            <li id=\"test\">Test</li>\n" +
    "        </a>\n" +
    "    </ul>"

let arrayFontSize = new ArrayFontSize();

$(document).ready(function () {
    $("header").append(headerHTML);
    $("#menu").menu();
    swapFontSize();
});


function swapFontSize() {
    $("#home,#test,#menu").animate(arrayFontSize.fontSize, 500);
    window.setTimeout(function () {
        swapFontSize()
    }, 500);
}