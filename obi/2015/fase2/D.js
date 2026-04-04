export default function sumBinaryArrays(m, n, x = [], y = []) {

    let a = [...x];
    let b = [...y];

    const k = Math.max(m, n);

    while (a.length < k) a.push(0);
    while (b.length < k) b.push(0);

    const result = Array(k).fill(0);
    let carry = 0;

    for (let i = k - 1; i >= 0; i--) {

        const sum = a[i] + b[i] + carry;

        result[i] = sum % 2;
        carry = Math.floor(sum / 2);
    }

    if (carry === 1) {
        result.unshift(1);
    }

    return result;
}