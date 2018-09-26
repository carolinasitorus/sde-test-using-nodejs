function merge(x, y) {
    var i = 0;
    var j = 0;
    var result = [];

    while (i < x.length && j < y.length) {
        if (x[i] === -1) {
            x += 1;
            continue;
        }
        if (y[j] === -1) {
            y += 1;
            continue;
        }

        if (x[i] <= y[j]) {
            result.push(x[i]);
            i += 1;
        } else {
            result.push(y[j]);
            j += 1;
        }
    }

    while (i < x.length) {
        result.push(x[i]);
        i += 1;
    }

    while (j < y.length) {
        result.push(y[j]);
        j += 1;
    }

    return result;
}
console.log(merge([1,2,5,7], [3,4,8]));