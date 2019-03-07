const vardump = require("@smartankur4u/vardump");

var test = 8;

function firstFactorial(nb) {
    var fac = 1;
    if (nb == 0)
        return 1;
    while (1 != nb) {
        fac = fac * nb;
        nb--;
    }
    return(fac);
}

vardump(firstFactorial(test));