import Graph from '../../utils/Graph.js';

export default function findBestVillage(villagesQuantity, edges) {

    const graph = new Graph();
    const vertexes = new Array(villagesQuantity).fill(0).map((_, i) => i + 1);

    graph.addVertexes(...vertexes);

    edges.forEach(([villageA, villageB]) => {
        graph.addEdge(villageA, villageB);
    });

    const distances = [];

    vertexes.forEach(vI => {
        const iDistances = {};

        vertexes.forEach(vJ => {
            if (vI === vJ) return;

            const key = JSON.stringify([vI, vJ].toSorted());

            const pathsDistances = graph
                .allPathsFrom(vI, vJ)
                .map(e => e.length - 1);

            const minDistance = Math.min(...pathsDistances);

            iDistances[key] = minDistance;
        });

        distances.push(iDistances);
    });

    const maxDistances = {};

    distances.forEach((distance, i) => {
        let maxDistance = 0;

        for (const key in distance) {
            if (distance[key] > maxDistance) {
                maxDistance = distance[key];
            }
        }

        maxDistances[String(i + 1)] = maxDistance;
    });

    let minDistance = null;
    let villageFound = null;

    for (const key in maxDistances) {
        if (minDistance === null || maxDistances[key] < minDistance) {
            minDistance = maxDistances[key];
            villageFound = key;
        }
    }

    return Number(villageFound);
}