function sum(arr) {
    let sum = 0;

    for (num of arr){
        let number = Number(num);
        sum += number
    }

    return sum
}

Module.export = sum;
