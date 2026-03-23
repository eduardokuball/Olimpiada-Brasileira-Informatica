import Graph from "../../../utils/graph.js";

const [stations, railsQuantity] = prompt()
    .split(' ', 2)
    .map(e => parseInt(e));

const vertexes = new Array(stations).fill(0).map((_, i) => i + 1);

const graph = new Graph(true);
graph.addVertexes(...vertexes);

for (let i = 0; i < railsQuantity; i++) {
    const [vertexA, vertexB, width] = prompt()
        .split(' ', 3)
        .map(e => parseInt(e));

    graph.addEdge(vertexA, vertexB, width);
}

const queriesQuantity = parseInt(prompt());

const queries = [];

for (let i = 0; i < queriesQuantity; i++) {
    const [start, trainSize] = prompt()
        .split(' ', 2)
        .map(e => parseInt(e));

    queries.push({ start, trainSize });
}

// Função para calcular a largura total de um ciclo
function calcCycleWidth(cycle = []) {
    let totalWidth = 0;

    for (let i = 0; i <= cycle.length - 2; i++) {
        const current = cycle[i];
        const successor = cycle[i + 1];

        const width = graph.getEdgeWeight(current, successor);
        totalWidth += width;
    }

    return totalWidth;
}

for (const { start, trainSize } of queries) {
    const cycles = graph.allCyclesFrom(start);

    const validCycles = cycles.filter(cycle => {
        let isValid = true;
        for (let i = 1; i < cycle.length - 1; i++) {
            const predecessor = cycle[i - 1];
            const successor = cycle[i + 1];
            if (predecessor === successor) {
                isValid = false;
                break;
            }
        }

        const cycleWidth = calcCycleWidth(cycle);
        if (cycleWidth < trainSize) {
            isValid = false;
        }

        return isValid;
    });

    if (validCycles.length === 0) {
        console.log(-1);
        continue;
    }

    const pathsWidths = validCycles.map(cycle => calcCycleWidth(cycle));
    console.log(Math.min(...pathsWidths));
}