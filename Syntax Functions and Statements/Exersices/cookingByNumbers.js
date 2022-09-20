function cookingByNumber(...params) {
    let number = params.shift()
    for (item of params){
        if (item === 'chop'){
            number = number / 2
            console.log(number)
        }
        else if (item === 'dice'){
            number = Math.sqrt(number)
            console.log(number)
        }
        else if (item === 'spice'){
            number += 1
            console.log(number)
        }
        else if (item === 'bake'){
            number *= 3
            console.log(number)
        }
        else if (item === 'fillet') {
            number =  number - number * 0.2
            console.log(number)
        }
    }
}

cookingByNumber('9', 'dice', 'spice', 'chop', 'bake', 'fillet')