function townPopulation(arr) {
    const towns = {};

    for (let townAsString of arr) {
        let tempArr = townAsString.split(' <-> ');
        let population = Number(tempArr[1]);
        let name = tempArr[0];
    
        if (towns[name] != undefined) {
            towns[name] += population;
        }
        else {
            towns[name] = population;
        }
        }
    
    for (let town in towns){
        console.log(`${town} : ${towns[town]}`)
            }
    }




townPopulation(['Sofia <-> 1200000', 'Montana <-> 20000', 'New York <-> 10000000','Washington <-> 2345000','Las Vegas <-> 1000000'])
