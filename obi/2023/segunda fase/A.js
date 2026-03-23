function prefixies() {
    let prefix = 0;
    for (let i = 0; i < repetitions; i++) {
        if (firstword[i] === secondword[i]) {
            prefix++;
        } else {
            break;
        }
    }
    return prefix;
}

const lenghtfirst = prompt();
const firstword = prompt().toLowerCase();
const lenghtsecond = prompt().toLowerCase();
const secondword = prompt();

const repetitions = secondword.length < firstword.length ? secondword.length : firstword.length;



console.log(prefixies());