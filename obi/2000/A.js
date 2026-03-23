import Graph from '../../utils/Graph.js';

const [tabas, branchesQuantity] = prompt()
    .split(' ', 2)
    .map(e => parseInt(e));

const graph = new Graph(true);
const edges = [];

// Adiciona os vértices com os números certinhos:
new Array(tabas).fill(0).map((_, i) => graph.addVertexes(i + 1));

for (let i = 0; i < branchesQuantity; i++) {
    let [tabaA, tabaB, cost] = prompt()
        .split(' ', 3)
        .map(e => parseInt(e));

    if (tabaA > tabaB) [tabaA, tabaB] = [tabaB, tabaA];

    graph.addEdge(tabaA, tabaB, cost);
    edges.push({ tabaA, tabaB, cost });
}

edges.sort((a, b) => a.cost - b.cost || a.tabaA - b.tabaA || a.tabaB - b.tabaB);

const disjointSet = new Map();
const mst = [];

edges.forEach(({ tabaA, tabaB }) => {
    disjointSet.set(tabaA, tabaA);
    disjointSet.set(tabaB, tabaB);
});

const find = (v) => (disjointSet.get(v) === v ? v : find(disjointSet.get(v)));
const union = (a, b) => disjointSet.set(find(a), find(b));

for (const { tabaA, tabaB } of edges) {
    if (find(tabaA) !== find(tabaB)) {
        union(tabaA, tabaB);
        mst.push([tabaA, tabaB]);
    }
}

mst.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
mst.forEach(([a, b]) => console.log(a, b));
