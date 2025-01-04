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

const quantitywords = Number(prompt());
const words = [];
for (let i = 0; i < quantitywords; i++) {
    const word = prompt();
    words.push(word.toLowerCase());
}

const quantityGuess = Number(prompt());

const guess = [];

for (let i = 0; i < quantityGuess; i++) {
    const guessWord = prompt();
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