export default function calculateNetworkDifference(islands, edges, server) {
    const graph = Array.from({ length: islands + 1 }, () => []);

    for (const [a, b, w] of edges) {
        graph[a].push([b, w]);
        graph[b].push([a, w]);
    }

    function dfs(node, visited, currentWidth, best) {
        for (const [next, weight] of graph[node]) {
            if (!visited.has(next)) {
                visited.add(next);

                const newWidth = currentWidth + weight;

                if (best[next] === undefined || newWidth < best[next]) {
                    best[next] = newWidth;
                    dfs(next, visited, newWidth, best);
                }

                visited.delete(next);
            }
        }
    }

    const best = {};
    const visited = new Set();
    visited.add(server);

    dfs(server, visited, 0, best);

    const values = Object.values(best);

    return Math.max(...values) - Math.min(...values);
}