function stringLenght(inputOne, inputTwo, inputThree) {
    let textOneLength = inputOne.length;
    let textTwoLength = inputTwo.length;
    let textThreeLength  = inputThree.length;
    let sumAllText = textOneLength + textTwoLength + textThreeLength;
    console.log(sumAllText)
    console.log(Math.floor(sumAllText / 3))
}

stringLenght('chocolate', 'ice cream', 'cake')