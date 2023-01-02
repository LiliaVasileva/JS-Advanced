function solve(num1, num2, str){
    let firstNum = num1;
    let secondNum = num2;
    let operator = str;
    let result;

    if (operator == '+'){
        result = firstNum + secondNum;
    }
    else if (operator == '-'){
        result = firstNum - secondNum;
    }
    else if (operator == '*'){
        result = firstNum * secondNum;
    }
    else if (operator == '/'){
        result = firstNum / secondNum;
    }
    else if (operator == '%'){
        result = firstNum % secondNum;
    }
    else if (operator == '**'){
        result = firstNum ** secondNum;
    }
    console.log(result)
}

solve(3, 5.5, '*');