import DirectedGraph from '../../../utils/DirectedGraph.js';

function convertToNumber(letra) {
    return letra === 'A' ? 0 : 1;
}

export default function solve(cities, money, cityData) {
    const graph = new DirectedGraph(false);

    const vertexes = Array.from({ length: cities }, (_, i) => i);
    graph.addVertexes(...vertexes);


    const present = Array(cities).fill(0);
    const signal = Array(cities).fill(0);

    const matrix = Array.from({ length: cities }, () =>
        Array.from({ length: 128 }, () => Array(128).fill(0))
    );

    for (const { id, value, sig, neighbors } of cityData) {
        present[id] = value;
        signal[id] = convertToNumber(sig);

        for (const v of neighbors) {
            graph.addEdge(id, v);
        }
    }

    function dfs(c, a, b) {
        if (matrix[c][a][b]) return;

        matrix[c][a][b] = 1;

        if (a + b + present[c] <= money) {
            if (signal[c] === 0) {
                dfs(c, a + present[c], b);
            } else {
                dfs(c, a, b + present[c]);
            }

            const neighbors = graph.getVertexEdges(c, true);
            for (const neighbor of neighbors) {
                dfs(neighbor, a, b);
            }
        }
    }

    dfs(0, 0, 0);

    let result = 128;

    for (let i = 0; i < cities; i++) {
        for (let j = 0; j < 128; j++) {
            for (let k = 0; k < 128; k++) {
                if (j + k > 0 && matrix[i][j][k]) {
                    result = Math.min(result, Math.abs(j - k));
                }
            }
        }
    }

    return result;
}