export default function findCheapestRoute(cities, edges) {

    const graph = Array.from({ length: cities + 1 }, () => []);
    

    for (const [a, b, w] of edges) {
        graph[a].push([b, w]);
        graph[b].push([a, w]); 
    }

    function dfs(node, target, visited, currentCost) {
        if (node === target) return currentCost;

        let minCost = Infinity;

        for (const [next, weight] of graph[node]) {
            if (!visited.has(next)) {
                visited.add(next);
                const cost = dfs(next, target, visited, currentCost + weight);
                minCost = Math.min(minCost, cost);
                visited.delete(next);
            }
        }

        return minCost;
    }

    const visited = new Set();
    visited.add(1);

    return dfs(1, cities, visited, 0);
}