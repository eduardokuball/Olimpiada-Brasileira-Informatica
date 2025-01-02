import Graph from "../../../utils/graph.js";

let timeSum = 0;

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

const routes = [];

function dfs(vertex, visited = []) {
    if (visited.length === citiesQuantity) {
        routes.push([...visited]);
        return visited;
    }

    if (routes.some(e => JSON.stringify(e) === JSON.stringify(visited))) {
        return visited;
    }

    const neighbors = graph.getVertexEdges(vertex);

    for (let neighbor of neighbors)
        dfs(neighbor?.vertex || neighbor, visited);

    visited.pop();
}

cities.forEach(city => {
    dfs(city);
    // routes.push(route);
});
// faz um dfs a partir da primeira cidade:
console.log(routes);
// console.log(timeSum);