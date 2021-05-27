"use strict";

var $ = function(id) {
    return document.getElementById(id);
};

var milesValue = parseFloat($("miles"));
var gallonsValue = parseFloat($("gallons"));

function calculateMPG(milesValue, gallonsValue) {
    var mpg;
    mpg = (milesValue/gallonsValue).toFixed(1);
    return mpg;
};
function validateEntry() {
    var entry1_OK;
    var entry2_OK;

    // validate input 1
    if (milesValue < 0 || isNaN(milesValue)) {
        $("mile-entry").firstChild.nodeValue = 'Please enter the valid number';
    } else if (!isNaN(milesValue)) {
        $("mile-entry").firstChild.nodeValue = '';
        entry1_OK = true;
    }

    // validate input 2
    if (gallonsValue < 0 || isNaN(gallonsValue)) {
        $("gallon-entry").firstChild.nodeValue = 'Please enter the valid number';
    } else {
        $("gallon-entry").firstChild.nodeValue = '';
        entry2_OK = true;
    }
    
    if ((entry1_OK && entry2_OK) == true) {
        $("mpg").value = calculateMPG(milesValue, gallonsValue);
    }
};

function clearValue() {
    $("miles").value = '';
    $("gallons").value = '';
    $("mpg").value = '';
    $("mile-entry").firstChild.nodeValue = '*';
    $("gallon-entry").firstChild.nodeValue = '*';
};

window.onload = function() {
    $("calculate").onclick = validateEntry;
    $("clear-entries").onclick = clearValue;
    $("miles").focus();
};
