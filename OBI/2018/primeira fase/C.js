import Graph from "../../../utils/graph.js";

function calcPathWidth(path = []) {
    let totalWidth = 0;

    for (let i = 0; i <= path.length - 2; i++) {
        const current = path[i];
        const successor = path[i + 1];

        const width = graph.getEdgeWeight(current, successor);
        totalWidth += width;
    }
    return totalWidth;
};


const [islands, cables] = prompt()
    .split(' ', 2)
    .map(e => parseInt(e));

const vertexes = new Array(islands).fill(0).map((_, i) => i + 1);

const graph = new Graph(true);

graph.addVertexes(...vertexes);

for (let i = 0; i < cables; i++) {
    const [vertexA, vertexB, width] = prompt()
        .split(' ', 3)
        .map(e => parseInt(e));

    graph.addEdge(vertexA, vertexB, width);
};

const server = parseInt(prompt());

const paths = [];
const mins = [];

for (let i = 0; i < islands; i++) {
    if (i + 1!== server) {
        const path = graph.allPathsFrom(server, i + 1);
        const widhths = path.map(path => calcPathWidth(path));
        paths.push(path);
        mins.push(Math.min(...widhths));
    };
};

const difference = Math.max(...mins) - Math.min(...mins);

console.log(difference);