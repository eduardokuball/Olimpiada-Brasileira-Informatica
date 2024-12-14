const quantity = parseInt(prompt());
const words = [];

for (let i = 0; i < quantity; i++) {
    let word = prompt();
    words.push(word.toUpperCase());
}

const initials = [];
words.forEach(word => {
    const firstLetter = word[0];

    if (!initials.includes(firstLetter))
        initials.push(firstLetter);
});

function isAcronym(word) {
    const letters = word.split('');

    for (let letter of letters) {
        if (!initials.includes(letter)) return false;
    }

    return true;
}

let someathingAcronym = false;

for (let word of words) {
    if (isAcronym(word)) {
        someathingAcronym = true;
        break;
    }
}

console.log(someathingAcronym ? 'Y' : 'N');
