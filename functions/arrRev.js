var test = [-32, 1, 2, 5, 3];

function arrRev(arr, start, end) {
    // 'use strict';
    var newArr = [];

    /* Error Message */
    function errorMes(argv, error) {
        funcName = errorMes.caller.name;
        mess = `In ${funcName} function, '${argv}' argument is too ${error}`;
        return mess;
    }

    /* Start argument conditions*/
    if (start == null) start = 0;
    else if (start < 0) return Error(errorMes("start", "small"));
    else if (start > arr.length - 1) return Error(errorMes("start", "big"));

    /*End argument conditions*/
    if (end == null) end = arr.length - 1;
    else if (end < 0 && end > -Math.abs(arr.length)) end = arr.length + end - 1;
    else if (end < -Math.abs(arr.length)) return Error(errorMes("end", "small"));
    if (end > arr.length - 1) return Error(errorMes("end", "big"));

    /* Reverse */
    for (let i = end; i > start - 1; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}
// console.log(rev(test));

// module.exports = rev;