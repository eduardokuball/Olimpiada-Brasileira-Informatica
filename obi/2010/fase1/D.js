import DirectedGraph from '../../../utils/DirectedGraph.js';

export default function getBestCity(cities, roads, edges) {

    const graph = new DirectedGraph(true);

    const vertexes = Array.from({ length: cities }, (_, i) => i + 1);
    graph.addVertexes(...vertexes);

    for (let i = 0; i < roads; i++) {
        const [u, v, w] = edges[i];

        const a = u + 1;
        const b = v + 1;

        if (graph.hasEdge(a, b)) {
            const currentWeight = graph.getEdgeWeight(a, b);
            if (w < currentWeight) {
                graph.removeEdge(a, b);
                graph.addEdge(a, b, w);
            }
        } else {
            graph.addEdge(a, b, w);
        }

        if (graph.hasEdge(b, a)) {
            const currentWeight = graph.getEdgeWeight(b, a);
            if (w < currentWeight) {
                graph.removeEdge(b, a);
                graph.addEdge(b, a, w);
            }
        } else {
            graph.addEdge(b, a, w);
        }
    }

    function dijkstra(start) {

        const dist = Array(cities + 1).fill(Infinity);
        dist[start] = 0;

        const visited = new Set();

        while (visited.size < cities) {
            let u = -1;
            let minDist = Infinity;

            for (let i = 1; i <= cities; i++) {
                if (!visited.has(i) && dist[i] < minDist) {
                    minDist = dist[i];
                    u = i;
                }
            }

            if (u === -1) break;


            visited.add(u);

            const neighbors = graph.getVertexEdges(u);

            for (let edge of neighbors) {
                const v = edge.vertex;
                const weight = edge.weight;


                if (dist[u] + weight < dist[v]) {
                    dist[v] = dist[u] + weight;
                }
            }
        }

        return dist;
    }

    let answer = Infinity;

    for (let i = 1; i <= cities; i++) {
        const dist = dijkstra(i);

        const maxDist = Math.max(...dist.slice(1));

        answer = Math.min(answer, maxDist);
    }


    return answer;
}