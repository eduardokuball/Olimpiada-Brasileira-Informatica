const [dimension, hint] = prompt()
    .split(' ')
    .map((e) => {
        return parseInt(e);
    });

const grid = Array.from({ length: dimension }, () => Array(dimension).fill(false));
const hints = [];

let count = 0;
let solution = [-1, -1];

for (let i = 0; i < hint; i++) {
    const [x, y, d] = prompt()
    .split(' ')
    .map((e) => {
        return parseInt(e);
    });
    grid[y][x] = d;
    hints.push([y, x, d]);
}

for (let i = 0; i < dimension; i++) {
    for (let j = 0; j < dimension; j++) {
        if (grid[i][j] === false) {
            let isPossible = true;

            for (const [y, x, d] of hints) {
                const dy = Math.abs(y - i);
                const dx = Math.abs(x - j);
                const distance = dy + dx;

                if (distance !== d) {
                    isPossible = false;
                    break;
                }
            }

            if (isPossible) {
                count++;
                if (count === 1) {
                    solution = [j, i];
                } else {
                    solution = [-1, -1]; 
                }
            }
        }
    }
}

console.log(solution[0], solution[1]);
