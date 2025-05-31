import Graph from "../../../utils/graph.js";;

function minKey(key, mstSet) {
    let minValue = Infinity;
    let minIndex = -1;

    for (let i = 0; i < key.length; i++) {
        if (!mstSet[i] && key[i] < minValue) {
            minValue = key[i];
            minIndex = i;
        }
    }

    return { minValue, minIndex };
}

function prim(graph) {
    const matrix = graph.getAdjacencyMatrix();
    const n = matrix.length;

    const key = Array(n).fill(Infinity);
    const mstSet = Array(n).fill(false);
    key[0] = 0;

    let totalCost = 0;

    for (let count = 0; count < n; count++) {
        const { minValue, minIndex } = minKey(key, mstSet);
        totalCost += minValue;
        mstSet[minIndex] = true;

        for (let v = 0; v < n; v++) {
            if (matrix[minIndex][v] < key[v] && !mstSet[v]) {
                key[v] = matrix[minIndex][v];
            }
        }
    }

    return totalCost;
}


const [colonies, roads] = prompt()
    .split(' ')
    .map((e) => {
        return parseInt(e);
    });

const graph = new Graph(true);

const vertexes = Array.from({ length: colonies }, (_, i) => i);
graph.addVertexes(...vertexes);

for (let i = 0; i < roads; i++) {
    const [start, end, cost] = prompt()
    .split(' ')
    .map((e) => {
        return parseInt(e);
    });
    graph.addEdge(start, end, cost);
}

const value = prim(graph);
console.log(value);

