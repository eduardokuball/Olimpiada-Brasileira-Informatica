import DirectedGraph from "../../../utils/directed-graph.js";

const cities = parseInt(prompt());
const money = parseInt(prompt());

const graph = new DirectedGraph(false);

function convertToNumber(letra) {
    return letra === 'A' ? 0 : 1;
}

function dfs(c, a, b) {
    if (matrix[c][a][b] === 0) {
        matrix[c][a][b] = 1;

        if (a + b + present[c] <= money) {
            if (signal[c] === 0) {
                dfs(c, a + present[c], b);
            } else {
                dfs(c, a, b + present[c]);
            }

            const neighbors = graph.getVertexEdges(c, true);
            for (let neighbor of neighbors) {
                dfs(neighbor, a, b);
            }
        }
    }
}





const vertexes = Array.from({ length: cities }, (_, i) => i);
graph.addVertexes(...vertexes);

const present = Array(cities).fill(0);
const signal = Array(cities).fill(0);
const matrix = Array.from({ length: cities }, () =>
    Array.from({ length: 128 }, () => Array(128).fill(0))
);

for (let i = 0; i < cities; i++) {
    const e = prompt().split(' ');

    const idc = parseInt(e[0]);
    present[idc] = parseInt(e[1]);
    signal[idc] = convertToNumber(e[2]);
    const nv = parseInt(e[3]);

    for (let j = 4; j < 4 + nv; j++) {
        const v = parseInt(e[j]);
        graph.addEdge(idc, v);
    }
}

dfs(0, 0, 0);

let r = 128;
for (let i = 0; i < cities; i++) {
    for (let j = 0; j < 128; j++) {
        for (let k = 0; k < 128; k++) {
            if (j + k > 0 && matrix[i][j][k] === 1 && r > Math.abs(j - k)) {
                r = Math.abs(j - k);
            }
        }
    }
}

console.log(r);



