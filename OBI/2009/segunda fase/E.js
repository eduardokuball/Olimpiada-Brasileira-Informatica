const [chocoball, maximum] = prompt()
    .split(' ')
    .map((e) => {
        return parseInt(e);
    });

const MAX_SIZE = 10 ** 6 + 1;
const count = Array(MAX_SIZE).fill(0);
const forbiden = Array(MAX_SIZE).fill(0);

for (let i = 0; i <= chocoball; i++) {
    if (count[i] === 0) {
        for (let j = 1; j <= maximum; j++) {
            count[i + j] += 1;
            forbiden[i + j] = j;
        }
    }
    if (count[i] === 1) {
        count[i + forbiden[i]] += 1;
        forbiden[i + forbiden[i]] = forbiden[i];
    }
}

const winner = count[chocoball] === 0 ? "Carlos" : "Paula";
console.log(winner);
