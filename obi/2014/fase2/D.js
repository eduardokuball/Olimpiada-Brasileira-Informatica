export default function countValidPairs(n, edges = []) {

    const corners = Array.from({ length: n }, () => []);

    for (const [a, b, c] of edges) {
        const u = a - 1;
        const v = b - 1;

        corners[u].push([u, v, c]);
        corners[v].push([v, u, c]);
    }

    const groups = Array(n).fill(1);
    const groupId = Array.from({ length: n }, (_, i) => i);

    const queue = [];
    for (const edge of corners[0]) {
        queue.push(edge);
    }

    const countedVertices = new Set();
    countedVertices.add(0);

    while (queue.length > 0) {
        const [origin, dest, type] = queue.shift();

        if (countedVertices.has(dest)) continue;

        countedVertices.add(dest);

        for (const edge of corners[dest]) {
            queue.push(edge);
        }

        if (type === 1) continue;

        groupId[dest] = groupId[origin];
        groups[groupId[origin]] += 1;
        groups[dest] -= 1;
    }

    let result = 0;
    let counted = 0;

    for (const count of groups) {
        counted += count;
        result += count * (n - counted);
    }

    return result;
}