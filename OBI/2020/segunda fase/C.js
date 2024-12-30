import Graph from "../../../utils/graph.js";

const citiesQuantity = parseInt(prompt());
const paths = citiesQuantity * (citiesQuantity-1) / 2;

const cities = Array(citiesQuantity).fill()
    .map((_, i) => i + 1);

const graph = new Graph(true);
graph.addVertexes(...cities);

for (let i = 1; i <= paths; i++) {
    const [v1, v2, time] = prompt().split(' ', 3)
        .map(e => parseInt(e));

    graph.addEdge(v1, v2, time);
}

graph.showGraph();

function dfs(vertex, visited = new Set()) {
    if (visited.has(vertex)) return;

    console.log(`Vértice ${vertex} visitado`);
    visited.add(vertex);

    const neighbors = graph.getVertexEdges(vertex);

    for (let neighbor of neighbors)
        dfs(neighbor?.vertex || neighbor, visited);
}

// faz um dfs a partir da primeira cidade:
dfs(cities[0]);
