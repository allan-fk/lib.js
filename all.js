module.exports = {
    strRev: function (str) {
        var reverse = Array.from(str).reverse().join('');
        return (reverse);
    },

    longWrd: function (str) {
        var str = str.split(' ').sort((a, b) => {
            return b.length - a.length;
        }).splice(0, 1);
        return (str[0]);
    },

    fact: function (nb) {
        var fac = 1;
        if (nb == 0)
            return 1;
        while (1 != nb) {
            fac = fac * nb;
            nb--;
        }
        return (fac);
    },

    simpleAdd: function (nb) {
        if (nb !== 0)
            return nb + simpleAdd(nb - 1);
        else
            return nb;
    },

    sort2d: function (array) {
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
    },
    arrRev: function (arr, start, end) {
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
    /*toast: function (str) {
        console.log(module.exports.strReverse(str));
    }*/
};

// module.exports.toast('Toast la vie');