function splitCards(str, chunkSize) {
    const result = [];
    for (let i = 0; i < str.length; i += chunkSize) {
        result.push(str.substring(i, i + chunkSize));
    }
    return result;
}

const cards = prompt();


const cardsArray = splitCards(cards, 3);

const hearts = [];
const spades = [];
const diamonds = [];
const clubs = [];

cardsArray.forEach((c) => {
    if (c.includes('C')) {
        hearts.push(c);
    } else if (c.includes('E')) {
        spades.push(c);
    } else if (c.includes('U')) {
        diamonds.push(c);
    } else if (c.includes('P')) {
        clubs.push(c);
    }
});

const resposta = [0, 0, 0, 0];

const naipes = [hearts, spades, diamonds, clubs];

for (let i = 0; i < naipes.length; i++) {
    if (new Set(naipes[i]).size !== naipes[i].length) {
        resposta[i] = "erro";
    } else {
        const missingCards = 13 - naipes[i].length;
        resposta[i] = missingCards;
    }
}

console.log(resposta.join("\n"));