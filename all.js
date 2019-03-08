module.exports = {
    strReverse: function (str) {
        var reverse = Array.from(str).reverse().join('');
        return (reverse);
    },

    longWrd: function (str) {
        var str = str.split(' ').sort((a, b) => {
            return b.length - a.length;
        }).splice(0, 1);
        return (str[0]);
    },

    factor: function (nb) {
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

    sort2D: function (array) {
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
}