function circleArea(radius){
    let radiusType = typeof radius;
    
    if (radiusType !== 'number'){
        console.log(`We can not calculate the circle area, because we receive a ${radiusType}.`)
    }
    else {
        console.log(`${(radius ** 2 * Math.PI).toFixed(2)}`)
    }
}

circleArea(5);