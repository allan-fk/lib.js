const vardump = require("@smartankur4u/vardump");
/*
 * var test = [vardump(sort2D(test));
 * console.log(sort2D(test)) => [ [ 5, 5 ],[ 3, 6 ],[ 6, 9 ],[ 4, 10 ],[ 0, 15 ],[ 1, 30 ],[ 2, 30 ] ]
 */
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