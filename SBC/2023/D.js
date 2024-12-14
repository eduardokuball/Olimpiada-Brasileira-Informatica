function encodeString(main, string){
    let encoded = '';
    for(let i = 0; i < main.length; i++){
        if(main[i] === string[i]){
            encoded += "*"
        } else if(main.includes(string[i])){
            encoded += "!";
        } else {
            encoded += "X";
        }
    }
    return encoded;
}

let quantitywords = Number(prompt('quantidade de palavras'));
let words = [];
for(let i = 0; i < quantitywords; i++){
    let word = prompt(`digite a ${i+1} palavra'`);
    words.push(word.toLowerCase());
};

let quantityGuess = Number(prompt('digite a quantidade de tentativas'));

let guess = [];

for(let i = 0; i < quantityGuess; i++){
    let guessWord = prompt(`digite a ${i+1} tentativa'`);
    guess.push(guessWord.toUpperCase());
};

let mainWord = words[0];

let encodedWords = words.map((e) => {
    return encodeString(mainWord,e);
});


guess.forEach((g) => {
    let count = 0;
    encodedWords.forEach((e) => {
        if(e === g){
            count ++;
        }
    })
    console.log(count);
})