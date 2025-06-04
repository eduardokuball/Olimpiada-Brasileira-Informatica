import MinHeap from "../../../utils/min-heap.js";

let [numberCities, railways, highways] = prompt()
    .split(' ')
    .map((e) => {
        return parseInt(e);
    });

let cities = Array.from({ length: numberCities }, () => []);

for (let i = 0; i < railways; i++) {
    let [a, b, cost] = prompt()
        .split(' ')
        .map((e) => {
            return parseInt(e);
        });
    a -= 1;
    b -= 1;
    cities[a].push([0, cost, b]); 
    cities[b].push([0, cost, a]);
}

for (let i = 0; i < highways; i++) {
    let [a, b, cost] = prompt()
        .split(' ')
        .map((e) => {
            return parseInt(e);
        });
    a -= 1;
    b -= 1;
    cities[a].push([1, cost, b]); 
    cities[b].push([1, cost, a]);
}


let totalCost = 0;
let visitedCities = new Set();
visitedCities.add(0);

let minHeap = new MinHeap();
for (const edge of cities[0]) {
    minHeap.push(edge);
}

while (!minHeap.isEmpty()) {
    const [priority, cost, destination] = minHeap.pop();
    if (!visitedCities.has(destination)) {
        visitedCities.add(destination);
        totalCost += cost;
        for (const edge of cities[destination]) {
            minHeap.push(edge);
        }
    }
}

console.log(totalCost);
