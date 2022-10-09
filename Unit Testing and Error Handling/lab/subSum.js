function solve(numbers, start, end) {
    if (!Array.isArray(numbers)){
        return NaN;
    }

    // ако стартовият индекс е по-малък от 0, ще вземе 0, ако е по голям, ще вземе по голямата стойност;
    let startIndex = Math.max(start, 0);
    // трябва да вземем дължината на списъка, понеже крайният индекс всъщност е дължината -1;

    let endIndex = Math.min(end, numbers.length -1);

    let subNumbers = numbers.slice(startIndex, endIndex + 1);
    let sum = subNumbers.reduce((a,x) => a + Number(x), 0);

    return sum;

}


solve([10, 20, 30, 40, 50, 60], 3, 300)