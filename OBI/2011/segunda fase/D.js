import MinHeap from "../../../utils/min-heap.js";

const [cities, highways] = prompt()
    .split(' ')
    .map((e) => {
        return parseInt(e);
    });

const edges = Array.from({ length: cities }, () => []);

for (let i = 1; i <= highways; i++) {
    const [u, v, c] = prompt()
        .split(' ')
        .map((e) => {
            return parseInt(e);
        });
    edges[u - 1].push([v - 1, c]);
    edges[v - 1].push([u - 1, c]);
}

const visited = new Set();
visited.add(0);

const heap = new MinHeap();
for (const [v, cost] of edges[0]) {
    heap.push([cost, v]);
}

let totalCost = 0;

while (visited.size < cities) {
    const [cost, v] = heap.pop();
    if (visited.has(v)) {
        continue;
    }
    visited.add(v);
    totalCost += cost;
    for (const [u, c] of edges[v]) {
        if (!visited.has(u)) {
            heap.push([c, u]);
        }
    }
}

console.log(totalCost);
