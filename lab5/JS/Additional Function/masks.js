"use strict";
import "../libs/jquery/jquery.maskedinput.js";

$(function () {
    $("#phone").mask("+38(099) 999-9999");
    $("#full-name").bind("change keyup input click", function () {
        if (this.value.match(/[^0-9\s]/g)) {
            this.value = this.value.replace(/[^0-9\s]/g, '');
        }
    });
});