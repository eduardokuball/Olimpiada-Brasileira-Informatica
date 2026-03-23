function belongsAlphabet(alienAlphabet,message){
    for (let i = 0; i < message.length; i++) {
        if (!alienAlphabet.includes(message[i])) {
            return "N";
        }
    }
    return "S";
};


const sizes = prompt()
    .split(' ')
    .map(e => parseInt(e));

const alienAlphabet = prompt();
const message = prompt();

console.log(belongsAlphabet(alienAlphabet,message));