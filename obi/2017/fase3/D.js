export default function processFenwickQueries(n, residents, operations) {
    const fenwick = Array(n + 1).fill(0);
    const arr = [0, ...residents];

    function update(i, delta) {
        while (i <= n) {
            fenwick[i] += delta;
            i += i & -i;
        }
    }

    function query(i) {
        let sum = 0;
        while (i > 0) {
            sum += fenwick[i];
            i -= i & -i;
        }
        return sum;
    }

    for (let i = 1; i <= n; i++) {
        update(i, arr[i]);
    }

    const results = [];

    for (const op of operations) {
        if (op[0] === 0) {
            const [, index, newValue] = op;
            const delta = newValue - arr[index];
            arr[index] = newValue;
            update(index, delta);
        } else {
            const [, index] = op;
            results.push(query(index));
        }
    }

    return results;
}