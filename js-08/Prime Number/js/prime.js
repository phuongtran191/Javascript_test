"use strict";

var $ = function(id) {
    return document.getElementById(id);
};

// check the number is Prime or Not ?
function checkPrime(number) {
    var check = 1;
    for (var i=2; i<number; i++) {
        if (number % i == 0 && number > 2) {
            check = 0;
        }
    }
    return check;
};

// List of Prime from 1 to N
function listPrime(number) {
    var prime = "";
    for (var i=2; i<number; i++) {
        if (checkPrime(i) == 1) {
            prime += i + " ";
        }
    }
    return prime;
}

// Count the number of Prime list from 1 to N
function countPrime(number) {
    var count = 0;
    for (var i=2; i<number; i++) {
        if (checkPrime(i) == 1) {
            count++;
        }
    }
    return count;
}

// Main function to perform when click button
function validateEntry() {
    var entry1_OK;
    var number = parseInt($("number").value);

    // validate "Enter number" input
    if (number < 0 || isNaN(number)) {
        $("number-error").firstChild.nodeValue = 'Please insert the number greater than 0';
    } else {
        $("number-error").firstChild.nodeValue = '';
        entry1_OK = true;
    }
    
    // print value for Prime
    if (entry1_OK == true) {
        $("count").value = countPrime(number);
        $("prime-list").value = listPrime(number);
        $("date-time").firstChild.nodeValue = stringDate();
    }
}

// set time comment for p element
function stringDate() {
    var myDate = "";
    var myTime = "";
    var pString = "";
    var day, month, year;
    var hour, minute;
    var today = new Date();
    day = today.getDate().toString();
    if (today.getDate() < 10) { day = "0" + day; }
    month = (today.getMonth() + 1).toString();
    if (today.getMonth() < 10) { month = "0" + month; }
    year = today.getFullYear().toString();
    hour = today.getHours().toString();
    if (today.getHours() < 10) { hour = "0" + hour; }
    minute = today.getMinutes().toString();
    if (today.getMinutes() < 10) { minute = "0" + minute; }
    myDate = day + "/" + month + "/" + year;
    myTime = hour + ":" + minute;
    pString = pString.concat("Today is " + myDate + " at " + myTime + ".");
    return pString;
}


// clear all entry
function clearValue() {
    $("form").reset();
    $("number-error").firstChild.nodeValue = '*';
    $("date-time").firstChild.nodeValue = "";
    $("number").focus();
};

window.onload = function() {
    $("calculate").onclick = validateEntry;
    $("clear-entries").onclick = clearValue;
    $("number").focus();
};