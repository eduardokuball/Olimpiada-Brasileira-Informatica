const lenghtfirst = prompt('tamanho da primeira palavra');
const firstword = prompt('digite a primeira palavra').toLowerCase();
const lenghtsecond = prompt('tamanho da segunda palavra').toLowerCase();
const secondword = prompt('digite a segunda palavra');

const repetitions = secondword.length < firstword.length ? secondword.length : firstword.length;

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

console.log(prefixies());