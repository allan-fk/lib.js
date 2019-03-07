const vardump = require("@smartankur4u/vardump");

var test = "The quick brown fox jumped over the lazy dog";

function longestWord(str) {
    var str = str.split(' ').sort((a, b) => { 
        return b.length - a.length;
    }).splice(0,1);
    return(str[0]);
}

vardump(longestWord(test));