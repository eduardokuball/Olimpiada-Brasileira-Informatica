function isAlphabetAlien(alphabet,message){
    for(const letter of message){
        if(!alphabet.includes(letter)){
            return 'N';
        }
    }
    return 'S';
};

const [sizeAlphabet,sizeMessage] = prompt()
    .split(' ')
    .map(e => parseInt(e));

const alphabet = prompt();
const message = prompt();


console.log(isAlphabetAlien(alphabet, message));