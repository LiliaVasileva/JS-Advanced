function greatestCommonDivisor(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) {
        return false;
    }
    x = Math.abs(x);
    y = Math.abs(y);
    while (y) {
        let temp = y;
        y = x % y;
        x = temp;
    }
    return x;
}

console.log(greatestCommonDivisor(15, 5))