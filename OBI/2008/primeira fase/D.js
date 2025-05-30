import Graph from "../../../utils/graph.js";

function floyd(graph, size) {
    const g = graph.getAdjacencyMatrix();

    for (let k = 0; k < size; k++) {
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                g[i][j] = Math.min(g[i][j], g[i][k] + g[k][j]);
            }
        }
    }

    let minDistance = Infinity;
    for (let i = 0; i < size; i++) {
        let maxDistance = 0;
        for (let j = 0; j < size; j++) {
            if (g[i][j] > maxDistance) {
                maxDistance = g[i][j];
            }
        }
        if (maxDistance < minDistance) {
            minDistance = maxDistance;
        }
    }

    return minDistance;
}


const [s, c] = prompt("Digite o número de cidades e conexões (ex: '4 5'):")
    .split(' ')
    .map(Number);

const graph = new Graph(true);

const vertices = Array.from({ length: s }, (_, i) => i);
graph.addVertexes(...vertices);

for (let i = 0; i < c; i++) {
    const [a, b, custo] = prompt(
        `Digite a conexão ${i + 1} (ex: '1 2 10'):`
    )
        .split(' ')
        .map(Number);

    graph.addEdge(a - 1, b - 1, custo);
}

const resultado = floyd(graph, s);
console.log(resultado);
