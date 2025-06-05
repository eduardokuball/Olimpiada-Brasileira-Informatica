const n = Number(prompt());
let dario = 0;
let xerxes = 0;

for (let i = 0; i < n; i++) {
    const [d, x] = prompt()
    .split(' ')
    .map((e) => {
        return parseInt(e);
    });
    if (x === (d + 1) % 5 || x === (d + 2) % 5) {
        dario += 1;
    } else {
        xerxes += 1;
    }
}

const result = dario > xerxes ? 'dario' : 'xerxes';
console.log(result);
