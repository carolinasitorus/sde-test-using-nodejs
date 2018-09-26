function merge(x, y) {
    var i = 0;
    var j = 0;
    var result = [];

    while (i < x.length && j < y.length) {
        // Skip negative numbers
        if (x[i] === -1) {
            x += 1;
            continue;
        }
        if (y[j] === -1) {
            y += 1;
            continue;
        }

        // Take the smaller of the two values, and add it to the output.
        // Note: the index (i or j) is only incremented when we use the corresponding value
        if (x[i] <= y[j]) {
            result.push(x[i]);
            i += 1;
        } else {
            result.push(y[j]);
            j += 1;
        }
    }

    // At this point, we have reached the end of one of the two arrays. The remainder of
    // the other array is all larger than what is currently in the output array

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
console.log(merge([1,4,5], [2,3,7]));