const counter = new Array(10).fill(0);
let result = 'S';

const balls = prompt()
    .split(' ')
    .map((e) => {
        return parseInt(e);
    });

for (const b of balls) {
    counter[b]++;
    if (counter[b] > 4) {
        result = 'N';
    }
}

console.log(result);
