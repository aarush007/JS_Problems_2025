Array.prototype.myFilter = function (callback, thisArg) {
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    const result = [];

    for (let i = 0; i < this.length; i++) {
        if (i in this) {
            if (callback.call(thisArg, this[i], i, this)) {
                result.push(this[i]);
            }
        }
    }

    return result;
}

const numbers = [1, 2, 3, 4, 5];
const even = numbers.filter((num) => num % 2 === 0);
console.log(even);