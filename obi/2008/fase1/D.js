import Graph from '../../../utils/Graph.js';

function floyd(graph, size) {
    const g = graph.getAdjacencyMatrix();

    for (let k = 0; k < size; k++) {
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                g[i][j] = Math.min(g[i][j], g[i][k] + g[k][j]);
            }
        }
    }

    let minDistance = Infinity;

    for (let i = 0; i < size; i++) {
        let maxDistance = 0;

        for (let j = 0; j < size; j++) {
            if (g[i][j] > maxDistance) {
                maxDistance = g[i][j];
            }
        }

        if (maxDistance < minDistance) {
            minDistance = maxDistance;
        }
    }

    return minDistance;
}

export default function solve(s, edges) {

    const graph = new Graph(true);

    const vertices = Array.from({ length: s }, (_, i) => i);
    graph.addVertexes(...vertices);

    for (const [a, b, cost] of edges) {
        graph.addEdge(a - 1, b - 1, cost);
    }

    return floyd(graph, s);
}