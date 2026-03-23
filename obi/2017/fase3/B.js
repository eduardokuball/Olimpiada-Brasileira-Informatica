const N = parseInt(prompt());

const heights = prompt()
    .split(" ")
    .map((e) => {
        return parseInt(e);
    });

let replaced = 0;
let repaired = 0;

for (let i = 0; i < N; i++) {
    const h = heights[i];
    if (h < 50) {
        replaced++;
    } else if (h < 85) {
        repaired++;
    }
}

console.log(replaced, repaired);
