function count(arr, item) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) count++;
    }
    return count;
}

function isSequence(cards) {
    const sorted = [...cards].sort((a, b) => a - b);

    for (let i = 0; i < sorted.length - 1; i++) {
        if (sorted[i] !== sorted[i + 1] - 1) return false;
    }

    return sorted[0] + 200;
}

function isQuadra(cards) {
    const sorted = [...cards].sort((a, b) => a - b);
    if (count(sorted, sorted[0]) !== 4) return false;
    return sorted[0] + 180;
}

function isTrioAndCouple(cards) {
    const sorted = [...cards].sort((a, b) => a - b);

    if (count(sorted, sorted[0]) === 3 && count(sorted, sorted[3]) === 2)
        return sorted[0] + 160;

    if (count(sorted, sorted[3]) === 3 && count(sorted, sorted[0]) === 2)
        return sorted[3] + 160;

    return false;
}

function isTrio(cards) {
    const sorted = [...cards].sort((a, b) => a - b);

    if (count(sorted, sorted[2]) === 3)
        return sorted[2] + 140;

    return false;
}

function isTwoPairs(cards) {
    const sorted = [...cards].sort((a, b) => a - b);

    let pair1 = null, pair2 = null, single = null;

    for (let i = 0; i < sorted.length; i++) {
        const c = count(sorted, sorted[i]);

        if (c === 2) {
            if (pair1 === null) pair1 = sorted[i];
            else if (pair1 !== sorted[i] && pair2 === null) pair2 = sorted[i];
        } else if (c === 1) {
            single = sorted[i];
        }
    }

    if (pair1 !== null && pair2 !== null && single !== null) {
        const [x, y] = pair1 > pair2 ? [pair1, pair2] : [pair2, pair1];
        return 3 * x + 2 * y + 20;
    }

    return false;
}

function isCouple(cards) {
    const sorted = [...cards].sort((a, b) => a - b);

    let pair = null;

    for (let i = 0; i < sorted.length; i++) {
        const c = count(sorted, sorted[i]);

        if (c === 2) {
            if (pair === null) pair = sorted[i];
            else if (pair !== sorted[i]) return false;
        } else if (c > 2) {
            return false;
        }
    }

    return pair || false;
}

export default function evaluateHand(cards) {
    return (
        isSequence(cards) ||
        isQuadra(cards) ||
        isTrioAndCouple(cards) ||
        isTrio(cards) ||
        isTwoPairs(cards) ||
        isCouple(cards) ||
        0
    );
}