import Graph from '../../../utils/Graph.js';
import Permutations from '../../../utils/Permutations.js';

function calculateChemistry(graph, trio) {
    let time = 0;

    for (let i = 0; i < trio.length - 1; i++) {
        const weight = graph.getEdgeWeightSafe(trio[i], trio[i + 1]);
        if (weight !== null) {
            time += weight;
        }
    }

    const extra = graph.getEdgeWeightSafe(trio[0], trio[2]);
    if (extra !== null) {
        time += extra;
    }

    return [time, trio];
}

function getTrios(artists) {
    let trios = Permutations.fixedSizeWithoutRepetition(artists, 3);

    trios.forEach(subArray => {
        subArray.sort((a, b) => a - b);
    });

    trios = Array.from(
        new Set(trios.map(arr => JSON.stringify(arr)))
    ).map(str => JSON.parse(str));

    return trios;
}

function trioMostChemistry(chemistries) {
    const trio = chemistries[0][1];
    trio.sort((a, b) => a - b);
    return trio.join(' ');
}

export default function getBestTrio(musics, pares, edges) {
    const artists = Array(musics).fill().map((_, i) => i + 1);

    const graph = new Graph(true);
    graph.addVertexes(...artists);

    for (let i = 0; i < pares; i++) {
        const [v1, v2, time] = edges[i];
        graph.addEdge(v1, v2, time);
    }

    const trios = getTrios(artists);

    const chemistries = trios.map(trio => calculateChemistry(graph, trio));
    chemistries.sort((a, b) => b[0] - a[0]);

    return trioMostChemistry(chemistries);
}