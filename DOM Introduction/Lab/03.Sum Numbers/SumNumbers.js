function calc() {
    let firstNumEl = document.getElementById('num1');
    let secondNumEl = document.getElementById('num2');

    let firstNumber = Number(firstNumEl.value);
    let secondNumber = Number(secondNumEl.value);

    let sum = firstNumber + secondNumber
    let resultEl = document.getElementById('sum');
    resultEl.value = sum;

}
