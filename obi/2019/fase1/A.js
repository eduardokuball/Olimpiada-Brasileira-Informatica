export default function maxAlternatingSubsequenceLength(v) {
    const N = v.length;

    let res = 1;
    const seen = new Set();

    for (let i = 0; i < N; i++) {
        if (seen.has(v[i])) continue;
        seen.add(v[i]);

        for (let j = 0; j < N; j++) {
            let current = 0;
            let last = -1;

            for (let k = 0; k < N; k++) {
                if ((v[k] === v[i] || v[k] === v[j]) && v[k] !== last) {
                    current++;
                    last = v[k];
                }
            }

            res = Math.max(res, current);
        }
    }

    return res;
}