export default function countMissingCards(cards) {

    function splitCards(str, chunkSize) {
        const result = [];
        for (let i = 0; i < str.length; i += chunkSize) {
            result.push(str.substring(i, i + chunkSize));
        }
        return result;
    }

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

    const response = [0, 0, 0, 0];
    const suits = [hearts, spades, diamonds, clubs];

    for (let i = 0; i < suits.length; i++) {
        if (new Set(suits[i]).size !== suits[i].length) {
            response[i] = "erro";
        } else {
            response[i] = 13 - suits[i].length;
        }
    }

    return response;
}