function solve(arr) {
    let firstEl = Number(arr[0]);
    let lastElIndex = arr.length -1
    let lastEl = Number(arr[lastElIndex]);

    return firstEl + lastEl
}

function secondSolution (arr) {
    return(Number(arr.pop()) + Number(arr.shift()))
}


console.log(secondSolution(['1', '3', '6']))