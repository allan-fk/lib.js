const vardump = require("@smartankur4u/vardump");
var test = [15, 30, 30, 6, 10, 5, 9];
function sort2D(array) {
    var tab = []
    var val = []
    array.map((v, i) => {
        val.push(i, v),
        tab.push(val),
        val = []
    })
    sort = tab.sort(function(a,b) {
        return a[1]-b[1];
    });
    return(sort);
}
vardump(sort2D(test));
