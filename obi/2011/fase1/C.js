import Graph from '../../../utils/Graph.js';

export default function getMaxDistance(cities, edges) {
    console.log(edges);
    const graph = new Graph(true);

    for (let i = 1; i <= cities; i++) {
        graph.addVertexes(i);
    }

    for (let i = 0; i < cities - 1; i++) {
        const [a, b] = edges[i];
        graph.addEdge(a, b, 1);
    }

    function allRoutes(cities) {
        const routes = [];

        for (let i = 2; i <= cities; i++) {
            routes.push(graph.allPathsFrom(1, i));
        }

        return routes;
    }

    const routes = allRoutes(cities).flat();

    function calculateKm(routes) {
        let total = 0;
        let totals = [];

        for (let i = 0; i < routes.length; i++) {
            const array = routes[i];

            for (let j = 0; j < array.length - 1; j++) {
                total += graph.getEdgeWeight(array[j], array[j + 1]);
            }

            totals.push(total);
            total = 0;
        }

        return totals;
    }

    const kmsRoutes = calculateKm(routes);

    return Math.max(...kmsRoutes);
}