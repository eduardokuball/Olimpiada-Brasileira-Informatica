let cards = prompt('digite as cartas');

function splitCards(str, chunkSize) {
    let result = [];
    for (let i = 0; i < str.length; i += chunkSize) {
        result.push(str.substring(i, i + chunkSize));
    }
    return result;
};

let cardsArray = splitCards(cards, 3);

let hearts = [];
let spades = [];
let diamonds = [];
let clubs = [];

cardsArray.forEach((c) => {
    if(c.includes('C')){
        hearts.push(c);
    } else if(c.includes('E')){
        spades.push(c);
    } else if(c.includes('U')){
        diamonds.push(c);
    } else if(c.includes('P')){
        clubs.push(c);
    }
});

let resposta = [0,0,0,0];

let naipes = [hearts,spades,diamonds,clubs];

for(let i = 0; i < naipes.length; i++){
    if(new Set(naipes[i]).size !== naipes[i].length){
        resposta[i] = "erro";
    }  else {
        let missingCards = 13 - naipes[i].length;
        resposta[i] = missingCards;
    }
};

console.log(resposta.join("\n"));