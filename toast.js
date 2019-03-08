'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = strReverse;
/*module.exports = {
    strReverse : function(str) {
    var reverse = Array.from(str).reverse().join('');
    return(reverse);
    },
    longWrd : function(str) {
    var str = str.split(' ').sort((a, b) => { 
        return b.length - a.length;
    }).splice(0,1);
    return(str[0]);
    }
}*/

function strReverse(str) {
    var reverse = Array.from(str).reverse().join('');
    return reverse;
}
