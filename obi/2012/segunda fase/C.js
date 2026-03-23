import DirectedGraph from "../../../utils/directed-graph.js";

const [roundabouts, entrance, exit, streets] = prompt().
    split(' ')
    .map((e) => {
        return parseInt(e);
    });

const graph = new DirectedGraph(true);

for (let i = 0; i < roundabouts; i++) {
    graph.addVertexes(String(i));
}

const edges = Array.from({ length: roundabouts }, () => []);
for (let i = 0; i < streets; i++) {
    const [a, b, t] = prompt()
        .split(' ')
        .map((e) => {
            return parseInt(e);
        });
    edges[a].push([b, t]); 
    graph.addEdge(String(a), String(b), t);
}

const auxGraph = Array.from({ length: roundabouts }, () =>
    Array.from({ length: roundabouts }, () =>
    Array(3).fill(Infinity)));

const queue = [];
queue.push([entrance, 0]);

while (queue.length > 0) {
    const [currentRoundabout, depth] = queue.shift();
    const moment = depth % 3;

    for (const [nextRoundabout, trafficLight] of edges[currentRoundabout]) {

        if (trafficLight === 1) {
            if (moment === 0) {
                if (auxGraph[currentRoundabout][nextRoundabout][moment] === Infinity) {
                    auxGraph[currentRoundabout][nextRoundabout][moment] = depth + 1;
                    queue.push([nextRoundabout, depth + 1]);
                }
            }
        } else {
            if (moment !== 0) {
                if (auxGraph[currentRoundabout][nextRoundabout][moment] === Infinity) {
                    auxGraph[currentRoundabout][nextRoundabout][moment] = depth + 1;
                    queue.push([nextRoundabout, depth + 1]);
                }
            }
        }
    }
}

let smaller = Infinity;
for (let i = 0; i < roundabouts; i++) {
    for (let j = 0; j < 3; j++) {
        smaller = Math.min(smaller, auxGraph[i][exit][j]);
    }
}

const result = (smaller === Infinity) ? '*' : smaller;
console.log(result);
