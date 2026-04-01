export default function getMinimumTime(roundabouts, entrance, exit, streetsList = []) {
    const edges = Array.from({ length: roundabouts }, () => []);

    for (const [a, b, t] of streetsList) {
        edges[a].push([b, t]);
    }

    const auxGraph = Array.from({ length: roundabouts }, () =>
        Array.from({ length: roundabouts }, () =>
            Array(3).fill(Infinity)
        )
    );

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

    return (smaller === Infinity) ? '*' : smaller;
}