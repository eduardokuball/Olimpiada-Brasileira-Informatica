const quantitywords = Number(prompt('quantidade de palavras'));
const words = [];
for (let i = 0; i < quantitywords; i++) {
    const word = prompt(`digite a ${i + 1} palavra'`);
    words.push(word.toLowerCase());
}

const quantityGuess = Number(prompt('digite a quantidade de tentativas'));

const guess = [];

function encodeString(main, string) {
    let encoded = '';
    for (let i = 0; i < main.length; i++) {
        if (main[i] === string[i]) {
            encoded += "*"
        } else if (main.includes(string[i])) {
            encoded += "!";
        } else {
            encoded += "X";
        }
    }
    return encoded;
}

for (let i = 0; i < quantityGuess; i++) {
    const guessWord = prompt(`digite a ${i + 1} tentativa'`);
    guess.push(guessWord.toUpperCase());
}

const mainWord = words[0];

const encodedWords = words.map((e) => {
    return encodeString(mainWord, e);
});

guess.forEach((g) => {
    let count = 0;
    encodedWords.forEach((e) => {
        if (e === g) {
            count++;
        }
    })
    console.log(count);
})