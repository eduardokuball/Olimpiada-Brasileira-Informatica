import Graph from '../../../utils/Graph.js';

const [cities, roads] = prompt()
    .split(' ', 2)
    .map(e => parseInt(e));

const vertexes = new Array(cities).fill(0).map((_, i) => i + 1);

const graph = new Graph(true);

vertexes.forEach((v) => {
    graph.addVertexes(v);
})

for (let i = 0; i < roads; i++) {
    const [vertexA, vertexB, width] = prompt()
        .split(' ', 3)
        .map(e => parseInt(e));

    graph.addEdge(vertexA + 1, vertexB + 1, width);
};
graph.showGraph();
function calcDistance(path) {
    let totalWidth = 0;

    for (let i = 0; i <= path.length - 2; i++) {
        const current = path[i];
        const successor = path[i + 1];

        const width = graph.getEdgeWeight(current, successor);
        totalWidth += width;
    }

    return totalWidth;
};


const originAndDistances = [];

for (let i = 1; i < cities + 1; i++) {
    let maxDistance = 0;

    for (let j = 1; j < cities + 1; j++) {
        if (j != i) {
            const paths = graph.allPathsFrom(i, j);
            let minDistance = Infinity; 

            paths.forEach((p) => {
                const d = calcDistance(p);
                minDistance = Math.min(minDistance, d); 
            });

            maxDistance = Math.max(maxDistance, minDistance); 
        }
    }

    originAndDistances.push([i, maxDistance]);
};

const distances = originAndDistances.map((dist) => dist[1]);

console.log(Math.min(...distances));





