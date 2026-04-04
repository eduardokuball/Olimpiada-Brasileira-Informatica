import Graph from '../../utils/Graph.js';

export default function checkWeb(stations, conections) {

    const graph = new Graph();

    const vertices = Array.from({ length: stations }, (_, i) => i + 1);
    graph.addVertexes(...vertices);

    conections.forEach(([x, y]) => {
        graph.addEdge(x, y);
        graph.addEdge(y, x);
    });

    const visitados = new Set();
    const fila = [vertices[0]];

    visitados.add(vertices[0]);

    while (fila.length > 0) {
        const atual = fila.shift();
        const vizinhos = graph.getVertexEdges(atual, true);

        for (let vizinho of vizinhos) {
            if (!visitados.has(vizinho)) {
                visitados.add(vizinho);
                fila.push(vizinho);
            }
        }
    }

    return visitados.size === stations ? "normal" : "falha";
}