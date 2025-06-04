const [n, f, r] = prompt()
    .split(" ")
    .map((e) => {
        return parseInt(e);
    });

const cities = Array.from({ length: n }, () => []);

for (let i = 0; i < f; i++) {
    const [a, b, k] = prompt()
        .split(" ")
        .map((e) => {
            return parseInt(e);
        });
    cities[a - 1].push([0, k, b - 1]);  
    cities[b - 1].push([0, k, a - 1]);
}

for (let i = 0; i < r; i++) {
    const [a, b, k] = prompt()
        .split(" ")
        .map((e) => {
            return parseInt(e);
        });
    cities[a - 1].push([1, k, b - 1]); 
    
    cities[b - 1].push([1, k, a - 1]);
}

let totalCost = 0;
const visited = new Set();
visited.add(0);

const queue = [...cities[0]];

while (queue.length > 0) {
    queue.sort((a, b) => {
        if (a[0] !== b[0]) return a[0] - b[0]; 
        return a[1] - b[1]; 
    });

    const [type, cost, to] = queue.shift();
    if (!visited.has(to)) {
        visited.add(to);
        totalCost += cost;
        queue.push(...cities[to]);
    }
}

console.log(totalCost);

