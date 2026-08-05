Array.prototype.myMap = function (callback, thisArg) {
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    const result = [];

    for (let i = 0; i < this.length; i++) {
        if (i in this) {
            result[i] = callback.call(thisArg, this[i], i, this);
        }
    }

    return result;
}

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.myMap((num) => num * 2);
console.log(doubled);