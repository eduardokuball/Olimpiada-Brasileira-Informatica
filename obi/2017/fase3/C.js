export default function findMinimumCutDifference(n, edges) {
    const graph = Array.from({ length: n + 1 }, () => []);

    for (const [a, b] of edges) {
        graph[a].push(b);
        graph[b].push(a);
    }

    let result = n;

    function dfs(node, parent) {
        let subtreeSize = 1;

        for (const neighbor of graph[node]) {
            if (neighbor !== parent) {
                subtreeSize += dfs(neighbor, node);
            }
        }

        const diff = Math.abs(n - 2 * subtreeSize);
        if (diff < result) {
            result = diff;
        }

        return subtreeSize;
    }

    dfs(1, -1);

    return result;
}