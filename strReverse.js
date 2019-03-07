const vardump = require("@smartankur4u/vardump");

var test = "I love Paris";

function strReverse(str) {
    var reverse = Array.from(str).reverse().join('');
    return(reverse);
}

vardump(strReverse(test));