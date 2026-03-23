function sumOfDigits(number) {
    return number
        .toString()
        .split('')
        .map(Number)
        .reduce((a, b) => a + b, 0);
}

function findNumbers(start, end, search) {
    const results = [];
    for (let i = start; i <= end; i++) {
        if (sumOfDigits(i) === search) {
            results.push(i);
        }
    }
    return results;
}

function response(array) {
    if (array.length === 0) {
        return -1;
    }
    return array.at(-1); 
}

const start = Number(prompt());
const end = Number(prompt());
const search = Number(prompt());

const results = findNumbers(start, end, search);

console.log(response(results));
