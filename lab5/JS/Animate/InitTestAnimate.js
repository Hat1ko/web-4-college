"use strict";
import {ArraySide} from "./data/ArraySide.js";


let arraySide = new ArraySide();

$(document).ready(function () {
    $("#send-button").click(function () {
        if ($('#year').val() === '' || $('#phone').val() === '' || $('input[name="type"]:checked').val() == null) {
            alert('Введіть дані!!!');
            return false;
        }
        $('#result-text').remove();
        if ($('input[name="type"]:checked').val() !== 'budget') {
            $('#result').append('<p id=\'result-text\'>Вартість навчання складе: ' + parseInt($('#year').val()) * 10000 + '</p>');
        } else {
            $('#result').append('<p id=\'result-text\'>Вітаємо, ви прийняті на безкоштовну основу</p>');
        }
        $(this).animate(arraySide.nextSide, "fast");
        return false;
    });
});