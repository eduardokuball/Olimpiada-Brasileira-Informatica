export default function distributeCalls(sellers, callsTimes) {

    const w = [];

    for (let i = 0; i < sellers; i++) {
        w.push([0, i]);
    }

    const result = Array(sellers).fill(0);

    for (const t of callsTimes) {
        w.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

        const item = w[0];

        item[0] += t;
        result[item[1]] += 1;
    }
    return result;
}