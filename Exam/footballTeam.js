class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
        this.nameOfPlayers = [];
    }
    newAdditions(footballPlayers) {
        let result = [];
        for (let playerInfo of footballPlayers) {
            let data = playerInfo.split('/');
            let name = data[0];
            let age = data[1];
            let value = Number(data[2]);
            let found = footballPlayers.some(el => el.name == name);
            if (!found) {
                this.invitedPlayers.push({ name: name, age: age, playerValue: value })
                this.nameOfPlayers.push(name);
                result.push(name);
            } else {
                this.invitedPlayers.forEach(function (obj) {
                    if (obj.name == name) {
                        if (obj.playerValue < value) {
                            obj.playerValue = value;
                        }
                    }
                })
            }
        }

        return "You successfully invite " + result.join(', ') + "."
    }
    signContract(selectedPlayer) {
        let data = selectedPlayer.split('/');
        let name = data[0];
        let offer = Number(data[1]);
        let found = this.nameOfPlayers.find(element => element === name);

        if (!(found)) {
            throw new Error(`${name} is not invited to the selection list!`)
        }

        this.invitedPlayers.forEach(function (obj) {
            if (obj.name == name) {
                if (obj.playerValue < offer) {
                    let priceDifference = offer - obj.playerValue
                    throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`)
                }
                else {
                    obj.playerValue = "Bought";
                    return `Congratulations! You sign a contract with ${name} for ${offer} million dollars.`

                }
            }
        })

    }
    ageLimit(name, age) {
        let found = this.nameOfPlayers.find(element => element === name);
        if (!(found)) {
            throw new Error(`${name} is not invited to the selection list!`)
        }
        this.invitedPlayers.forEach(function (obj) {
            if (obj.name == name) {
                if (obj.age < age) {
                    let ageDifference = age - obj.age
                    if (ageDifference < 5) {
                        return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`
                    } else {
                        
                        return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
                    }
                }
            }
        })

    }

}


let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));

