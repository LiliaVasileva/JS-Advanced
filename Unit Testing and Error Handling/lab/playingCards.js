 // Judge  75/100 points

function cardFactory(face, suit) {

    const faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

    const suits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663'
    };

    if (face != face.toUpperCase()){
        throw new Error('Face should be UpperCase')

    };

    if(!faces.includes(face) || !suits[suit]){
        throw new Error('Invalid face or suit')

    };

    let card = {
        face,
        suit,
        toString(){
            console.log(this.face + suits[this.suit])
        }
    };
    return card;
}


let card = cardFactory('1', 'C');

card.toString()