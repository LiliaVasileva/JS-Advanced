function solve(arr) {
    let result = arr;
    result.sort((a, b) => a-b);
    let firstNum = result[0];
    let secondNum = result[1];
    return `${firstNum}, ${secondNum}`
}