"use strict";

var $ = function(id) {
    return document.getElementById(id);
};

// determine Discount percent
function discountPercent() {
    var percent, subtotal;
    switch (type) {
        case "General Customer":
            if (subtotal < 100) {
                percent = 0;
            } else if (subtotal >= 100 && subtotal < 250) {
                percent = 10;
            } else if (subtotal >= 250 && subtotal < 500) {
                percent = 25;
            } else if (subtotal > 500) {
                percent = 30;
            }
            break;
        case "Golden Customer":
            percent = 35;
            break;
        case "Platinum Customer":
            percent = (subtotal < 500) ? 40 : 50;
            break;
    }
    return percent;
}

// Main function
function validateEntry() {
    var entry1_ok = false;
    var entry2_ok = false;
    var type = $("type").value;
    var subtotal = parseFloat($("subtotal").value);

    // validate 2 input
    if (type == "") {
        $("type-error").firstChild.nodeValue = "Please select an option below";
    } else {
        $("type-error").firstChild.nodeValue = "";
        entry1_ok = true;
    }

    if (subtotal < 0 || isNaN(subtotal)) {
        $("subtotal-error").firstChild.nodeValue = "Please enter the number greater than 0";
    } else {
        $("subtotal-error").firstChild.nodeValue = "";
        entry2_ok = true;
    }

    // call the main function
    if ((entry1_ok && entry2_ok) == true) {
        var percent, amount, total;
        percent = discountPercent();
        amount = subtotal*percent/100;
        total = subtotal - amount;
        $("percent").value = discountPercent();
        $("amount").value = amount;
        $("total").value = total;
    }
}

// random entry
function randomEntry() {
    var random;
    var max = 500000;
        random = Math.random();
        random = Math.floor(random * max);
        random = random + 1;
    $("subtotal").value = random;
}

// clear all entry
function clearValue() {
    $("form").reset();
    $("type-error").firstChild.nodeValue = '*';
    $("subtotal-error").firstChild.nodeValue = '*';
    $("type").focus();
};

window.onload = function() {
    $("calculate").onclick = validateEntry;
    $("random-value").onclick = randomEntry;
    $("clear-entries").onclick = clearValue;
    $("type").focus();
};