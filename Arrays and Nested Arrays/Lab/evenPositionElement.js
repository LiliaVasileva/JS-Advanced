function solve(arr) {
    let result = '';
    for (let i = 0; i < arr.length; i+=2) {
        result += arr[i];
        result += ' ';
    }
    console.log(result);
}

solve([1, 2, 3, 4, 5, 6]);