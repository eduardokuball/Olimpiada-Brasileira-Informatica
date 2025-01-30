import Graph from "../../../utils/graph.js";

const villagesQuantity = parseInt(prompt());

const graph = new Graph();
const vertexes = new Array(villagesQuantity).fill(0).map((_, i) => i + 1);
graph.addVertexes(...vertexes);

for (let i = 0; i < villagesQuantity-1; i++) {
    const [villageA, villageB] = prompt()
        .split(' ', 2)
        .map(e => parseInt(e));

    graph.addEdge(villageA, villageB);
}

const distances = [];

vertexes.forEach(vI => {
    const iDistances = {};

    vertexes.forEach(vJ => {
        if (vI === vJ) return;

        const key = JSON.stringify([vI, vJ].toSorted());

        const pathsDistances = graph.allPathsFrom(vI, vJ).map(e => e.length-1);
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

    maxDistances[String(i+1)] = maxDistance;
});

let minDistance = null;
let villageFound = null;

for (const key in maxDistances) {
    if (minDistance === null) {
        minDistance = maxDistances[key];
        villageFound = key;
        continue;
    }

    if (maxDistances[key] < minDistance) {
        minDistance = maxDistances[key];
        villageFound = key;
    }
}

console.log(villageFound);
