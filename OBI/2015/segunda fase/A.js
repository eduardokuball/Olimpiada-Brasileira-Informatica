import Point from "../../../utils/point.js";

function cross(p0, p1, p2) {
    return (p1.x - p0.x) * (p2.y - p0.y) - (p2.x - p0.x) * (p1.y - p0.y);
}

const n = parseInt(prompt());
const points = [];

for (let i = 0; i < n; i++) {
    const [x, y] = prompt()
        .split(" ")
        .map((e) => {
            return parseInt(e);
        });
    points.push(new Point(x, y));
}

points.sort((a, b) => (a.x === b.x ? a.y - b.y : a.x - b.x));

const ch = Array(n).fill(0);  
let nch = 0; 
for (let i = 0; i < n; i++) {
    while (
        nch > 1 &&
        cross(points[ch[nch - 2]], points[ch[nch - 1]], points[i]) >= 0
    ) {
        nch--; 
    }
    ch[nch] = i; 
    nch++;
}

const k = nch - 1; 

console.log(k);
