export default function maxPizza(slices) {
    const n = slices.length;

    const arr = [...slices, ...slices, ...slices];

    let maxSum = 0;

    for (let size = 1; size <= n; size++) {
        for (let i = 0; i <= arr.length - size; i++) {
            const sub = arr.slice(i, i + size);

            if (sub.length > n) continue;

            const sum = sub.reduce((a, b) => a + b, 0);

            if (sum > maxSum) maxSum = sum;
        }
    }

    return maxSum;
}