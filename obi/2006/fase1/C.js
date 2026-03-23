// a visita deve tomar o menor tempo possível

import DirectedGraph from '../../../utils/DirectedGraph.js';

const [roomsQuantity, hallwaysQuantity] = prompt()
    .split(' ', 2)
    .map(e => parseInt(e));

const roomsWeights = prompt()
    .split(' ', roomsQuantity)
    .map(e => parseInt(e));

const vertexes = new Array(roomsQuantity).fill(0).map((_, i) => i + 1);
const graph = new DirectedGraph(true);
graph.addVertexes(...vertexes);

for (let i = 0; i < hallwaysQuantity; i++) {
    const [roomA, roomB, weight] = prompt()
        .split(' ', 3)
        .map(e => parseInt(e));
    
    graph.addEdge(roomA, roomB, weight);
}

function calculateTourTime(graph = new DirectedGraph(true), tour=[]) {
    let totalTime = 0;

    tour.forEach((e, i, arr) => {
        if (i === tour.length - 1) return;
        
        const time = roomsWeights[e-1];
        totalTime += time;

        const timeToNext = graph.getEdgeWeight(e, arr[i+1]);
        totalTime += timeToNext;
    });

    return totalTime;
}

let allTourTimes = [];

for (let i = 1; i <= roomsQuantity; i++) {
    const cycles = graph.allCyclesFrom(i)
        .filter(cycle => cycle.length >= 2+1);
    
    const tourTimes = cycles.map(cycle => calculateTourTime(graph, cycle));
    
    allTourTimes = [...allTourTimes, ...tourTimes];
}

const minTourTime = Math.min(...allTourTimes);

console.log(minTourTime);
