import Graph from "../../../utils/graph.js";

const [islands, ships] = prompt()
    .split(' ', 2)
    .map(e => parseInt(e));

const vertexes = new Array(islands).fill(0).map((_, i) => i + 1);

const graph = new Graph(true);
graph.addVertexes(...vertexes);

for (let i = 0; i < ships; i++) {
    const [vertexA, vertexB, width] = prompt()
        .split(' ', 3)
        .map(e => parseInt(e));

    graph.addEdge(vertexA, vertexB, width);
};

const queriesQuantity = parseInt(prompt());
const queries = [];

for(let i = 0; i < queriesQuantity; i++) {
    const [start, end] = prompt()
        .split(' ', 2)
        .map(e => parseInt(e));
    queries.push({
        start: start,
        end: end,
    });
    
};

function calcPathWidth(path) {
    let totalWidth = 0;

    for (let i = 0; i <= path.length - 2; i++) {
        const current = path[i];
        const successor = path[i + 1];

        const width = graph.getEdgeWeight(current, successor);
        totalWidth += width;
    }

    return totalWidth;
};

const results = [];

for (const { start, end } of queries) {
    const pathsAndWidths = [];
    const paths = graph.allPathsFrom(start, end);
    paths.forEach((path) => {
        const quantitys = [];
        for (let i = 0; i <= path.length - 2; i++) {
            const current = path[i];
            const successor = path[i + 1];
    
            const width = graph.getEdgeWeight(current, successor);
            quantitys.push(width);
        }
        pathsAndWidths.push({
            quantitys: quantitys,
            width: calcPathWidth(path),
        });
    });
    
    pathsAndWidths.sort((a, b) => b.width - a.width);
    const path = pathsAndWidths[0].quantitys;
    results.push(Math.min(...path));
};

results.forEach((result) => console.log(result));