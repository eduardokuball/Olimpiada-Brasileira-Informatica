const REST = 1000000007;

const n = prompt().trim();
const sequence = prompt().trim();

const numDigits = n.length;
const alphabetSize = parseInt(n, 10);

const values = new Array(sequence.length).fill(0);
values[values.length - 1] = 1;

for (let i = 2; i <= numDigits; i++) {
    if (sequence[sequence.length - i] === '0') continue;

    let sum = 0;
    for (let j = 0; j < i; j++) {
        if (i === numDigits && j === 0) {
            const k = parseInt(sequence.slice(sequence.length - i), 10);
            if (k < alphabetSize) {
                sum = (sum + 1) % REST;
            }
        } else {
            if (j === 0) {
                sum = (sum + 1) % REST;
            } else {
                sum = (sum + values[values.length - j]) % REST;
            }
        }
    }
    values[values.length - i] = sum;
}

for (let i = sequence.length - numDigits - 1; i >= 0; i--) {
    if (sequence[i] === '0') continue;

    let sum = 0;
    for (let j = 1; j < numDigits; j++) {
        sum = (sum + values[i + j]) % REST;
    }

    const k = parseInt(sequence.slice(i, i + numDigits), 10);
    if (k < alphabetSize) {
        sum = (sum + values[i + numDigits]) % REST;
    }

    values[i] = sum;
}

console.log(values[0]);
