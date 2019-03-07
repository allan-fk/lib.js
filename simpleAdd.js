const vardump = require("@smartankur4u/vardump");

var test = 12;
function simpleAdd(nb) {
    if (nb !== 0)
        return nb + simpleAdd(nb-1);
    else
        return nb; 
}

vardump(simpleAdd(test));