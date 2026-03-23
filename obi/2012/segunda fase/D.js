import MinHeap from "../../../utils/min-heap.js";

const [c, n] = prompt()
    .split(' ')
    .map((e) => {
        return parseInt(e);
    });

let numWaitedOver20 = 0;
const peopleQueue = [];
const cashierHeap = new MinHeap();

for (let i = 0; i < n; i++) {
    const [t, d] = prompt()
        .split(' ')
        .map((e) => {
            return parseInt(e);
        });
    peopleQueue.push({ arrival: t, duration: d });
}

for (let j = 0; j < c; j++) {
    cashierHeap.push([0, j]);
}

while (peopleQueue.length > 0) {
    const { arrival: t, duration: d } = peopleQueue.shift();
    const [freeTime, cashierIdx] = cashierHeap.pop();

    const startService = freeTime < t ? t : freeTime;

    if (freeTime > t + 20) {
        numWaitedOver20++;
    }

    cashierHeap.push([startService + d, cashierIdx]);
}

console.log(numWaitedOver20);