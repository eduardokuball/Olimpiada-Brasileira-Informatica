const inf = Infinity;
const removed = "X";

function getTop(heap, entryFinder) {
    while (heap.length > 0) {
        heap.sort((a, b) => a[0] - b[0]);
        const [topDist, _, topPosition] = heap.shift();

        if (topPosition !== removed) {
            delete entryFinder[topPosition];
            return [topPosition, topDist];
        }
    }
}

export default function solve(xi, yi, xf, yf, areasData) {
    let heap = [];
    let entryFinder = {};

    const x1 = [];
    const x2 = [];
    const y1 = [];
    const y2 = [];

    for (let i = 0; i < areasData.length; i++) {
        const [a1, b1, a2, b2] = areasData[i];
        x1.push(a1);
        x2.push(a2);
        y1.push(b1);
        y2.push(b2);
    }

    x1.push(xi);
    x2.push(xi);
    y1.push(yi);
    y2.push(yi);

    x1.push(xf);
    x2.push(xf);
    y1.push(yf);
    y2.push(yf);

    const n = areasData.length + 2;

    const cost = Array.from({ length: n }, () => Array(n).fill(inf));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const dx = Math.max(0, Math.max(x1[i], x1[j]) - Math.min(x2[i], x2[j]));
            const dy = Math.max(0, Math.max(y1[i], y1[j]) - Math.min(y2[i], y2[j]));
            cost[i][j] = dx + dy;
        }
    }

    const dist = Array(n).fill(inf);
    const marc = Array(n).fill(0);

    dist[n - 2] = 0;

    const entry = [dist[n - 2], n - 2, n - 2];
    heap.push(entry);
    entryFinder[n - 2] = entry;

    while (Object.keys(entryFinder).length > 0) {
        const [topPosition, topDist] = getTop(heap, entryFinder);

        marc[topPosition] = 1;

        for (let i = 0; i < n; i++) {
            if (marc[i]) continue;

            const ndist = topDist + cost[topPosition][i];

            if (ndist < dist[i]) {
                if (entryFinder[i]) {
                    const oldEntry = entryFinder[i];
                    oldEntry[2] = removed;
                    delete entryFinder[i];
                }

                dist[i] = ndist;

                const newEntry = [dist[i], i, i];
                entryFinder[i] = newEntry;
                heap.push(newEntry);
            }
        }
    }

    return dist[n - 1];
}