const n = parseInt(prompt());
const heights = prompt()
    .split(' ')
    .map((e) => {
        return parseInt(e);
    });

let count = 2;
let decreasing = false;

for (let i = 1; i < n; i++) {
    if (heights[i] < heights[i - 1]) {
        decreasing = true;
    } else {
        if (decreasing) {
            count += 1;
        }
        decreasing = false;
    }
}

console.log(count);
