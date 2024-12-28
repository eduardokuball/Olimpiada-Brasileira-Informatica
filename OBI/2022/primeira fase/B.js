const start = Number(prompt('começo da sequência'));
const end = Number(prompt('fim da sequência'));
const search = Number(prompt('número que esta procurando'));
const results = [];

for (let i = start; i <= end; i++) {
    const array = i
    .toString()
    .split('')
    .map(Number);
    const sum = array.reduce((a, b) => a + b, 0);
    if (sum == search) {
        results.push(i);
    }  
}

function response(array) {
    if (array.length == 0) {
        return -1;
    }
    return array.at(-1);
}

console.log(response(results));