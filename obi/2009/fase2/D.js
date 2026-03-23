import Graph from '../../../utils/Graph.js';
import Permutations from '../../../utils/Permutations.js';

function calculateChemistry(trio) {
    let time = 0;
    for (let i = 0; i < trio.length - 1; i++) {
        try {
            time += graph.getEdgeWeight(trio[i], trio[i + 1]);
        } catch (error) {
            time += 0;
        }
    }
    try {
        time += graph.getEdgeWeight(trio[0], trio[2]);
    } catch (error) {
        time += 0;
    }
    return [time,trio];
};

function getTrios(){
    let trios = Permutations.fixedSizeWithoutRepetition(artists,3);
    trios.forEach(subArray => {
        subArray.sort((a, b) => a - b); 
    });
    trios = Array.from(
    new Set(trios.map(arr => JSON.stringify(arr)))
    ).map(str => JSON.parse(str));

    return trios;
};

function trioMostChemistry(chemistries){
    const trio = chemistries[0][1];
    trio.sort((a, b) => a - b);
    return trio.join(' ');
};


const [musics, pares] = prompt()
    .split(' ')
    .map(e => parseInt(e));


const artists = Array(musics).fill()
    .map((_, i) => i + 1);

const graph = new Graph(true);
graph.addVertexes(...artists);

for (let i = 1; i <= pares; i++) {
    const [v1, v2, time] = prompt().split(' ', 3)
        .map(e => parseInt(e));

    graph.addEdge(v1, v2, time);
}

const trios = getTrios();

const chemistries = trios.map(trio => calculateChemistry(trio));
chemistries.sort((a, b) => b[0] - a[0]);

const trio = trioMostChemistry(chemistries);

console.log(trio);


