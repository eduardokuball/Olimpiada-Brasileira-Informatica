import Graph from '../../utils/Graph.js';

export default function reachableCities(cities, currentCity, maximum, edges) {

    const graph = new Graph(true);

    const vertexes = new Array(cities).fill(0).map((_, i) => i + 1);
    graph.addVertexes(...vertexes);

    edges.forEach(([from, to]) => {
        graph.addEdge(from, to, 1);
    });

    function calculateTolls(root = []) {
        let totalTolls = 0;

        for (let i = 0; i <= root.length - 2; i++) {
            const current = root[i];
            const successor = root[i + 1];

            const weight = graph.getEdgeWeight(current, successor);
            totalTolls += weight;
        }

        return totalTolls;
    }

    const citiesReached = new Set();

    for (let i = 1; i <= cities; i++) {
        if (i !== currentCity) {
            const roots = graph.allPathsFrom(currentCity, i);

            roots.forEach(root => {
                const tolls = calculateTolls(root);

                if (tolls <= maximum) {
                    citiesReached.add(root[root.length - 1]);
                }
            });
        }
    }

    return [...citiesReached].join(' ');
}