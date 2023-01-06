function solve(num1, num2){
    let firstNumber = Number(num1);
    let secondNumber = Number(num2);
    let sum = 0;

    for (let i=firstNumber; i <= secondNumber; i++){
        sum += i;

    }

    return sum
}

solve('-8', '20');