import MinHeap from '../../../utils/MinHeap.js';

export default function countPeopleWaitingOver20(cashiers, people = []) {
    let numWaitedOver20 = 0;

    const cashierHeap = new MinHeap();

    for (let j = 0; j < cashiers; j++) {
        cashierHeap.push([0, j]);
    }

    for (const { arrival: t, duration: d } of people) {
        const [freeTime, cashierIdx] = cashierHeap.pop();

        const startService = freeTime < t ? t : freeTime;

        if (freeTime > t + 20) {
            numWaitedOver20++;
        }

        cashierHeap.push([startService + d, cashierIdx]);
    }

    return numWaitedOver20;
}