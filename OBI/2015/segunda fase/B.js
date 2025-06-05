const n = parseInt(prompt());
const [l1, c1] = prompt()
    .split(" ")
    .map((e) => {
        return parseInt(e);
    });
const [l2, c2] = prompt()
    .split(" ")
    .map((e) => {
        return parseInt(e);
    });

let isPossible = false;
const half = n / 2;

if ((l1 <= half && l2 > half) || (l1 > half && l2 <= half)) {
    isPossible = true;
}

if ((c1 <= half && c2 > half) || (c1 > half && c2 <= half)) {
    isPossible = true;
}

const result = isPossible ? "S" : "N";
console.log(result);
