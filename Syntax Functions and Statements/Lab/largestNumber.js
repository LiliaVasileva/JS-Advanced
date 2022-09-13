function largestNumber (numberOne, numberTwo, numberThree){
    let result;
    let numOne = numberOne;
    let numTwo = numberTwo;
    let numThree = numberThree;

    if (numOne >= numTwo && numOne >= numThree) {
        result = numOne;
    }
    else if (numTwo >= numOne && numTwo >= numThree){
        result = numTwo;
    }
    else {

        result = numThree;
    }
    console.log(`The largest number is ${result}.`)
    }
largestNumber(5, -3, 16)

largestNumber(9, 11, 18)

