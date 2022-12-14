class Garden {
    constructor(spaceAvailable) {

        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];

    }

    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable < spaceRequired) {
            throw new Error("Not enough space in the garden.")
        }

        let plant = {
            plantName,
            spaceRequired,
            ripe: false,
            quantity: 0
        };

        this.plants.push(plant);
        this.spaceAvailable -= spaceRequired;
        return `The ${plantName} has been successfully planted in the garden.`
    }

    ripenPlant(plantName, quantity) {
        let currentPlant = this.plants.find(plant => plant.plantName === plantName);

        if (!currentPlant) {
            throw new Error(`There is no ${plantName} in the garden.`)
        }

        if (currentPlant.ripe) {
            throw new Error(`The ${plantName} is already ripe.`)
        }

        if (quantity <= 0) {
            throw new Error("The quantity cannot be zero or negative.")
        }

        currentPlant.ripe = true;
        currentPlant.quantity = quantity;

        if (quantity === 1) {
            return `${quantity} ${plantName} has successfully ripened.`
        } else {
            return `${quantity} ${plantName}s have successfully ripened.`
        }
    }

    harvestPlant(plantName) {
        let currentPlant = this.plants.find(plant => plant.plantName === plantName);

        if (!currentPlant) {
            throw new Error(`There is no ${plantName} in the garden.`)
        }
        if (!currentPlant.ripe) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`)
        }
        this.plants = this.plants.filter(plant => plant.plantName != plantName);

        let plantStorage = {
            plantName: currentPlant.plantName,
            quantity: currentPlant.quantity,
        }

        this.storage.push(plantStorage);
        this.spaceAvailable += currentPlant.spaceRequired;
        return `The ${plantName} has been successfully harvested.`

    }

    generateReport() {
        let result = ``;
        result += `The garden has ${this.spaceAvailable} free space left.\n`;
        result += `Plants in the garden: `


        this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName))
            .forEach(x => result += `${x.plantName}, `);

        result = result.substring(0, result.length - 2);
        result += '\n'

        if (!this.storage.length) {
            result += `Plants in storage: The storage is empty.`
        } else {
            result += `Plants in storage: `;
            this.storage.forEach(plant => result += `${plant.plantName} (${plant.quantity}), `);
            result = result.substring(0, result.length - 2);
        }

        return result

    }
}

const myGarden = new Garden(250)

console.log(myGarden.addPlant('apple', 20));

console.log(myGarden.addPlant('orange', 200));

console.log(myGarden.addPlant('raspberry', 10));

console.log(myGarden.ripenPlant('apple', 10));

console.log(myGarden.ripenPlant('orange', 1));

console.log(myGarden.harvestPlant('apple'));

console.log(myGarden.harvestPlant('raspberry'));



// ??? On the second line list all plants that are in the garden ordered alphabetically by plant name ascending in the format:

// "Plants in the garden: {plant1Name}, {plant2Name}, {???}"

// ??? On the third line add:

// If there are no plants in the storage, print:

// "Plants in storage: The storage is empty."

// If there are plants in the storage list them in the format:

// "Plants in storage: {plant1Name} ({plant1Quantity}), {plant2Name}, ({plant2Quantity}), {???}"
