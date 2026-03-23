
const [m, n] = prompt()
    .split(' ')
    .map((e) => {
        return parseInt(e);
    });
const x = prompt()
    .split(' ')
    .map((e) => {
        return parseInt(e);
    });
const y = prompt()
    .split(' ')
    .map((e) => {
        return parseInt(e);
    });

let a = [...x];
let b = [...y];

const k = Math.max(m, n);

while (a.length < k) a.unshift(0);
while (b.length < k) b.unshift(0);

const carry = Array(k).fill(0);
const result = [];
let seenOne = false;

for (let i = k - 1; i >= 0; i--) {
    let s = a[i] + b[i] + carry[i];

    if (s === 2) {
        carry[i - 1] = 1;
        s = 0;
    }
    if (s === 3) {
        carry[i - 1] = 1;
        s = 1;
    }
    if (s === 1) {
        seenOne = true;
    }
    if (seenOne) {
        result.unshift(s);
    }
}

console.log(result.join(' '));
