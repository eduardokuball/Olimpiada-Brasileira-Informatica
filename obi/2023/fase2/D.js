function getMaxMinCapacity(islands, edges, queries) {
    const graph = new Map();

    for (let i = 1; i <= islands; i++) {
        graph.set(i, []);
    }

    for (const [u, v, w] of edges) {
        graph.get(u).push([v, w]);
        graph.get(v).push([u, w]);
    }

    function maxMinPath(start, end) {
        const best = new Array(islands + 1).fill(0);
        best[start] = Infinity;

        const queue = [[start, Infinity]];

        while (queue.length) {
            queue.sort((a, b) => b[1] - a[1]);
            const [node, capacity] = queue.shift();

            if (node === end) return capacity;

            for (const [next, weight] of graph.get(node)) {
                const newCapacity = Math.min(capacity, weight);

                if (newCapacity > best[next]) {
                    best[next] = newCapacity;
                    queue.push([next, newCapacity]);
                }
            }
        }

        return 0;
    }

    return queries.map(([s, e]) => maxMinPath(s, e));
}

export default getMaxMinCapacity;