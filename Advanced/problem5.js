Array.prototype.myReduce = function (callback, initialValue) {
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    let accumulator;
    let startIndex = 0;

    if (arguments.length >= 2) {
        accumulator = initialValue;
    } else {
        while (startIndex < this.length && !(startIndex in this)) {
            startIndex++;
        }

        if (startIndex >= this.length) {
            throw new TypeError('Reduce of empty array with no initial value');
        }

        accumulator = this[startIndex];
        startIndex++;
    }

    for (let i = startIndex; i < this.length; i++) {
        if (i in this) {
            accumulator = callback(accumulator, this[i], i, this);
        }
    }
    return accumulator;
}

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.myReduce((acc, num) => acc + num, 0);
console.log(sum);