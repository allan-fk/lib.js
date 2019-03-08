function sort2d(array) {
    var tab = []
    var val = []
    array.map((v, i) => {
        val.push(i, v),
            tab.push(val),
            val = []
    })
    sort = tab.sort(function (a, b) {
        return a[1] - b[1];
    });
    return (sort);
}