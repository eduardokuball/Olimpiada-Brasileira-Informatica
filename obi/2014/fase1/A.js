export default function getMinimumCost(n, freeEdges = [], regularEdges = []) {

    const cities = Array.from({ length: n }, () => []);

    for (const [a, b, k] of freeEdges) {
        cities[a - 1].push([0, k, b - 1]);
        cities[b - 1].push([0, k, a - 1]);
    }

    for (const [a, b, k] of regularEdges) {
        cities[a - 1].push([1, k, b - 1]);
        cities[b - 1].push([1, k, a - 1]);
    }

    let totalCost = 0;
    const visited = new Set();
    visited.add(0);

    const queue = [...cities[0]];

    while (queue.length > 0) {
        queue.sort((a, b) => {
            if (a[0] !== b[0]) return a[0] - b[0]; // prioriza tipo
            return a[1] - b[1]; // depois custo
        });

        const [type, cost, to] = queue.shift();

        if (!visited.has(to)) {
            visited.add(to);
            totalCost += cost;
            queue.push(...cities[to]);
        }
    }

    return totalCost;
}