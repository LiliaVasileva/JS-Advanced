function solve(input) {

}

let cat = {
    name: 'Sharo',
    age: 5,
    sayHallo() {
        return this.name + ': Mex!';
    }
}

let func = cat.sayHallo

function sayHallo() {
    return
}


// function sort

const compareNumber = {
    ascending: (a, b) => a - b,
    descending: (a, b) => b - a,
}



function solve(...commands) {
    let initial = Number(commands.shift());
    const parser = {
        chop: (x) => x / 2,
        dice: (x) => Math.sqrt(x),
        spice: (x) => x + 1
    }


}

// достъпването на контекста е с ключовата дума this
// основната функция, е че ако имаме function calculate
// undefind + undefined = NaN



function solve(name, population, treasury)