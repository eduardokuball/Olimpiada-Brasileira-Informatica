import DirectedGraph from '../../../utils/DirectedGraph.js';

function calculateTourTime(graph, tour, roomsWeights) {
    let totalTime = 0;

    for (let i = 0; i < tour.length - 1; i++) {
        const current = tour[i];
        const next = tour[i + 1];

        totalTime += roomsWeights[current - 1];
        totalTime += graph.getEdgeWeight(current, next);
    }

    return totalTime;
}

export default function minTourTime(roomsQuantity, roomsWeights, edges) {
    const graph = new DirectedGraph(true);

    const vertexes = Array.from({ length: roomsQuantity }, (_, i) => i + 1);
    graph.addVertexes(...vertexes);

    for (const [roomA, roomB, weight] of edges) {
        graph.addEdge(roomA, roomB, weight);
    }

    let allTourTimes = [];

    for (let i = 1; i <= roomsQuantity; i++) {
        const cycles = graph
            .allCyclesFrom(i)
            .filter(cycle => cycle.length >= 3); // mínimo: ida + volta

        const tourTimes = cycles.map(cycle =>
            calculateTourTime(graph, cycle, roomsWeights)
        );

        allTourTimes.push(...tourTimes);
    }

    return Math.min(...allTourTimes);
}